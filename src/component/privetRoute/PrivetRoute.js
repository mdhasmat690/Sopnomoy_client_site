import React from "react";
import { Navigate, useLocation } from "react-router-dom";

import { useSelector } from "react-redux";

const PrivetRoute = ({ children }) => {
  const { user, isLoading } = useSelector((state) => state?.auth);
  const userEmail = user?.email;

  let location = useLocation();

  if (isLoading) {
    return (
      <div className="h-[350px]">
        <h1 className="flex justify-center mt-10 text-lg text-fuchsia-500">
          Re-direct...
        </h1>
      </div>
    );
  }

  if (userEmail) {
    return children;
  }

  return <Navigate to="/signUp" state={{ from: location }} replace />;
};

export default PrivetRoute;
