import React, { useEffect } from "react";
import { ColorRing } from "react-loader-spinner";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { useSelector } from "react-redux";
import { useGetUserDataQuery } from "../../features/auth/authApi";
import ServiceLodear from "../../pages/ui/ServiceLodear";

const PrivetRoute = ({ children }) => {
  const { email: userEmail } = useSelector((state) => state?.auth?.user);
  const { isLoading } = useGetUserDataQuery(userEmail);

  const isLogin = useAuth();

  let location = useLocation();

  if (isLoading) {
    return (
      <div>
        <ServiceLodear />
      </div>
    );
  }

  if (isLogin) {
    return children;
  }

  return <Navigate to="/signUp" state={{ from: location }} replace />;
};

export default PrivetRoute;
