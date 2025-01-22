import express from "express";
import { registerUser, loginUser } from "../controllers/authController.js";
import {
  loginValidators,
  registerValidators,
} from "../middlewares/validation.js";
import errorHandler from "../middlewares/errorHandler.js";

const router = express.Router();

router.post("/register", registerValidators, registerUser, errorHandler);
router.post("/login", loginValidators, loginUser, errorHandler);

export default router;
