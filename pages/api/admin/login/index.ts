import connectDB from "@/lib/connectDB";
import User, { IUser } from "@/models/User";
import { withEncryption } from "@/middleware/encryption";
import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData =
  | { success: true; data: Partial<IUser> }
  | { success: false; message: string };

export default withEncryption(async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const { method } = req;

  if (method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res
      .status(405)
      .json({ success: false, message: `Method ${method} Not Allowed` });
  }

  await connectDB();

  try {
    const { email, password } = req.body as {
      email?: string;
      password?: string;
    };

    if (!email?.trim() || !password) {
      return res.status(400).json({
        success: false,
        message: "Both email and password are required.",
      });
    }

    const user = await User.findOne({
      email: email.trim().toLowerCase(),
    }).select("+password");

    if (!user) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid credentials." });
    }

    if (user.password !== password) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid credentials." });
    }

    const { password: _pwd, ...userWithoutPassword } = user.toObject();

    return res.status(200).json({ success: true, data: userWithoutPassword });
  } catch (error) {
    console.error("POST /api/auth/login error:", error);
    return res.status(500).json({ success: false, message: "Server Error" });
  }
});
