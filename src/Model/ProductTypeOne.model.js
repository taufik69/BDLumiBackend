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
    productOneCatagory: {
      type: Schema.Types.ObjectId,
      ref: "catagory",
    },
  },
  { timestamps: true }
);

export const productTypeOneModel = mongoose.model(
  "productTypeOne",
  productTypeOneSchema
);
