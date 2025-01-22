import authRouter from "./authRoutes.js";
import express from "express";

const router = express.Router();

router.use("/auth", authRouter);

export default router;