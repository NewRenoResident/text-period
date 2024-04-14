import mongoose, { Model, Schema } from "mongoose";
const notificationSchema: Schema = new mongoose.Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    content: { type: String, required: true },
    type: { type: String, required: true },
  },
  { timestamps: true, required: true }
);

export const Notification =
  mongoose.models?.Notification ||
  mongoose.model("Notification", notificationSchema);
