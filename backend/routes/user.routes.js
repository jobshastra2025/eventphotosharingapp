import express from "express";
import { getUserEvents } from "../controllers/user.controller.js";
import protectRoute from "../middleware/protectRoute.js";

const router = express.Router();
router.get("/events", protectRoute, getUserEvents);

export default router;