import mongoose, { Schema } from "mongoose";

const mountingSchema = new Schema(
  {
    Title: {
      type: String,
      trim: true,
      required: [true, "Missing BAList Crendential"],
      lowercase: true,
    },
  },
  { timestamps: true }
);

export const mountingModel = mongoose.model("mounting", mountingSchema);
