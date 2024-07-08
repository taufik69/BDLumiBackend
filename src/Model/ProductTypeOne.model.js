import mongoose, { Schema } from "mongoose";

const productTypeOneSchema = new Schema(
  {
    Title: {
      type: String,
      required: [true, "Missing PT1 Crendential"],
      trim: true,
      index: true,
      lowercase: true,
    },
    productCatagory: {
      type: Schema.Types.ObjectId,
      ref: "Catagory",
    },
  },
  { timestamps: true }
);

export const productTypeOne = mongoose.model(
  "productTypeOne",
  productTypeOneSchema
);
