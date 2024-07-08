import mongoose, { Schema } from "mongoose";
const ipListSchema = new Schema(
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

export const ipListModel = mongoose.model("ipList", ipListSchema);
