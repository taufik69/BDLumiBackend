import { asyncHandler } from "../utils/AsyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import { beamAngleListModel } from "../Model/BeamAngle.model.js";

const beamAngleController = asyncHandler(async (req, res, next) => {
  const { Title } = req.body;

  /**
   * Check if BeamAngleTitle is not Exist
   */
  if (!Title) {
    return res
      .status(400)
      .json(new ApiResponse(400, null, `${Title} is Missing `));
  }

  /**
   * todo : Check is beamangle Title is  already exist
   * @method: mongoose.find({Title:Tile})
   */
  const isExistbeamAngleList = await beamAngleListModel.find({ Title: Title });
  if (isExistbeamAngleList.length) {
    return res
      .status(400)
      .json(new ApiError(400, null, `${Title} Ip Title Is Already Exist`));
  }
  /**
   * todo : make a new beamAngleListModel
   * @instance new beamAngleListModel
   */

  const beamangleList = await new beamAngleListModel({
    Title,
  }).save();

  return res
    .status(200)
    .json(
      new ApiResponse(
        200,
        beamangleList,
        `${Title} Iplist Created Sucessfull is Ok`
      )
    );
});

const getAllbeamAngle = asyncHandler(async (req, res) => {
  const beamAngle = await beamAngleListModel.find({});
  return res.status(200).json(new ApiResponse(200, beamAngle));
});

export { beamAngleController, getAllbeamAngle };
