import express from "express";
import { OrderControllers } from "./order.controller";
const router = express.Router();

router.post("/create", OrderControllers.createOrder);

router.get("/", OrderControllers.getAllOrders);

export const OrderRoutes = router;
