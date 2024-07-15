import { Router } from "express";
import {
  getAllUnits,
  unitsController,
} from "../../Controller/units.controller.js";
const router = Router();

router.route("/units").post(unitsController).get(getAllUnits);

export default router;
