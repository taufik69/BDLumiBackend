import { Router } from "express";
import {
  productTypeOneController,
  getProuductTypeOneController,
} from "../../Controller/productTypeOne.controller.js";

const router = Router();
router
  .route("/productTypeOne")
  .post(productTypeOneController)
  .get(getProuductTypeOneController);

export default router;
