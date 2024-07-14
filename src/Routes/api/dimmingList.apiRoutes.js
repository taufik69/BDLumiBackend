import { Router } from "express";
const router = Router();
import { dimmingController } from "../../Controller/dimmingList.controller.js";

router.route("/dimming").post(dimmingController);

export default router;
