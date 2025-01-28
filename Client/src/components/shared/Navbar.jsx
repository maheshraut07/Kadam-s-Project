import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { Popover, PopoverTrigger, PopoverContent } from "../ui/popover";
import { Avatar, AvatarImage } from "../ui/avatar";
import { useSelector } from "react-redux";
import { ShoppingCart, Menu, X, UserIcon } from "lucide-react";
import { LogOut, User2 } from "lucide-react";

const Navbar = () => {
  const { user } = useSelector((store) => store.user);
  const { items } = useSelector((store) => store.cart);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const logoutHandler = () => {};

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

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-700 focus:outline-none"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Navigation Links */}
        <div
          className={`absolute lg:static top-16 left-0 w-full lg:w-auto lg:flex bg-white lg:bg-transparent shadow-lg lg:shadow-none transition-all duration-300 ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col lg:flex-row font-medium items-center lg:gap-8 gap-4 px-4 lg:px-0 py-4 lg:py-0">
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

        {/* User Section */}
        <div className="flex items-center gap-9">
          <Link to="/kart" className="relative">
            <ShoppingCart className="h-6 w-6 text-gray-700 hover:text-[#14e35c] transition-colors" />
            <div className="absolute -top-2 -right-2 bg-[#14e35c] text-white text-xs font-bold h-5 w-5 rounded-full flex items-center justify-center">
              {items.length}
            </div>
          </Link>
          {/* Conditional User Authentication */}
          {user ? (
            <div className="flex justify-center items-center gap-3">
              <Popover className="">
                <PopoverTrigger asChild>
                  <Avatar className="cursor-pointer bg-[#14e35c] text-white flex items-center justify-center">
                    {/* UserIcon centered in the Avatar */}
                    <UserIcon className="h-6 w-6 text-white" />
                  </Avatar>
                </PopoverTrigger>
                <PopoverContent className="w-80">
                  <div>
                    <div className="flex gap-2 space-y-2 items-center">
                      <Avatar className="cursor-pointer bg-[#14e35c] text-white flex items-center justify-center">
                        {/* UserIcon centered in the Avatar */}
                        <UserIcon className="h-6 w-6 text-white" />
                      </Avatar>

                      <div>
                        <h4 className="font-medium">
                          {user?.name || "Guest User"}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {user?.profile?.bio || "Welcome to Grapes Kart!"}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col my-2 text-gray-600">
                      {user && (
                        <div className="flex w-fit items-center gap-2 cursor-pointer">
                          <User2 />
                          <Button variant="link">
                            <Link to="/profile">View Profile</Link>
                          </Button>
                        </div>
                      )}
                      <div className="flex w-fit items-center gap-2 cursor-pointer">
                        <LogOut />
                        <Button onClick={logoutHandler} variant="link">
                          Logout
                        </Button>
                      </div>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
              <span>{user?.name}</span>
            </div>
          ) : (
            <div className="hidden lg:flex gap-4">
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
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
