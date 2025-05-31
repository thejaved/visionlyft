import { decrypt } from "@/lib/crypto";
import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData =
  | { success: true; data: any }
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

  const { code } = req.body as { code?: string };
  if (!code) {
    return res
      .status(400)
      .json({ success: false, message: "Missing code payload" });
  }

  try {
    const decryptedText = decrypt(code);
    const data = JSON.parse(decryptedText);
    return res.status(200).json({ success: true, data });
  } catch {
    return res
      .status(500)
      .json({ success: false, message: "Decryption failed" });
  }
}
