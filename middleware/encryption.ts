import { decrypt, encrypt } from "@/lib/crypto";
import type { NextApiRequest, NextApiResponse } from "next";

export function withEncryption(handler: any) {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.body?.code) {
      try {
        const decryptedBody = JSON.parse(decrypt(req.body.code));
        req.body = decryptedBody;
      } catch {
        return res
          .status(400)
          .json({ success: false, message: "Invalid encrypted payload" });
      }
    }

    const originalJson = res.json.bind(res);
    res.json = (data: any) => {
      const encrypted = encrypt(JSON.stringify(data));
      return originalJson({ encrypted });
    };

    return handler(req, res);
  };
}
