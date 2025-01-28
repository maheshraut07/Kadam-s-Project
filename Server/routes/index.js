import authRouter from "./authRoutes.js";
import express from "express";
import itemRouter from "./itemRoutes.js";
import orderRouter from "./orderRoutes.js";

const router = express.Router();

router.use("/auth", authRouter);
router.use("/items", itemRouter);
router.use("/orders", orderRouter);

export default router;
