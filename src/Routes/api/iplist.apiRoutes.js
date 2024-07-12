import { Router } from "express";
import { ipListController } from "../../Controller/iplist.controller.js";
const router = Router();

router.route("/iplist").post(ipListController);

export default router;
