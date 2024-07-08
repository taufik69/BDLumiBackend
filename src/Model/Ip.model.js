import mongoose, { Schema } from "mongoose";
const ipSchema = new Schema(
  {
    Title: {
      type: String,
      trim: true,
      required: [true, "Missing U Crendential"],
      lowercase: true,
    },
  },
  { timestamps: true }
);

export const ipModel = mongoose.model("ip", ipSchema);
