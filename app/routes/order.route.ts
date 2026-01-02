import { Router } from "express";
import {
  advancedOrder,
  createOrder,
  listOrders,
} from "../controllers/order.controller.js";

const router = Router();

router.post("/orders", createOrder);
router.get("/orders", listOrders);
router.patch("/orders/:id/advanced", advancedOrder);

export default router;
