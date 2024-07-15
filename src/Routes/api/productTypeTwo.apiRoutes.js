import { Router } from "express";
import {
  productTypeTwoController,
  getProuductTypeTwoController,
} from "../../Controller/ProductTypeTwo.controller.js";

const router = Router();
router
  .route("/productTypeTwo")
  .post(productTypeTwoController)
  .get(getProuductTypeTwoController);

export default router;
