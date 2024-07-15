import { Router } from "express";
import { catagoryContoller } from "../../Controller/catagory.controller.js";
import { upload } from "../../middleware/multer.middleware.js";
import { multerError } from "../../utils/MulterError.js";
import { setUploadDestination } from "../../middleware/setUploadDestination.middleware.js";
const router = Router();
router
  .route("/createCatagory")
  .post(
    setUploadDestination,
    upload.fields([{ name: "images", maxCount: 1 }]),
    multerError,
    catagoryContoller
  );
export default router;
