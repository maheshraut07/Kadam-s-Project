import express from "express";
import {
  registerUser,
  loginUser,
  autoLogin,
} from "../controllers/authController.js";
import {
  loginValidators,
  registerValidators,
} from "../middlewares/validation.js";
import errorHandler from "../middlewares/errorHandler.js";
import { authenticate } from "../middlewares/tokenParser.js";

const router = express.Router();

router.post("/register", registerValidators, registerUser, errorHandler);
router.post("/login", loginValidators, loginUser, errorHandler);
router.get("/authenticate", authenticate, autoLogin);

export default router;
