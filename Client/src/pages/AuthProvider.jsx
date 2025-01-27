import authApi from "@/api/modules/api.auth";
import { setUser } from "@/store/functions/user";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const AuthProvider = ({ children }) => {
  const dispatch = useDispatch();

  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    const autoLogin = async () => {
      const { response, error } = await authApi.getInfo();
      if (response) {
        dispatch(setUser({ user: response.user }));
      }
      if (error) {
        toast.error(error.message);
      }
      setFetching(false);
    };

    autoLogin();
  }, [dispatch]);

  return !fetching && children;
};

export default AuthProvider;
