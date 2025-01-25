import authApi from "@/api/modules/api.auth";
import { setUser } from "@/store/functions/user";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const AuthWrapper = ({ children }) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUserAuth = async () => {
      const { response, error } = await authApi.authenticate();
      if (response) {
        dispatch(setUser({ user: response.user }));
      }
      if (error) {
        toast.error(error.message);
      }
      setLoading(false);
    };

    getUserAuth();
  }, []);
  return !loading && children;
};

export default AuthWrapper;
