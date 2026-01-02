import { Router } from "express";
import authRoutes from "./auth.route.js";
import orderRoutes from "./order.route.js";

const router = Router();

router.use("/auth", authRoutes); 
router.use("/orders", orderRoutes);

export default router;