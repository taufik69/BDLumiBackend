import { asyncHandler } from "../utils/AsyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import { cctModel } from "../Model/Cct.model.js";

const cctListController = asyncHandler(async (req, res, next) => {
  const { Title } = req.body;

  /**
   * Check if BeamAngleTitle is not Exist
   */
  if (!Title) {
    return res
      .status(400)
      .json(new ApiResponse(200, null, `cct ${Title} is Missing `));
  }

  /**
   * todo : Check is beamangle Title is  already exist
   * @method: mongoose.find({Title:Tile})
   */
  const isExistcct = await cctModel.find({ Title: Title });
  if (isExistcct.length) {
    return res
      .status(400)
      .json(new ApiError(400, null, `CCT ${Title}  Is Already Exist`));
  }
  /**
   * todo : make a new beamAngleListModel
   * @instance new beamAngleListModel
   */

  const cct = await new cctModel({
    Title,
  }).save();

  return res
    .status(200)
    .json(
      new ApiResponse(200, cct, `${Title} Iplist Created Sucessfull is Ok`)
    );
});
const getAllcctList = asyncHandler(async (req, res) => {
  const Allcct = await cctModel.find({});
  return res.status(200).json(new ApiResponse(200, Allcct));
});
export { cctListController, getAllcctList };
