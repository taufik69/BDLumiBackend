import { Router } from "express";
const router = Router();
import {
  getreflectorTypeList,
  reflectorTypeController,
} from "../../Controller/reflectorType.controller.js";

router
  .route("/reflector")
  .post(reflectorTypeController)
  .get(getreflectorTypeList);

export default router;
