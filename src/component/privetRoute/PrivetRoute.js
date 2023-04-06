import React, { useEffect } from "react";
import { ColorRing } from "react-loader-spinner";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { useSelector } from "react-redux";
import { useGetUserDataQuery } from "../../features/auth/authApi";
import ServiceLodear from "../../pages/ui/ServiceLodear";

const PrivetRoute = ({ children }) => {
  const { user, isLoading } = useSelector((state) => state?.auth);
  const userEmail = user?.email;
  const { data } = useGetUserDataQuery(userEmail);
  // console.log();
  const isLogin = useAuth();

  let location = useLocation();

  if (isLoading) {
    return (
      <div>
        <ServiceLodear />
      </div>
    );
  }

  if (userEmail) {
    return children;
  }

  return <Navigate to="/signUp" state={{ from: location }} replace />;
};

export default PrivetRoute;
