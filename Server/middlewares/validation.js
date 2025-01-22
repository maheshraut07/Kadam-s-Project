import { body } from "express-validator";

export const registerValidators = [
  body("name", "Name cannot be empty").notEmpty(),
  body("mobile", "Phone number cannot be empty").notEmpty(),
  body("email", "Invalid email").isEmail(),
  body("mobile", "Invalid phone number").isMobilePhone("en-IN"),
  body("password", "Password must be of minimum 4 characters").isLength({
    min: 4,
  }),
];

export const loginValidators = [
  body("mobile", "Mobile number cannot be empty").notEmpty(),
  body("password", "Password cannot be empty").notEmpty(),
];
