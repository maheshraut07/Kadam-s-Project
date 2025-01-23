import authRouter from "./authRoutes.js";
import express from "express";
import itemRouter from "./itemRoutes.js";

const router = express.Router();

router.use("/auth", authRouter);
router.use("/items", itemRouter);

export default router;
