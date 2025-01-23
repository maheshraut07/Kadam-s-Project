import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { user } = useSelector((store) => store.user);

  return (
    <div className="bg-white">
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16">
        <div>
          <Link to="/">
            <h1 className="text-2xl font-bold">
              <span className="text-[#14e35c]">Grapes</span>
              <span> Kart</span>
            </h1>
          </Link>
        </div>
        <div className="flex items-center">
          <ul className="flex font-medium items-center gap-16">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/browse">Browse</Link>
            </li>
            <li>
              <Link to="/about">About us</Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-2">
          {user ? (
            <p>Welcome back!</p>
          ) : (
            <>
              <Link to="/login">
                <Button
                  variant="outline"
                  className="bg-transparent hover:bg-[#14e35c]"
                >
                  Login
                </Button>
              </Link>
              <Link to="/signup">
                <Button
                  variant="outline"
                  className="bg-transparent hover:bg-[#14e35c]"
                >
                  Signup
                </Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
