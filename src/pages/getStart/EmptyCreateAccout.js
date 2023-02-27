import React from "react";
import { Link } from "react-router-dom";

function EmptyCreateAccout(props) {
  return (
    <div className="w-[100] h-[300px] bg-[#ebe2e3] flex justify-center items-center">
      <div>
        <h1 className="text-[26px] font-bold my-3">
          Some Instruction is Empty{" "}
        </h1>
        <h2 className="font-[500]">Without Empty you can't Post</h2>
        <h1 className="font-[500]">
          You Need go To{" "}
          <Link to={"/getStart"}>
            <span className="text-[#ea4c89] font-[600] hover:text-[#f082ac] cursor-pointer">
              Here
            </span>{" "}
          </Link>
        </h1>
      </div>
    </div>
  );
}

export default EmptyCreateAccout;
