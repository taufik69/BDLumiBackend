import mongoose, { Schema } from "mongoose";
const unitSchema = new Schema(
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

export const unitModel = mongoose.model("unit", unitSchema);
