import crypto from "crypto";

const ALGORITHM = "aes-256-cbc";
const KEY = Buffer.from(process.env.ENCRYPTION_KEY || "", "hex");
const IV = Buffer.from(process.env.ENCRYPTION_IV || "", "hex");

if (KEY.length !== 32) {
  throw new Error("ENCRYPTION_KEY must be 32 bytes in hex (64 hex chars).");
}
if (IV.length !== 16) {
  throw new Error("ENCRYPTION_IV must be 16 bytes in hex (32 hex chars).");
}

export function encrypt(text: string): string {
  const cipher = crypto.createCipheriv(ALGORITHM, KEY, IV);
  const encrypted = Buffer.concat([
    cipher.update(text, "utf8"),
    cipher.final(),
  ]);
  return encrypted.toString("hex");
}

export function decrypt(encryptedHex: string): string {
  const data = Buffer.from(encryptedHex, "hex");
  const decipher = crypto.createDecipheriv(ALGORITHM, KEY, IV);
  const decrypted = Buffer.concat([decipher.update(data), decipher.final()]);
  return decrypted.toString("utf8");
}

export function sha256(text: string): string {
  return crypto.createHash("sha256").update(text).digest("hex");
}
