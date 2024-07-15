import { Router } from "express";
import {
  getAllMountingList,
  mountingListController,
} from "../../Controller/mountingLIst.controller.js";

const router = Router();
router
  .route("/mountinglist")
  .post(mountingListController)
  .get(getAllMountingList);

export default router;
