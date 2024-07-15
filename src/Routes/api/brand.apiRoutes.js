import { Router } from "express";
import { upload } from "../../middleware/multer.middleware.js";
import { multerError } from "../../utils/MulterError.js";
import { setUploadDestination } from "../../middleware/setUploadDestination.middleware.js";
import {
  brandController,
  getAllBrand,
} from "../../Controller/brand.controller.js";

const router = Router();
router
  .route("/brand")
  .post(
    setUploadDestination,
    upload.fields([{ name: "BrandImage", maxCount: 1 }]),
    multerError,
    brandController
  )
  .get(getAllBrand);

export default router;
