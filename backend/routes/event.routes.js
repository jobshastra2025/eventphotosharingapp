import express from "express";
import { register } from "../controllers/event.controller.js";
import protectRoute from "../middleware/protectRoute.js";

const router = express.Router();

router.post("/register", protectRoute, register);

export default router;