import { Router } from "express";
import {
  beamAngleController,
  getAllbeamAngle,
} from "../../Controller/beamAngle.controller.js";
const router = Router();

router.route("/beamangle").post(beamAngleController).get(getAllbeamAngle);

export default router;
