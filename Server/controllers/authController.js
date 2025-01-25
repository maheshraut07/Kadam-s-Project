import User from "../models/User.js";
import bcrypt from "bcryptjs";
import { validationResult } from "express-validator";
import jwt from "jsonwebtoken";

export const registerUser = async (req, res, next) => {
  //   console.log(req.body);

  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array().map((e) => e.msg) });
    }

    const { name, mobile, email, password } = req.body;

    const existingUser = await User.findOne({ $or: [{ mobile }, { email }] });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({ name, password: hashedPassword, mobile, email });
    await user.save();

    res.status(201).json({ message: "User registered" });
  } catch (error) {
    next(error);
  }
};

export const loginUser = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array().map((e) => e.msg) });
    }

    const { mobile, password } = req.body;
    const user = await User.findOne({ mobile });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "10d",
    });

    user.password = null;
    res.status(200).json({ message: "Login success", token, user });
  } catch (error) {
    next(error);
  }
};

export const autoLogin = async (req, res, next) => {
  try {
    const { user } = req;
    if (!user)
      return res.status(505).json({
        message: "Unauthorized",
      });
    return res.status(200).json({
      user,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
