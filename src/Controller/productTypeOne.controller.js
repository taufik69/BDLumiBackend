import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/AsyncHandler.js";
import { productTypeOneModel } from "../Model/ProductTypeOne.model.js";

const productTypeOneController = asyncHandler(async (req, res) => {
  const { Title, productOneCatagory } = req.body;

  if (!Title) {
    return res
      .status(400)
      .json(new ApiError(400, null, ` ProductTypeOne Title   is Missing `));
  }
  if (!productOneCatagory) {
    return res
      .status(400)
      .json(new ApiError(400, null, ` productOneCatagory   is Missing `));
  }

  /**
   * todo : found if  productTypeOne is Exist or not
   */
  const isExistProductTypeOne = await productTypeOneModel.find({
    $or: [{ Title }, { productOneCatagory }],
  });

  if (isExistProductTypeOne.length) {
    return res
      .status(400)
      .json(
        new ApiError(
          400,
          null,
          `${Title} or ${productOneCatagory}  Is Already Exist`
        )
      );
  }
  /**
   * todo : make a new productTypeOne
   * @instance new productTypeOne
   */

  const productTypeOne = await new productTypeOneModel({
    Title,
    productOneCatagory,
  }).save();
  return res
    .status(200)
    .json(
      new ApiResponse(
        200,
        productTypeOne,
        `${Title} productTypeOne Created Sucessfull`
      )
    );
});

const getProuductTypeOneController = asyncHandler(async (req, res) => {
  const getAllProductTypeOneController = await productTypeOneModel
    .find({})
    .populate("productOneCatagory");

  return res
    .status(200)
    .json(new ApiResponse(200, getAllProductTypeOneController));
});

export { productTypeOneController, getProuductTypeOneController };
