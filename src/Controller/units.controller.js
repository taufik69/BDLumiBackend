import { asyncHandler } from "../utils/AsyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import { unitModel } from "../Model/Unit.model.js";
import chalk from "chalk";
const unitsController = asyncHandler(async (req, res, next) => {
  const { Title } = req.body;
  //   console.log(new ApiError(401, null, "Unit Title Is Missing"));
  if (!Title) {
    return res
      .status(400)
      .json(new ApiError(401, null, "Unit Title Is Missing"));
  }
  /**
   * todo : check already have a same units
   */
  const isExistUnit = await unitModel.find({ Title });
  if (isExistUnit.length) {
    return res
      .status(400)
      .json(new ApiError(401, null, "Unit Title Is Already Exist"));
  }
  /**
   * todo : make a new unit
   */

  const unit = await new unitModel({
    Title,
  }).save();

  res
    .status(200)
    .json(new ApiResponse(200, unit, "unit Created Sucessfull is Ok"));
});

export { unitsController };
