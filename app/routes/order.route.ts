import { Router } from "express";
import {
  advancedOrder,
  createOrder,
  listOrders,
} from "../controllers/order.controller.js";
import { verifyToken } from "../middlewares/auth.middleware.js";

const router = Router();

router.use(verifyToken);

router.post("/orders", createOrder);
router.get("/orders", listOrders);
router.patch("/orders/:id/advanced", advancedOrder);

export default router;
