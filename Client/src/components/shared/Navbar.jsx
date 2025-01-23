import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { useSelector } from "react-redux";
import { ShoppingCart } from "lucide-react"; // Import a cart icon from a popular icon library (lucide-react)

const Navbar = () => {
  const { user } = useSelector((store) => store.user);

  return (
    <div className="bg-white shadow-md">
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16 px-4">
        {/* Logo */}
        <div>
          <Link to="/">
            <h1 className="text-2xl font-bold">
              <span className="text-[#14e35c]">Grapes</span>
              <span> Kart</span>
            </h1>
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center">
          <ul className="flex font-medium items-center gap-8">
            <li>
              <Link to="/" className="hover:text-[#14e35c] transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className="hover:text-[#14e35c] transition-colors"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                to="/browse"
                className="hover:text-[#14e35c] transition-colors"
              >
                Browse
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-[#14e35c] transition-colors"
              >
                About us
              </Link>
            </li>
          </ul>
        </div>

        {/* User Actions: Login/Signup or Welcome Message */}
        <div className="flex items-center gap-4">
          {/* Kart Icon */}
          <Link to="/kart" className="relative">
            <ShoppingCart className="h-6 w-6 text-gray-700 hover:text-[#14e35c] transition-colors" />
            {/* Kart Item Badge */}
            <div className="absolute -top-2 -right-2 bg-[#14e35c] text-white text-xs font-bold h-5 w-5 rounded-full flex items-center justify-center">
              3 {/* Replace this hardcoded value with a dynamic value from Redux */}
            </div>
          </Link>

          {/* Conditional User Authentication */}
          {user ? (
            <p className="text-gray-700">Welcome back!</p>
          ) : (
            <>
              <Link to="/login">
                <Button
                  variant="outline"
                  className="bg-transparent hover:bg-[#14e35c] text-gray-700"
                >
                  Login
                </Button>
              </Link>
              <Link to="/signup">
                <Button
                  variant="outline"
                  className="bg-transparent hover:bg-[#14e35c] text-gray-700"
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
