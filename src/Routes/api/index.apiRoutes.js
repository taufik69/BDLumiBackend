import { Router } from "express";
import utilsRoutes from "./utils.apiRoutes.js";
import iplistRoutes from "./iplist.apiRoutes.js";
import beamAngleRoutes from "./beamAngle.apiRoutes.js";
import reflectorTypeRoutes from "./reflectorType.apiRoutes.js";
const router = Router();
router.use("/bdluminers", utilsRoutes);
router.use("/bdluminers", iplistRoutes);
router.use("/bdluminers", beamAngleRoutes);
router.use("/bdluminers", reflectorTypeRoutes);

export default router;
