import mongoose, { Schema } from "mongoose";

const beamAngleSchema = new Schema(
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

export const beamAngleListModel = mongoose.model("beamAngle", beamAngleSchema);
