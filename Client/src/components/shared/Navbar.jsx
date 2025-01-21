import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <div className="bg-white">
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16">
        <div>
          <Link to="/">
            <h1 className="text-2xl font-bold">
              kadam's<span className="text-[#14e35c]">Project</span>
            </h1>
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <Link to="/login">
            <Button variant="outline">Login</Button>
          </Link>
          <Link to="/signup">
            <Button className="text-[#14e35c] bg-transparent hover:bg-[#5b30a6]">Signup</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
