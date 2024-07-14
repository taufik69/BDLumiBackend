import { Router } from "express";
import { brandController } from "../../Controller/brand.controller.js";
import { upload } from "../../middleware/multer.middleware.js";
import { multerError } from "../../utils/MulterError.js";

const router = Router();

router
  .route("/brand")
  .post(
    upload.fields([{ name: "BrandImage", maxCount: 1 }]),
    multerError,
    brandController
  );

export default router;
