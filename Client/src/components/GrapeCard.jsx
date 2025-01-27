// import { addToCart } from "@/store/functions/cart";
import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const GrapeCard = ({ item }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const handleAddToCart = (e) => {
  //   e.stopPropagation();
  //   e.preventDefault();
  //   dispatch(addToCart({ ...item, quantity: 1 }));
  //   navigate("/kart");
  // };

  return (
    <Link to={`/details/${item._id}`} state={item}>
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
          <button className="mt-4 w-full bg-[#3C3838] text-white py-2 rounded hover:bg-black transition duration-200">
            Buy Now
          </button>
        </div>
      </div>
    </Link>
  );
};

export default GrapeCard;
