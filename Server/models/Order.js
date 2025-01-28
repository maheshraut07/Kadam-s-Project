import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    items: [{ type: mongoose.Schema.Types.ObjectId, ref: "Item" }],
    totalPrice: { type: Number, required: true },
    deliveryCharge: { type: Number, default: 0 },
    paymentMethod: { type: String, default: "Cash on Delivery" },
    status: { type: String, default: "Placed" },
  },
  { timestamps: true }
);

export default mongoose.model("Order", orderSchema);
