import { asyncHandler } from "../utils/AsyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { productModel } from "../Model/Product.model.js";
import { makeQrCode } from "../utils/qrcodeGenerator.js";

const productcontroller = asyncHandler(async (req, res) => {
  const requiredFields = Object.keys(req.body);

  /**
   * todo :validate product Item dynamically
   */
  let productData = {};
  for (let field of requiredFields) {
    if (!req.body[field]) {
      return res
        .status(400)
        .json(new ApiError(400, null, `${field} is Missing !!`));
    }
    productData[field] = req.body[field];
  }

  /**
   * todo: validate product image
   */

  const productImage = req.files?.productImages;
  console.log(productImage);
  if (!productImage) {
    return res
      .status(400)
      .json(new ApiError(400, null, `productImage is Missing !!`));
  }
  /**
   * todo: check if product already have database
   */
  /**
   * todo : Add new field in productData object
   */
  productData["productImages"] =
    `${process.env.DOMAIN_NAME}/${req.headers["x-uploaddestination"]}/${productImage[0].filename}`;
  const qrcode = await makeQrCode(req.body.productItemCode);
  productData["productItemqrcode"] = qrcode;
  /**
   * *check if catgory Title and Status is already exist
   */
  const isExistProduct = await productModel.find({
    productItemCode: req.body.productItemCode,
  });

  if (isExistProduct.length) {
    return res
      .status(400)
      .json(
        new ApiError(
          400,
          null,
          `${req.body.productItemCode}  is Already Exist `
        )
      );
  }

  /**
   * todo : save data on database
   */
  const product = await new productModel(productData).save();

  return res
    .status(200)
    .json(new ApiResponse(200, product, ` Product Created Sucessfull`));
});

const getAllProduct = asyncHandler(async (req, res) => {
  const allProduct = await productModel
    .find({})
    .populate("productCatagory")
    .populate("productTypeOne")
    .populate("productTypeTwo")
    .populate("productIpList")
    .populate("productUnitList")
    .populate("productCct")
    .populate("productBeamAngle")
    .populate("productReflectorType")
    .populate("productDimming");

  return res.status(200).json(new ApiResponse(200, allProduct));
});

export { productcontroller, getAllProduct };
