import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import CartItem from "@/components/CartItem";
import { MdAddShoppingCart } from "react-icons/md";
import Navbar from "@/components/shared/Navbar";
import { getNextFriday } from "@/lib/utils";

const Kart = () => {
  const { items, totalPrice } = useSelector((store) => store.cart);

  return (
    <>
      <Navbar />
      <div className="flex flex-col p-4">
        {items.length > 0 ? (
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              {items.map((item) => (
                <CartItem item={item} key={item._id} />
              ))}
            </div>
            <div className="w-full md:w-1/3 p-4 border border-gray-200 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
              <div className="flex justify-between mb-2">
                <p className="text-gray-500">Subtotal</p>
                <p className="font-bold">₹{totalPrice}</p>
              </div>
              <div className="flex justify-between mb-4">
                <p className="text-gray-500">Delivery Charges</p>
                <p>
                  <b>Free</b>, if ordered before <b>{getNextFriday()}</b>
                </p>
              </div>
              <div className="flex justify-between mb-4 border-t pt-2">
                <p className="font-bold">Total</p>
                <p className="font-bold">₹{totalPrice}</p>
              </div>
              <Button className="w-full bg-green-600 text-white py-2 rounded-md">
                Proceed to Checkout
              </Button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
            <div className="text-[10rem] mb-6 text-gray-600">
              <MdAddShoppingCart />
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              Your cart is empty!
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Looks like you haven’t added anything to your cart yet.
            </p>

            <Link
              to="/"
              className="px-4 py-2 bg-[#14e35c] text-white text-sm rounded-md hover:bg-black transition duration-200"
            >
              Explore Products
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default Kart;
