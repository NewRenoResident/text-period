import mongoose, { Model, Schema } from "mongoose";
import { IUser } from "./types";

const userSchema: Schema<IUser> = new mongoose.Schema(
  {
    username: { type: String, required: true, min: 3, max: 20 },
    email: { type: String, required: true, unique: true, max: 50 },
    passwordHash: { type: String },
    wallpaperImg: { type: String },
    profileInfo: {
      fullName: { type: String, max: 150 },
      bio: { type: String, max: 500 },
      location: { type: String },
      website: { type: String },
      dateOfBirth: { type: Date },
    },
    img: { type: String },
    followers: [{ type: Schema.Types.ObjectId, ref: "User" }],
    following: [{ type: Schema.Types.ObjectId, ref: "User" }],
    notifications: [{ type: Schema.Types.ObjectId, ref: "Notification" }],
  },
  { timestamps: true }
);

export const User: Model<IUser> =
  mongoose.models?.User || mongoose.model<IUser>("User", userSchema);
