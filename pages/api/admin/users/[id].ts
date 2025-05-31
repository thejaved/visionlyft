import mongoose from "mongoose";
import type { NextApiRequest, NextApiResponse } from "next";

import { sha256 } from "@/lib/crypto";
import connectDB from "@/lib/connectDB";
import User, { IUser } from "@/models/User";
import { withEncryption } from "@/middleware/encryption";

interface UpdateUserBody {
  name?: string;
  email?: string;
  password?: string;
}

type ErrorResponse = { success: false; message: string };
type UserResponse = { success: true; data: Partial<IUser> };
type ResponseData = ErrorResponse | UserResponse;

export default withEncryption(async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const { method, query, body } = req;
  const id = Array.isArray(query.id) ? query.id[0] : query.id;

  if (!id || !mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ success: false, message: "Invalid user ID" });
  }

  await connectDB();
  const userId = new mongoose.Types.ObjectId(id);

  if (method === "GET") {
    try {
      const user = await User.findById(userId, {
        password: 0,
        emailHash: 0,
      }).lean();
      if (!user) {
        return res
          .status(404)
          .json({ success: false, message: "User not found" });
      }
      return res.status(200).json({ success: true, data: user });
    } catch {
      return res.status(500).json({ success: false, message: "Server Error" });
    }
  }

  if (method === "PUT") {
    const { name, email, password } = body as UpdateUserBody;

    if (name !== undefined) {
      if (
        typeof name !== "string" ||
        name.trim().length < 2 ||
        name.trim().length > 50
      ) {
        return res
          .status(400)
          .json({ success: false, message: "Name must be 2–50 characters." });
      }
    }

    let hashedEmail: string | undefined;
    if (email !== undefined) {
      if (
        typeof email !== "string" ||
        !/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email.trim())
      ) {
        return res
          .status(400)
          .json({ success: false, message: "Invalid email address." });
      }
      const normalizedEmail = email.trim().toLowerCase();
      hashedEmail = sha256(normalizedEmail);
      const existing = await User.findOne({
        emailHash: hashedEmail,
        _id: { $ne: userId },
      }).lean();
      if (existing) {
        return res
          .status(409)
          .json({ success: false, message: "Email already in use." });
      }
    }

    if (password !== undefined) {
      if (typeof password !== "string" || password.length < 6) {
        return res.status(400).json({
          success: false,
          message: "Password must be at least 6 characters.",
        });
      }
    }

    const updateFields: Partial<IUser> = {};
    if (name) updateFields.name = name.trim();
    if (email) {
      updateFields.email = email.trim().toLowerCase();
      if (hashedEmail) updateFields.emailHash = hashedEmail;
    }
    if (password) updateFields.password = password;

    if (!updateFields.name && !updateFields.email && !updateFields.password) {
      return res
        .status(400)
        .json({ success: false, message: "Nothing to update." });
    }

    updateFields.updatedAt = new Date();

    try {
      const updatedUser = await User.findByIdAndUpdate(
        userId,
        { $set: updateFields },
        { new: true, runValidators: true, select: "-password -emailHash" }
      ).lean();
      if (!updatedUser) {
        return res
          .status(404)
          .json({ success: false, message: "User not found." });
      }
      return res.status(200).json({ success: true, data: updatedUser });
    } catch (err: any) {
      if (err.name === "ValidationError" && err.errors) {
        const messages = Object.values(err.errors)
          .map((e: any) => e.message)
          .join("; ");
        return res.status(400).json({ success: false, message: messages });
      }
      return res.status(500).json({ success: false, message: "Server Error" });
    }
  }

  if (method === "DELETE") {
    try {
      const deletedUser = await User.findByIdAndDelete(userId, {
        projection: { password: 0, emailHash: 0 },
      }).lean();
      if (!deletedUser) {
        return res
          .status(404)
          .json({ success: false, message: "User not found." });
      }
      return res.status(200).json({ success: true, data: deletedUser });
    } catch {
      return res.status(500).json({ success: false, message: "Server Error" });
    }
  }

  res.setHeader("Allow", ["GET", "PUT", "DELETE"]);
  return res
    .status(405)
    .json({ success: false, message: `Method ${method} Not Allowed` });
});
