import mongoose, { Model, Schema } from "mongoose";

const notificationSchema: Schema = new mongoose.Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    content: { type: String, required: true },
    viewed: { type: Boolean, required: true, default: false },
    deleted: { type: Boolean, required: true, default: false },
    type: {
      type: String,
      enum: ["comment", "like", "delete", "modified"],
      required: true,
    },
  },
  { timestamps: true }
);

export const Notification =
  mongoose.models?.Notification ||
  mongoose.model("Notification", notificationSchema);
