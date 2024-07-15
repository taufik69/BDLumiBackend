import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/AsyncHandler.js";
import { productTypeTwoModel } from "../Model/ProductTypeTwo.model.js";
const productTypeTwoController = asyncHandler(async (req, res) => {
  const { Title, productSubCatagory } = req.body;

  if (!Title) {
    return res
      .status(400)
      .json(new ApiError(400, null, ` ProductTypeTwo Title   is Missing `));
  }
  if (!productSubCatagory) {
    return res
      .status(400)
      .json(new ApiError(400, null, ` productSubCatagory   is Missing `));
  }

  /**
   * todo : found if  productTypeOne is Exist or not
   */
  const isExistProductTypeTwo = await productTypeTwoModel.find({
    $or: [{ Title }, { productSubCatagory }],
  });

  if (isExistProductTypeTwo.length) {
    return res
      .status(400)
      .json(
        new ApiError(
          400,
          null,
          `${Title} or ${productSubCatagory}  Is Already Exist`
        )
      );
  }
  /**
   * todo : make a new productTypeOne
   * @instance new productTypeOne
   */

  const productTypeTwo = await new productTypeTwoModel({
    Title,
    productSubCatagory,
  }).save();
  return res
    .status(200)
    .json(
      new ApiResponse(
        200,
        productTypeTwo,
        `${Title} productTypeTwo Created Sucessfull`
      )
    );
});

const getProuductTypeTwoController = asyncHandler(async (req, res) => {
  const getAllProductTypeOneController = await productTypeTwoModel
    .find({})
    .populate("productSubCatagory");

  return res
    .status(200)
    .json(new ApiResponse(200, getAllProductTypeOneController));
});

export { productTypeTwoController, getProuductTypeTwoController };
