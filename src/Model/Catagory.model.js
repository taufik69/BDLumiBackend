import mongoose, { Schema } from "mongoose";

const CatagorySchema = new Schema(
  {
    Title: {
      type: String,
      required: [true, "Missing CT Crendential"],
      trim: true,
      index: true,
      lowercase: true,
    },
    Status: {
      type: String,
      trim: true,
      enum: ["Active", "inActive", "pending"],
      default: "inActive",
    },
    images: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

export const CatagoryModel = mongoose.model("catagory", CatagorySchema);
