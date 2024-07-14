import { asyncHandler } from "../utils/AsyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { dimmingModel } from "../Model/Dimming.model.js";

const dimmingController = asyncHandler(async (req, res, next) => {
  const { Title } = req.body;

  /**
   * Check if dimmingTitle is not Exist
   */
  if (!Title) {
    return res
      .status(400)
      .json(new ApiResponse(400, null, `dimmingModel ${Title} is Missing `));
  }

  /**
   * todo : Check is dimming Title is  already exist
   * @method: mongoose.find({Title:Tile})
   */
  const isExistdimming = await dimmingModel.find({ Title: Title });
  if (isExistdimming.length) {
    return res
      .status(400)
      .json(new ApiError(400, null, `dimming ${Title}  Is Already Exist`));
  }

  /**
   * todo : make a new beamAngleListModel
   * @instance new reflectorTypeModel
   */

  const dimming = await new dimmingModel({
    Title,
  }).save();

  return res
    .status(200)
    .json(
      new ApiResponse(200, dimming, `${Title} Iplist Created Sucessfull is Ok`)
    );
});

export { dimmingController };
