import express from "express";

import { authenticate } from "../middlewares/tokenParser.js";
import {
  getOrders,
  placeOrder,
  updateAdress,
} from "../controllers/orderController.js";

const orderRouter = express.Router();

orderRouter.put("/update-address", authenticate, updateAdress);
orderRouter.post("/new-order", authenticate, placeOrder);
orderRouter.get("/", authenticate, getOrders);

export default orderRouter;
