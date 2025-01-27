import React from "react";
import GrapeCard from "./GrapeCard";

const Grapes = ({ items }) => {
  if (!items) return;

  return (
    <div className="max-w-7xl mx-auto my-20">
      <h1 className="text-2xl font-bold">
        <span className="text-gray-700 ">Explore all categories</span>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-5">
        {items.map((item) => (
          <GrapeCard item={item} key={item._id} />
        ))}
      </div>
    </div>
  );
};

export default Grapes;
