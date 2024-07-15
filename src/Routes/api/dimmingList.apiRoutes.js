import { Router } from "express";
const router = Router();
import {
  dimmingController,
  getAllDimmingList,
} from "../../Controller/dimmingList.controller.js";

router.route("/dimming").post(dimmingController).get(getAllDimmingList);

export default router;
