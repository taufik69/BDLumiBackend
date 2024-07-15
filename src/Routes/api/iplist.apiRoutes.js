import { Router } from "express";
import {
  getAllIpist,
  ipListController,
} from "../../Controller/iplist.controller.js";
const router = Router();

router.route("/iplist").post(ipListController).get(getAllIpist);

export default router;
