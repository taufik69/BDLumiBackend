import { Router } from "express";
import {
  cctListController,
  getAllcctList,
} from "../../Controller/cctList.controller.js";
const router = Router();

router.route("/cct").post(cctListController).get(getAllcctList);

export default router;
