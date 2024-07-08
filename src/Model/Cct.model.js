import mongoose, { Schema } from "mongoose";

const cctSchema = new Schema(
  {
    Title: {
      type: String,
      trim: true,
      required: [true, "Missing cct Crendential"],
      lowercase: true,
    },
  },
  { timestamps: true }
);

export const cctModel = mongoose.model("cct", cctSchema);
