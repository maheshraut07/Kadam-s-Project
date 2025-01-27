import jsonwebtoken from "jsonwebtoken";
import userModel from "../models/User.js";

const tokenDecode = (req) => {
  try {
    const bearerHeader = req.headers["authorization"];
    if (bearerHeader) {
      const token = bearerHeader.split(" ")[1];
      return jsonwebtoken.verify(token, process.env.JWT_SECRET);
    }
    return false;
  } catch {
    return false;
  }
};

export const authenticate = async (req, res, next) => {
  const tokenDecoded = tokenDecode(req);
  if (!tokenDecoded)
    return res.status(500).json({ message: "Unauthorized access" });
  const user = await userModel.findById(tokenDecoded.id);
  if (!user) res.status(500).json({ message: "Unauthorized access" });
  req.user = user;
  next();
};
