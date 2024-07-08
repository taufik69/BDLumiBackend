import mongoose, { Schema } from "mongoose";

const dimmingSchema = new Schema(
  {
    Title: {
      type: String,
      trim: true,
      required: [true, "Missing Dimming Crendential"],
      lowercase: true,
    },
  },
  { timestamps: true }
);

export const dimmingModel = mongoose.model("dimming", dimmingSchema);
