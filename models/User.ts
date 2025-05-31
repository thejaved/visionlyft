import { encrypt, decrypt } from "@/lib/crypto";
import mongoose, { Document, Model, Schema } from "mongoose";

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}

interface UserModel extends Model<IUser> {}

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
      lowercase: true,
      set: (plain: string) => encrypt(plain),
      get: (cipher: string) => decrypt(cipher),
    },
    password: {
      type: String,
      required: [true, "Password is required."],
      select: false,
      set: (plain: string) => encrypt(plain),
    },
  },
  {
    timestamps: true,
  }
);

const User: UserModel =
  mongoose.models.User || mongoose.model<IUser>("User", UserSchema);
export default User;
