import { Router } from "express";
import { cctListController } from "../../Controller/cctList.controller.js";
const router = Router();

router.route("/cc").post(cctListController);

export default router;
