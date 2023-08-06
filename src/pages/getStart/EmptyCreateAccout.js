import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function EmptyCreateAccout(props) {
  const { user } = useSelector((state) => state?.auth);
  return (
    <div className="w-[100] h-[300px] bg-[#ebe2e3] flex justify-center items-center">
      {user?.email ? (
        <>
          <div>
            <h1 className="text-[26px] font-bold my-3">
              Some Instruction is Empty{" "}
            </h1>
            <h2 className="font-[500]">
              Your Some Instruction is Empty you can't Post Follow this link
            </h2>
            <h1 className="font-[500]">
              You Need go To{" "}
              <Link to={"/getStart"}>
                <span className="text-[#ea4c89] font-[600] hover:text-[#f082ac] cursor-pointer">
                  Here
                </span>{" "}
              </Link>
            </h1>
          </div>
        </>
      ) : (
        <>
          <div>
            <h1 className="text-[26px] font-bold my-3">Please Register</h1>
            <h2 className="font-[500]">
              You need to login then full up some instruction then you can post
            </h2>
            <h1 className="font-[500]">
              You Need go To{" "}
              <Link to={"/getStart"}>
                <span className="text-[#ea4c89] font-[600] hover:text-[#f082ac] cursor-pointer">
                  Here
                </span>{" "}
              </Link>
            </h1>
          </div>
        </>
      )}
    </div>
  );
}

export default EmptyCreateAccout;
