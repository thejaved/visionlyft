import mongoose, { Document, Model, Schema } from "mongoose";
import crypto from "crypto";
import { encrypt, decrypt } from "@/lib/crypto";

export interface IUser extends Document {
  name: string;
  email: string;
  emailHash: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}

interface UserModel extends Model<IUser> {}

function sha256(text: string): string {
  return crypto.createHash("sha256").update(text).digest("hex");
}

const UserSchema: Schema<IUser> = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required."],
      set: (plain: string) => encrypt(plain),
      get: (cipher: string) => decrypt(cipher),
    },
    email: {
      type: String,
      required: [true, "Email is required."],
      unique: true,
      lowercase: true,
      set: (plain: string) => encrypt(plain),
      get: (cipher: string) => decrypt(cipher),
    },
    emailHash: {
      type: String,
      required: true,
      unique: true,
      select: false, // never return in queries
    },
    password: {
      type: String,
      required: [true, "Password is required."],
      select: false, // never return plaintext
      set: (plain: string) => encrypt(plain),
    },
  },
  {
    timestamps: true,
    toJSON: { getters: true, versionKey: false },
    toObject: { getters: true, versionKey: false },
  }
);

// Before saving a new user or updating email, set emailHash = sha256(lowercasePlaintext)
UserSchema.pre<IUser>("save", function (next) {
  // `this.isModified("email")` appears false because `email` is encrypted.
  // But we can still extract decrypted plaintext via the getter, so:
  if (this.isModified("email")) {
    // Mongoose provides the *encrypted* value in this.email already, so we need to
    // decrypt it back to plaintext. However, because get() runs only when reading,
    // we can directly use the setter logic on the *new* plaintext before it’s encrypted.
    // Instead, we rely on the handler computing hash. To avoid complexity, we skip
    // auto‐hash here; we’ll set emailHash in our handler code.
  }
  next();
});

const User: UserModel =
  mongoose.models.User || mongoose.model<IUser>("User", UserSchema);
export default User;
