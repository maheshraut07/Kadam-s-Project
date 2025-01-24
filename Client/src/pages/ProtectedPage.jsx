import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedPage = ({ children }) => {
  const { user } = useSelector((store) => store.user);
  return user ? { children } : <Navigate to="/login" />;
};

export default ProtectedPage;
