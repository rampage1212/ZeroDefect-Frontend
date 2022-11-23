import React from "react";
import { Navigate } from "react-router-dom";
import { getAccessToken } from "../auth";

const AuthGuard = ({ children }) => {
  const isAuthenticated = getAccessToken();
  return (isAuthenticated && <>{children}</>) || <Navigate to={"/login"} />;
};

export default AuthGuard;
