import { Router } from "express";
const router = Router();
import apiRoutes from "./api/index.apiRoutes.js";
router.use(process.env.BASE_API, apiRoutes);
router.use(process.env.BASE_API, (req, res) => {
  res.status(400).json({
    sucess: false,
    message: "Route Invalid !!!",
  });
});
export { router };
