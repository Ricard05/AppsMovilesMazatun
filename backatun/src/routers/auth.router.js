import { Router } from "express";
import { UserController } from "../controllers/controllers.js";
const router = Router();

//User routes
router.get("/user/:code", UserController.getInfo);

export default router;