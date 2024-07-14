import { Router } from "express";
import { catagoryContoller } from "../../Controller/catagory.controller.js";
const router = Router();
router.route("/createCatagory").post(catagoryContoller);
export default router;
