import express from "express";

import { authenticate } from "../middlewares/tokenParser.js";
import { placeOrder, updateAdress } from "../controllers/orderController.js";

const orderRouter = express.Router();

orderRouter.put("/update-address", authenticate, updateAdress);
orderRouter.post("/new-order", authenticate, placeOrder);

export default orderRouter;
