import multer from "multer";
import { ApiResponse } from "./ApiResponse.js";

const multerError = (err, req, res, next) => {
  console.log("err from global middlewar", err);
  if (err instanceof multer.MulterError) {
    return res
      .status(400)
      .json(new ApiResponse(400, null, `Multer error: ${err.code}`));
  }
  next();
};

export { multerError };
