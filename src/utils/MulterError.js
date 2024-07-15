import multer from "multer";
import { ApiResponse } from "./ApiResponse.js";

const multerError = (err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    console.error("err from multer middleware", err);
    return res
      .status(400)
      .json(new ApiResponse(400, null, `Multer error: ${err.code}`));
  }
  next();
};

export { multerError };
