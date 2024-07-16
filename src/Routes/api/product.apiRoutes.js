import { Router } from "express";
import {
  getAllProduct,
  productcontroller,
} from "../../Controller/prouduct.controller.js";
import { upload } from "../../middleware/multer.middleware.js";
import { multerError } from "../../utils/MulterError.js";
import { setUploadDestination } from "../../middleware/setUploadDestination.middleware.js";
const router = Router();

router
  .route("/product")
  .post(
    setUploadDestination,
    upload.fields([{ name: "productImages", maxCount: 1 }]),
    multerError,
    productcontroller
  )
  .get(getAllProduct);

export default router;
