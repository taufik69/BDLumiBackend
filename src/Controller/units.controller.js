import { asyncHandler } from "../utils/AsyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
const unitsController = asyncHandler((req, res, next) => {
  res.status(200).json(new ApiResponse(200, null, "EveryThing is Ok"));
});

export { unitsController };
