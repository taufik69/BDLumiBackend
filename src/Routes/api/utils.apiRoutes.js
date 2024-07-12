import { Router } from "express";
import { unitsController } from "../../Controller/units.controller.js";
const router = Router();

router.route("/units").post(unitsController);

export default router;
