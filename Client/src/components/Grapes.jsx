import React from "react";
import GrapeCard from "./GrapeCard";
import { Link } from "react-router-dom";

const Grapes = ({ items }) => {
  if (!items) return;

  return (
    <div className="max-w-7xl mx-auto my-20">
      <h1 className="text-4xl font-bold">
        <span className="text-[#14e35c]">Explore all categories</span>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-5">
        {items.map((item) => (
          <Link>
            <GrapeCard item={item} />
          </Link>
        ))}
        <GrapeCard />
      </div>
    </div>
  );
};

export default Grapes;
