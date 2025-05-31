import { encrypt } from "@/lib/crypto";
import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData =
  | { success: true; encrypted: string }
  | { success: false; message: string };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res
      .status(405)
      .json({ success: false, message: `Method ${req.method} Not Allowed` });
  }

  const payload = req.body;
  if (!payload || typeof payload !== "object") {
    return res
      .status(400)
      .json({ success: false, message: "Missing JSON payload to encrypt" });
  }

  try {
    const text = JSON.stringify(payload);
    const encrypted = encrypt(text);
    return res.status(200).json({ success: true, encrypted });
  } catch {
    return res
      .status(500)
      .json({ success: false, message: "Encryption failed" });
  }
}
