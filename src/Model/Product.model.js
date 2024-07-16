import mongoose, { Schema } from "mongoose";

const productSchema = new Schema(
  {
    productItemCode: {
      type: String,
      trim: true,
      required: [true, "Missing product"],
      lowercase: true,
    },
    productImages: {
      type: String,
    },
    productSellingPrice: {
      type: Number,
    },
    productSNote: {
      type: String,
      trim: true,
    },
    productCatagory: {
      type: Schema.Types.ObjectId,
      ref: "catagory",
    },
    productTypeOne: {
      type: Schema.Types.ObjectId,
      ref: "productTypeOne",
    },
    productTypeTwo: {
      type: Schema.Types.ObjectId,
      ref: "productTypeTwo",
    },
    productIpList: {
      type: Schema.Types.ObjectId,
      ref: "ip",
    },
    productUnitList: {
      type: Schema.Types.ObjectId,
      ref: "unit",
    },
    productIn_Volt: {
      type: Number,
    },
    productOut_Volt: {
      type: Number,
    },
    productWatts: {
      type: Number,
    },
    productAH_MAH: {
      type: Number,
    },
    productPF: {
      type: Number,
    },
    productCct: {
      type: Schema.Types.ObjectId,
      ref: "cct",
    },
    productBeamAngle: {
      type: Schema.Types.ObjectId,
      ref: "beamAngle",
    },
    productReflectorType: {
      type: Schema.Types.ObjectId,
      ref: "reflectorType",
    },
    productDimming: {
      type: Schema.Types.ObjectId,
      ref: "dimming",
    },
    productCapacity: {
      type: Number,
    },
    productDIMLHW: {
      type: Number,
    },
    productCutOff: {
      type: Number,
    },
    productB_Finish: {
      type: Number,
    },
    productBRatedW: {
      type: Number,
    },
    ProductTA: {
      type: Number,
    },

    productTHD: {
      type: Number,
    },
    productPaking: {
      type: Number,
    },
    productMF_LABLE: {
      type: String,
      trim: true,
    },
    productMaxvolt: {
      type: Number,
    },
    productWeight: {
      type: Number,
    },
    productVol_CBM: {
      type: Number,
    },
    productFOB_UP1: {
      type: String,
      trim: true,
    },
    productFOB_UP2: {
      type: String,
      trim: true,
    },
    productFOB_UP3: {
      type: String,
      trim: true,
    },
    productLCTK1: {
      type: String,
      trim: true,
    },
    productLCTK2: {
      type: String,
      trim: true,
    },
    productLCTK3: {
      type: String,
      trim: true,
    },
    productOthers: {
      type: String,
      trim: true,
    },
    productItemqrcode: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

export const productModel = mongoose.model("product", productSchema);
