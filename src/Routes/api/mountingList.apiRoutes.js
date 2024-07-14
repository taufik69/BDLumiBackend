import { Router } from "express";
import { mountingListController } from "../../Controller/mountingLIst.controller.js";

const router = Router();
router.route("/mountinglist").post(mountingListController);

export default router;
