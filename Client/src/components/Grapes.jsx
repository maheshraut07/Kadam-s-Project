import React from 'react'
import GrapeCard from './GrapeCard'
import { Link } from 'react-router-dom'

const randomGrapes = [1,2,3,4,5,6,7,8,9]

const Grapes = () => {
  return (
<<<<<<< Updated upstream
    <div className='max-w-7xl mx-auto my-20'>
        <h1 className='text-4xl font-bold'><span className='text-[#14e35c]'>Your Favourite Grapes</span></h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-5'>
            {
                randomGrapes.slice(0,6).map(grape =>(
                    <Link>
                    <GrapeCard/>
                    </Link>
                ))
            }
            <GrapeCard/>
        </div>
=======
    <div className="max-w-7xl mx-auto mt-20">
      <h1 className="text-2xl font-bold">
        <span className="text-gray-700 ">Explore all categories</span>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
        {items.map((item) => (
          <GrapeCard item={item} key={item._id} />
        ))}
      </div>
>>>>>>> Stashed changes
    </div>
  )
}

export default Grapes