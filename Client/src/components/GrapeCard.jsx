import React from "react";
import { Button } from "./ui/button";

const GrapeCard = ({ item }) => {
  if (!item) return null;

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <div className="relative">
        <img
          src={item.images[0]}
          alt="Purple 1/2 KG"
          className="w-full h-48 object-cover"
        />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-bold">{item.name}</h2>
        <p className="text-lg font-semibold text-gray-700">₹ {item.price}</p>
        <p className="text-gray-700 mt-1">{item.description}</p>
        <p className="text-green-600 font-semibold mt-2">In Stock</p>
        <button className="mt-4 w-full bg-black text-white py-2 rounded hover:bg-[#14E35C] transition duration-200">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default GrapeCard;
