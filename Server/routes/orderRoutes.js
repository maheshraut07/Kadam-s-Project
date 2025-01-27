import express from "express";

import { authenticate } from "../middlewares/tokenParser.js";
import { updateAdress } from "../controllers/orderController.js";

const orderRouter = express.Router();

orderRouter.put("/update-address", authenticate, updateAdress);

export default orderRouter;
