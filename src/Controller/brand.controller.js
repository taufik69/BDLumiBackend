import { asyncHandler } from "../utils/AsyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { brandModel } from "../Model/Brand.model.js";

const brandController = asyncHandler(async (req, res) => {
  const { BrandName } = req.body;

  /**
   *todo : validate brand input field
   */

  if (!BrandName) {
    return res
      .status(400)
      .json(new ApiError(400, null, `Brand Title  is Missing `));
  }

  /**
   * todo : chekc a file   is exist
   */

  const BrandImage = req.files?.BrandImage;

  if (!BrandImage) {
    return res
      .status(400)
      .json(new ApiError(400, null, `BrandImg field is Missing `));
  }

  /**
   * todo : Check is beamangle Title is  already exist
   * @method: mongoose.find({Title:Tile})
   */

  const isExistbrandModel = await brandModel.find({
    $or: [{ BrandName }, { BrandImage: BrandImage[0].filename }],
  });
  console.log(isExistbrandModel);

  if (isExistbrandModel.length) {
    return res
      .status(400)
      .json(
        new ApiError(
          400,
          null,
          `${BrandName} or ${BrandImage[0].filename} Title Is Already Exist`
        )
      );
  }

  /**
   * todo : create Brand user
   * *instace brandModel
   */
  const brand = await new brandModel({
    BrandName,
    BrandImage: `${process.env.DOMAIN_NAME}/${req.headers["x-uploaddestination"]}/${BrandImage[0].filename}`,
  }).save();

  return res
    .status(200)
    .json(new ApiResponse(200, brand, `${BrandName} brand Created Sucessfull`));
});

const getAllBrand = asyncHandler(async (req, res) => {
  const AllBrand = await brandModel.find({});
  return res.status(200).json(new ApiResponse(200, AllBrand));
});
export { brandController, getAllBrand };
