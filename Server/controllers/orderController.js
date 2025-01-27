import User from "../models/User.js";

export const updateAdress = async (req, res, next) => {
  const userId = req.user._id;
  const {
    name,
    mobile,
    pincode,
    locality,
    area,
    city,
    state,
    landmark,
    alternatePhone,
  } = req.body;

  try {
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    user.address = {
      name,
      mobile,
      pincode,
      locality,
      area,
      city,
      state,
      landmark,
      alternatePhone,
    };

    await user.save();

    res.status(200).json({
      message: "Address updated successfully",
      user,
    });
  } catch (error) {
    console.error("Error updating address:", error.message);
    next(error, req, res);
  }
};
