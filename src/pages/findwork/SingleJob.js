import React from "react";
import { IoIosArrowBack } from "react-icons/io";

function SingleJob() {
  return (
    <>
      <div className="border-t border-indigo-[#f3f3f4] w-[100%]  "></div>
      <div className="w-[90%] mx-auto mt-5">
        <button className="flex items-center bg-[#f3f3f4] h-[40px]  text-[14px] font-[500] leading-[24px]  rounded-[8px] w-[100px] p-2 hover:bg-[#e7e7e9]">
          <span>
            <IoIosArrowBack />
          </span>
          <span className="ml-2">All Jobs</span>
        </button>
      </div>
      <div className="w-[75%]   mx-auto">
        <div className="grid grid-cols-12 gap-3">
          <div className="col-span-8">ho</div>
          <div className="col-span-4   border border-indigo-[#f3f3f4] rounded-lg p-6 w-[80%] mx-auto"></div>
        </div>
      </div>
    </>
  );
}

export default SingleJob;
