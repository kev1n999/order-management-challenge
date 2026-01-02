import { Document, Schema, model } from "mongoose";

interface UserProps extends Document {
  email: string;
  password: string;
}

const userSchema = new Schema<UserProps>({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

export const User = model<UserProps>("User", userSchema);
