import { asyncHandler } from "../utils/AsyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { CatagoryModel } from "../Model/Catagory.model.js";

const catagoryContoller = asyncHandler(async (req, res, next) => {
  // get a body input
  const { Title, Status } = req.body;
  console.log(Title, Status);
});

export { catagoryContoller };
