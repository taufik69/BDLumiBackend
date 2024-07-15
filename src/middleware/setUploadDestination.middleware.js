import { ApiError } from "../utils/ApiError.js";

const setUploadDestination = async (req, res, next) => {
  if (!req.headers["x-uploaddestination"]) {
    return res
      .status(400)
      .json(
        new ApiError(
          400,
          null,
          `${req.headers["x-uploaddestination"]} Destination  Missing in Headers `
        )
      );
  }

  req.UploadDesnitation = `${req.headers["x-uploaddestination"]}`;
  next();
};

export { setUploadDestination };
