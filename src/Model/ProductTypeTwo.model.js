import mongoose, { Schema } from "mongoose";

const productTypeTwoSchema = new Schema(
  {
    Title: {
      type: String,
      required: [true, "Missing PT2 Crendential"],
      trim: true,
      index: true,
      lowercase: true,
    },
    productTypeOne: {
      type: Schema.Types.ObjectId,
      ref: "productTypeOne",
    },
  },
  { timestamps: true }
);

export const productTypeTwoModel = mongoose.model(
  "productTypeTwo",
  productTypeTwoSchema
);
