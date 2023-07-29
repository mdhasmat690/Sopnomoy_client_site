import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

function SingleJob() {
  return (
    <>
      <div className="border-t border-indigo-[#f3f3f4] w-[100%]  "></div>
      <div className="w-[90%] mx-auto mt-10">
        <button className="flex items-center bg-[#f3f3f4] h-[40px]  text-[14px] font-[500] leading-[24px]  rounded-[8px] w-[100px] p-2 hover:bg-[#e7e7e9] ">
          <span>
            <IoIosArrowBack />
          </span>
          <span className="ml-2">All Jobs</span>
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-3 justify-center w-[90%] mx-auto my-10">
        <div class="col-span-2 md:ml-14 ml-0">
          <h1 className="text-[16px] font-[500] leading-[22px] my-3">
            Job Details
          </h1>
          <h1 className="text-[32px] font-[700] leading-[38px] my-5">
            Job Details
          </h1>
          <button className="h-[40px] py-[10px] px-[16px] rounded-[8px] bg-[#ea4c89] text-[14px] font-[400]  mx-auto">
            Apply for this position
          </button>
        </div>
        <div className=" col-span-1  border border-indigo-[#f3f3f4] rounded-lg p-6 w-80 md:w-72 mx-auto  ">
          <div className=" justify-center">
            <img
              className="mx-auto w-[80px]"
              src="https://cdn.dribbble.com/userupload/8891918/file/original-e68cbb9ef2fd516440c165182b058c50.png?resize=80x80"
              alt=""
            />
            <h1 className="text-[24px] font-[700] leading-[29px] text-center mt-4">
              {" "}
              Basis
            </h1>
            <h1 className="text-[16px] font-[400]  text-center my-3">
              {" "}
              Visit Website
            </h1>

            <button className="h-[40px] py-[10px] px-[16px] rounded-[8px] bg-[#ea4c89] text-[14px] font-[400] flex justify-center mx-auto">
              Apply for this position
            </button>
          </div>
          <div className="border-t border-[#e7e7e9] my-8"></div>
          <div>
            <h1 className="text-[15px] font-[400] ">Job Type</h1>
            <h1 className="text-[16px] font-[500] my-1 leading-[22px]">
              Full-Time
            </h1>

            <h1 className="text-[15px] font-[400] mt-5 leading-[20px]">
              Location
            </h1>
            <h1 className="text-[16px] font-[500] my-1 leading-[22px]">
              Remote
            </h1>
            <h1 className="text-[16px] font-[500] my-1 leading-[22px]">
              Remote Friendly
            </h1>

            <h1 className="text-[15px] font-[400] mt-5 leading-[20px]">Date</h1>
            <h1 className="text-[16px] font-[500] my-1 leading-[22px]">
              jun.01.22
            </h1>
          </div>
        </div>

        {/*  <div className=" col-span-4  border border-indigo-[#f3f3f4] rounded-lg p-6 w-full md:w-[70%] mx-auto ">
              <div className=" justify-center">
                <img
                  className="mx-auto w-[80px]"
                  src="https://cdn.dribbble.com/userupload/8891918/file/original-e68cbb9ef2fd516440c165182b058c50.png?resize=80x80"
                  alt=""
                />
                <h1 className="text-[24px] font-[700] leading-[29px] text-center mt-4">
                  {" "}
                  Basis
                </h1>
                <h1 className="text-[16px] font-[400]  text-center my-3">
                  {" "}
                  Visit Website
                </h1>

                <button className="h-[40px] py-[10px] px-[16px] rounded-[8px] bg-[#ea4c89] text-[14px] font-[400] flex justify-center mx-auto">
                  Apply for this position
                </button>
              </div>
              <div className="border-t border-[#e7e7e9] my-8"></div>
              <div>
                <h1 className="text-[15px] font-[400] ">Job Type</h1>
                <h1 className="text-[16px] font-[500] my-1 leading-[22px]">
                  Full-Time
                </h1>

                <h1 className="text-[15px] font-[400] mt-5 leading-[20px]">
                  Location
                </h1>
                <h1 className="text-[16px] font-[500] my-1 leading-[22px]">
                  Remote
                </h1>
                <h1 className="text-[16px] font-[500] my-1 leading-[22px]">
                  Remote Friendly
                </h1>

                <h1 className="text-[15px] font-[400] mt-5 leading-[20px]">
                  Date
                </h1>
                <h1 className="text-[16px] font-[500] my-1 leading-[22px]">
                  jun.01.22
                </h1>
              </div>
            </div> */}
      </div>
    </>
  );
}

export default SingleJob;
