import { Router } from "express";
import { beamAngleController } from "../../Controller/beamAngle.controller.js";
const router = Router();

router.route("/beamangle").post(beamAngleController);

export default router;
