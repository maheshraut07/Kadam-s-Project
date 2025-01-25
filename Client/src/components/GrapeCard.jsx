<<<<<<< Updated upstream
import React from 'react';
import { Badge } from './ui/badge';
import flame  from '../assets/Flame-3.jpeg'
=======
import { addToCart } from "@/store/functions/cart";
import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
>>>>>>> Stashed changes

import { Button } from './ui/button';

<<<<<<< Updated upstream
const GrapeCard = ({ grape }) => {
    return (
        <div className='p-5 rounded-md shadow-xl bg-white border border-gray-100 cursor-pointer w-full max-w-md mx-auto md:max-w-full'>
            {/* Grape Image */}
            <div className='flex justify-center '>
                <img src={flame} alt={`${grape?.name} Image`} className='w-full h-auto rounded-md' />
            </div>

            {/* Grape Name and Price */}
            <div className='mt-4 text-center'>
                <h1 className='font-bold text-lg md:text-xl'>Flame-3</h1>
                <p className='text-sm text-gray-500'>100 per kg</p>
            </div>

            {/* Action Badges */}
            <div className='flex flex-wrap items-center gap-2 mt-4'>
                <Badge className='text-blue-700 font-bold' variant='ghost'>order Now </Badge>
                <Badge className='text-[#F83002] font-bold' variant='ghost'>Save for Later</Badge>
                <Badge className='text-[#7209b7] font-bold' variant='ghost'>add to the cart</Badge>
            </div>
        </div>
    );
=======
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = (e) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch(addToCart({ ...item, quantity: 1 }));
    navigate("/kart");
  };

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
          <button
            className="mt-4 w-full bg-[#3C3838] text-white py-2 rounded hover:bg-black transition duration-200"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </Link>
  );
>>>>>>> Stashed changes
};

export default GrapeCard;
