import { encrypt } from "@/lib/crypto";
import connectDB from "@/lib/connectDB";
import User, { IUser } from "@/models/User";
import { withEncryption } from "@/middleware/encryption";
import type { NextApiRequest, NextApiResponse } from "next";

interface CreateUserBody {
  name?: string;
  email?: string;
  password?: string;
}

type ErrorResponse = { success: false; message: string };
type UserResponse = { success: true; data: Partial<IUser> };
type UserListResponse = { success: true; data: Partial<IUser>[] };
type ResponseData = ErrorResponse | UserResponse | UserListResponse;

export default withEncryption(async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  await connectDB();
  const { method } = req;

  if (method === "GET") {
    try {
      const docs = await User.find().sort({ createdAt: -1 });
      const users = docs.map((doc) =>
        doc.toObject({ getters: true, virtuals: false })
      );
      return res.status(200).json({ success: true, data: users });
    } catch (error) {
      console.error("GET /api/users error:", error);
      return res.status(500).json({ success: false, message: "Server Error" });
    }
  }

  if (method === "POST") {
    const { name, email, password } = req.body as CreateUserBody;

    if (
      !name ||
      typeof name !== "string" ||
      name.trim().length < 2 ||
      name.trim().length > 50
    ) {
      return res
        .status(400)
        .json({ success: false, message: "Name must be 2-50 characters." });
    }

    if (
      !email ||
      typeof email !== "string" ||
      !/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email.trim())
    ) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid email address." });
    }

    if (!password || typeof password !== "string" || password.length < 6) {
      return res.status(400).json({
        success: false,
        message: "Password must be at least 6 characters.",
      });
    }

    const normalizedEmail = email.trim().toLowerCase();
    const encryptedEmail = encrypt(normalizedEmail);

    try {
      const existing = await User.findOne({ email: encryptedEmail })
        .select("_id")
        .lean();
      if (existing) {
        return res
          .status(409)
          .json({ success: false, message: "Email already registered." });
      }
    } catch (error) {
      console.error("Email lookup failed:", error);
      return res.status(500).json({ success: false, message: "Server Error" });
    }

    try {
      const newDoc = await User.create({
        name: name.trim(),
        email: normalizedEmail,
        password,
      });

      const decrypted = newDoc.toObject({ getters: true });
      const { password: _, ...userWithoutPassword } = decrypted;
      return res.status(201).json({ success: true, data: userWithoutPassword });
    } catch (err: any) {
      console.error("POST /api/users error:", err);

      if (err.code === 11000 && err.keyPattern?.email) {
        return res
          .status(409)
          .json({ success: false, message: "Email already registered." });
      }

      if (err.name === "ValidationError" && err.errors) {
        const messages = Object.values(err.errors)
          .map((e: any) => e.message)
          .join("; ");
        return res.status(400).json({ success: false, message: messages });
      }

      return res.status(500).json({ success: false, message: "Server Error" });
    }
  }

  res.setHeader("Allow", ["GET", "POST"]);
  return res
    .status(405)
    .json({ success: false, message: `Method ${method} Not Allowed` });
});
