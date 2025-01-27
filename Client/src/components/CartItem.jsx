import { useState } from "react";
import { Button } from "./ui/button";
import { useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "@/store/functions/cart";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleChangeQuantity = (operation) => {
    let newQuantity = item.quantity;
    if (operation === "increment") {
      newQuantity = item.quantity + 1;
    } else if (operation === "decrement" && item.quantity > 1) {
      newQuantity = item.quantity - 1;
    }
    dispatch(updateQuantity({ quantity: newQuantity, id: item._id }));
  };

  const handleRemoveItem = () => {
    dispatch(removeFromCart(item._id));
  };

  return (
    <div className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg shadow-lg mb-4 bg-white hover:shadow-xl transition-shadow duration-300">
      <img
        src={item.images[0]}
        alt={item.name}
        className="w-24 h-24 object-cover rounded-lg"
      />

      <div className="flex-1">
        <h2 className="text-lg font-bold text-gray-800">{item.name}</h2>
        <p className="text-sm text-gray-600">₹{item.price} /-</p>

        <div className="flex items-center gap-2 mt-3">
          <button
            className="px-3 py-2 bg-gray-100 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-200 hover:text-gray-900 transition duration-200"
            onClick={() => handleChangeQuantity("decrement")}
          >
            −
          </button>
          <span className="px-4 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-700">
            {item.quantity}
          </span>
          <button
            className="px-3 py-2 bg-gray-100 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-200 hover:text-gray-900 transition duration-200"
            onClick={() => handleChangeQuantity("increment")}
          >
            +
          </button>

          <Button
            className="ml-4 px-3 py-2 text-red-600 bg-red-100 rounded-md hover:bg-red-200 transition duration-200"
            onClick={handleRemoveItem}
          >
            Remove
          </Button>
        </div>
      </div>

      <div className="text-right">
        <p className="text-lg font-bold text-gray-800">
          ₹{item.price * item.quantity}
        </p>
      </div>
    </div>
  );
};

export default CartItem;
