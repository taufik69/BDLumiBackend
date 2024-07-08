import mongoose, { Schema } from "mongoose";

const reflectorTypeSchema = new Schema(
  {
    Title: {
      type: String,
      trim: true,
      required: [true, "Missing RT Crendential"],
      lowercase: true,
    },
  },
  { timestamps: true }
);

export const reflectorTypeModel = mongoose.model(
  "reflectorType",
  reflectorTypeSchema
);
