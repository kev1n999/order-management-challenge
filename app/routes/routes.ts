import { Router } from "express";
import { userLogin, userRegister } from "../controllers/auth.controller.js";
import {
  advancedOrder,
  createOrder,
  listOrders,
} from "../controllers/order.controller.js";

const router = Router();

router.post("/register", userRegister);
router.post("/login", userLogin);
router.post("/orders", createOrder);
router.get("/orders", listOrders);
router.patch("/orders/:id/advanced", advancedOrder);

export default router;
