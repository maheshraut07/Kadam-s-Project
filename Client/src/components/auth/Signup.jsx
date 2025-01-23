import React, { useState } from "react";
import Navbar from "../shared/Navbar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router-dom";
import authApi from "@/api/modules/api.auth";
import { toast } from "react-toastify";
import Loader from "../ui/loader";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const Signup = () => {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [input, setInput] = useState({
    name: "",
    mobile: "",
    email: "",
    password: "",
  });

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", input.name);
    formData.append("email", input.email);
    formData.append("mobile", input.mobile);
    formData.append("password", input.password);
    setIsLoading(true);
    const { response, error } = await authApi.register(formData);
    if (response) {
      toast.success(response.message);
      navigate("/login");
    }
    if (error) {
      toast.error(error.message);
    }
    setIsLoading(false);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword); // Toggle visibility
  };

  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center max-w-7xl mx-auto">
        <form
          onSubmit={submitHandler}
          className="w-1/2 border border-gray-200 rounded-md p-4 my-10"
        >
          <h1 className="font-bold text-xl mb-5">Sign Up</h1>
          <div className="my-2">
            <Label>Name</Label>
            <Input
              type="text"
              value={input.name}
              name="name"
              onChange={changeEventHandler}
              placeholder="Your Name"
            />
          </div>
          <div className="my-2">
            <Label>Email</Label>
            <Input
              type="email"
              value={input.email}
              name="email"
              onChange={changeEventHandler}
              placeholder="xyz@gmail.com"
            />
          </div>
          <div className="my-2">
            <Label>Mobile</Label>
            <Input
              type="text"
              value={input.mobile}
              name="mobile"
              onChange={changeEventHandler}
              placeholder="8080808080"
            />
          </div>
          <div className="my-2">
            <Label>Password</Label>
            <div className="flex items-center border rounded-md">
              <Input
                type={showPassword ? "text" : "password"} // Toggle input type
                value={input.password}
                name="password"
                onChange={changeEventHandler}
                placeholder="password"
                className="flex-grow border-none focus:ring-0"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="p-2 text-gray-600 focus:outline-none"
              >
                {showPassword ? (
                  <AiFillEyeInvisible size={20} />
                ) : (
                  <AiFillEye size={20} />
                )}
              </button>
            </div>
          </div>
          <Button type="submit" className="w-full my-4 ">
            Signup
          </Button>
          <span className="text-sm">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600">
              Login
            </Link>
          </span>
        </form>
        <Loader loading={isLoading} />
      </div>
    </div>
  );
};

export default Signup;
