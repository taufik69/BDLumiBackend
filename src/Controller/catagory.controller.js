import { asyncHandler } from "../utils/AsyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { CatagoryModel } from "../Model/Catagory.model.js";

const catagoryContoller = asyncHandler(async (req, res, next) => {
  // get a body input
  const { Title, Status } = req.body;
  if (!Title) {
    return res
      .status(400)
      .json(new ApiError(400, null, `Catagory Title Title  is Missing `));
  }
  if (!Status) {
    return res
      .status(400)
      .json(new ApiError(400, null, `Catagory Status Title  is Missing `));
  }

  /**
   * todo : Takes a file
   */
  const categoryImage = req.files?.images;

  if (!categoryImage) {
    return res
      .status(400)
      .json(new ApiError(400, null, `categoryImage field is Missing `));
  }
  /**
   * *check if catgory Title and Status is already exist
   */
  // const isExistCatagory = await new CatagoryModel.find({
  //   $or: [{ Title }, { Status }],
  // });

  /**
   * todo : crate a catgory in catgory field
   */

  const category = await new CatagoryModel({
    Title,
    Status,
    images: `${process.env.DOMAIN_NAME}/${req.headers["x-uploaddestination"]}/${categoryImage[0].filename}`,
  }).save();
  return res
    .status(200)
    .json(
      new ApiResponse(200, category, `${Title} Catagory Created Sucessfull`)
    );
});

const getAllCatagory = asyncHandler(async (req, res) => {
  const getCategory = await CatagoryModel.find({});
  return res.status(200).json(new ApiResponse(200, getCategory));
});

export { catagoryContoller, getAllCatagory };
