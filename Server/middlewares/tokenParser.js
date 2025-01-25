import jsonwebtoken from "jsonwebtoken";
import userModel from "../models/User.js";

const tokenDecode = (req) => {
  try {
    const bearerHeader = req.headers["authorization"];

    // console.log(bearerHeader);

    if (bearerHeader) {
      const token = bearerHeader.split(" ")[1];
      return jsonwebtoken.verify(token, process.env.JWT_SECRET);
    }
    return false;
  } catch {
    return false;
  }
};

const authenticate = async (req, res, next) => {
  const tokenDecoded = tokenDecode(req);
  // console.log(tokenDecoded);

  if (!tokenDecoded)
    return res.status(500).json({ message: "Unauthorized access" });
  const user = await userModel.findById(tokenDecoded.id);
  if (!user) res.status(500).json({ message: "Unauthorized access" });
  user.password = null;
  req.user = user;
  next();
};

export default authenticate;
