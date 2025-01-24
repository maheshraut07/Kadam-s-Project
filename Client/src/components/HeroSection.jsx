import React, { useState } from "react";
import { Button } from "./ui/button";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const searchGrapesHandler = () => {
    navigate(`/products?search=${query}`);
  };

  return (
    <div className="text-center text-[#3C3838]">
      <div className="flex flex-col gap-5 my-10">
        <span className="mx-auto px-4 py-2 rounded-full bg-green-100 text-green-700 font-medium">
          Fresh Grapes, Delivered to You
        </span>
        <h1 className="text-5xl font-bold">
          Discover the <br /> Sweetest{" "}
          <span className="text-[#14e35c]">Grapes</span>
        </h1>
        <p>
          Experience the taste of freshness with our premium selection of
          grapes!
        </p>
        <div className="flex w-[40%] shadow-lg border border-gray-200 pl-3 rounded-full items-center gap-4 mx-auto">
          <input
            type="text"
            placeholder="Search for your favorite grapes"
            onChange={(e) => setQuery(e.target.value)}
            className="outline-none border-none w-full text-gray-700"
          />
          <Button
            onClick={searchGrapesHandler}
            className="rounded-r-full text-[#14e35c]"
          >
            <Search className="h-5 w-5 text-white" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
