import { Router } from "express";
import utilsRoutes from "./utils.apiRoutes.js";
const router = Router();
router.use(utilsRoutes);

export default router;
