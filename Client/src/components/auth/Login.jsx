import React, { useEffect, useState } from "react";
import Navbar from "../shared/Navbar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router-dom";
import authApi from "@/api/modules/api.auth";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/functions/user";
import Loader from "../ui/Loader";
import { toast } from "react-toastify";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);

  const [input, setInput] = useState({
    mobile: "",
    password: "",
  });

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const { response, error } = await authApi.login(input);
    if (response) {
      dispatch(setUser(response));
      toast.success(response.message);
      navigate("/");
    }
    if (error) {
      toast.error(error.message);
    }
    setIsLoading(false);
  };

  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center max-w-7xl mx-auto">
        <form
          onSubmit={submitHandler}
          className="w-1/2 border border-gray-200 rounded-md p-4 my-10"
        >
          <h1 className="font-bold text-xl mb-5">Login</h1>
          <div className="my-2">
            <Label>Mobile</Label>
            <Input
              type="text"
              value={input.mobile}
              name="mobile"
              onChange={changeEventHandler}
              placeholder="XXXXXXXXX"
            />
          </div>

          <div className="my-2">
            <Label>Password</Label>
            <Input
              type="password"
              value={input.password}
              name="password"
              onChange={changeEventHandler}
              placeholder="password"
            />
          </div>
          <Button type="submit" className="w-full my-4 ">
            Login
          </Button>
          <span className="text-sm">
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-600">
              Signup
            </Link>
          </span>
        </form>
      </div>
      <Loader loading={isLoading} />
    </div>
  );
};

export default Login;
