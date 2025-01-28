import User from "../models/User.js";
import Order from "../models/Order.js";
import sendEmail from "../utils/services/email.js";

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

export const placeOrder = async (req, res, next) => {
  try {
    const { items, totalPrice, deliveryCharge } = req.body;
    const { user } = req;

    if (!items.length) {
      return res.status(400).json({ message: "Cart is empty" });
    }

    const order = new Order({
      user: user._id,
      items: items.map((item) => item._id),
      totalPrice,
      deliveryCharge,
    });

    await order.save();

    const orderMessage = `Order Placed Successfully!\nTotal: ₹${
      totalPrice + deliveryCharge
    }
    \nAddress: ${user.address.area}, ${user.address.city}, ${
      user.address.state
    } - ${user.address.pincode}`;

    await sendEmail(
      user.email,
      "Order Confirmation",
      `Dear ${user.name},\nYour order worth ₹${
        totalPrice + deliveryCharge
      } has been placed successfully!\n\n${orderMessage}`
    );

    await sendEmail(
      "patilritesh712003@gmail.com",
      "New Order Received",
      `New Order Received:\n\n${orderMessage}`
    );

    res.status(201).json({ message: "Order placed successfully", order });
  } catch (error) {
    console.error(error);
    next(error, req, res);
  }
};
