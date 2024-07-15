import { asyncHandler } from "../utils/AsyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { mountingModel } from "../Model/Mounting.model.js";

const mountingListController = asyncHandler(async (req, res, next) => {
  const { Title } = req.body;

  /**
   * Check if mountingModel is not Exist
   */
  if (!Title) {
    return res
      .status(400)
      .json(new ApiResponse(400, null, `Mounting  ${Title} is Missing `));
  }

  /**
   * todo : Check is mountingModel Title is  already exist
   * @method: mongoose.find({Title:Tile})
   */
  const isExistmountin = await mountingModel.find({ Title: Title });
  if (isExistmountin.length) {
    return res
      .status(400)
      .json(new ApiError(400, null, `${Title} Ip Title Is Already Exist`));
  }

  /**
   * todo : make a new mounting
   * @instance new mountingModel
   */

  const mounting = await new mountingModel({
    Title,
  }).save();

  return res
    .status(200)
    .json(
      new ApiResponse(200, mounting, `${Title} Iplist Created Sucessfull is Ok`)
    );
});

const getAllMountingList = asyncHandler(async (req, res) => {
  const AlldimountingList = await mountingModel.find({});
  return res.status(200).json(new ApiResponse(200, AlldimountingList));
});
export { mountingListController, getAllMountingList };
