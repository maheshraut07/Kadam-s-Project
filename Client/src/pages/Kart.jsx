import React from "react";
import { Button } from "@/components/ui/button";
import { useSelector } from "react-redux";
import CartItem from "@/components/CartItem";
import { MdAddShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";

const Kart = () => {
  const { items, totalPrice } = useSelector((store) => store.cart);

  if (items.length == 0)
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
        {/* Empty Cart Image */}
        <div className="w-64 h-64 mb-6 text-[15rem]">
          <MdAddShoppingCart />
        </div>

        {/* Empty Cart Text */}
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Your cart is empty!
        </h2>
        <p className="text-md text-gray-600 mb-6">
          Looks like you haven’t added anything to your cart yet.
        </p>

        {/* Explore Products Button */}
        <Link
          to="/products"
          className="px-6 py-3 bg-[#14E35C] text-white text-lg rounded-md hover:bg-black transition duration-200"
        >
          Explore Products
        </Link>
      </div>
    );

  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold text-center mb-6">Your Kart</h1>
      <div className="flex flex-col md:flex-row gap-6">
        {/* Cart Items Section */}
        <div className="flex-1">
          {items.map((item) => (
            <CartItem item={item} key={item._id} />
          ))}
        </div>

        {/* Summary Section */}
        <div className="w-full md:w-1/3 p-4 border border-gray-200 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
          <div className="flex justify-between mb-2">
            <p className="text-gray-500">Subtotal</p>
            <p className="font-bold">₹{totalPrice}</p>
          </div>
          <div className="flex justify-between mb-4">
            <p className="text-gray-500">Delivery Charges</p>
            <p className="font-bold">₹50</p>
          </div>
          <div className="flex justify-between mb-4 border-t pt-2">
            <p className="font-bold">Total</p>
            <p className="font-bold">₹{totalPrice + 50}</p>
          </div>
          <Button className="w-full bg-green-600 text-white py-2 rounded-md">
            Proceed to Checkout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Kart;
