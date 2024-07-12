import { Router } from "express";
import utilsRoutes from "./utils.apiRoutes.js";
import iplistRoutes from "./iplist.apiRoutes.js";
import beamAngleRoutes from "./beamAngle.apiRoutes.js";
import reflectorTypeRoutes from "./reflectorType.apiRoutes.js";
const router = Router();
router.use(process.env.CONPANY_NAME_ROUTE, utilsRoutes);
router.use(process.env.CONPANY_NAME_ROUTE, iplistRoutes);
router.use(process.env.CONPANY_NAME_ROUTE, beamAngleRoutes);
router.use(process.env.CONPANY_NAME_ROUTE, reflectorTypeRoutes);

export default router;
