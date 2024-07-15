import { asyncHandler } from "../utils/AsyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import { unitModel } from "../Model/Unit.model.js";

const unitsController = asyncHandler(async (req, res, next) => {
  const { Title } = req.body;
  /**
   * Check if units Title is not Exist
   */
  if (!Title) {
    return res
      .status(400)
      .json(
        new ApiError(
          400,
          null,
          `${isExistIpList[0].Title} Ip Title Is Already Exist`
        )
      );
  }
  /**
   * todo : check already have a same units
   */
  const isExistUnit = await unitModel.find({ Title });
  if (isExistUnit.length) {
    return res
      .status(400)
      .json(
        new ApiError(
          400,
          null,
          `${isExistUnit[0].Title} unit Title Is Already Exist`
        )
      );
  }
  /**
   * todo : make a new unit
   * @instance new unitModel
   */

  const unit = await new unitModel({
    Title,
  }).save();

  return res
    .status(200)
    .json(new ApiResponse(200, unit, "unit Created Sucessfull is Ok"));
});

const getAllUnits = asyncHandler(async (req, res) => {
  const AllUnits = await unitModel.find({});
  return res.status(200).json(new ApiResponse(200, AllUnits));
});

export { unitsController, getAllUnits };
