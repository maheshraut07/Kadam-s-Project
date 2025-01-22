import React from 'react';
import { Badge } from './ui/badge';
import flame  from '../assets/Flame-3.jpeg'

import { Button } from './ui/button';

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
};

export default GrapeCard;
