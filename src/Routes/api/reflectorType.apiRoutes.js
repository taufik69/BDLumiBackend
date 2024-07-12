import { Router } from "express";
const router = Router();
import { reflectorTypeController } from "../../Controller/reflectorType.controller.js";

router.route("/reflector").post(reflectorTypeController);

export default router;
