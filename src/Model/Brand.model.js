import mongoose, { Schema } from "mongoose";

const brandSchema = new Schema(
  {
    BrandName: {
      type: String,
      trim: true,
      required: [true, "Missing BrandName"],
      lowercase: true,
    },
    BrandImage: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

export const brandModel = mongoose.model("brand", brandSchema);
