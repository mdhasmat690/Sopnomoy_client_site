import React from "react";
import { ColorRing } from "react-loader-spinner";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

const PrivetRoute = ({ children }) => {
  const { user, isLoading } = useAuth();
  let location = useLocation();

  if (isLoading) {
    return (
      <div className="mt-4 mb-5">
        {" "}
        <ColorRing
          visible={true}
          height="80"
          width="80"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
        />
      </div>
    );
  }

  if (user.email) {
    return children;
  }

  return <Navigate to="/signUp" state={{ from: location }} replace />;
};

export default PrivetRoute;
