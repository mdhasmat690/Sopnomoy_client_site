import React from "react";

function Works(props) {
  return (
    <div>
      <div className="grid md:grid-cols-3 gap-4">
        <div className="w-[100%] py-[38px] px-[20px] border-dashed border-[2px] border-indigo-[#e7e7e9] rounded-[8px] ">
          <div className=" text-center">
            <h1 className="text-[24px] font-[700] leading-[29px] mb-[8px]  ">
              Upload your first shot
            </h1>
            <h4 className="text-[16px] font-[400] leading-[24px] mb-[5%]  ">
              Show off your best work. Get feedback, likes and be a part of a
              growing community.
            </h4>
            <button className="text-[#fff] text-[14px] font-[500] bg-[#ea4c89] h-[40px] py-[10px] px-[16px] rounded-[8px]">
              Upload your first shot
            </button>
          </div>
        </div>

        <div className=" animate-pulse ">
          <div className="relative ">
            <div className="aspect-video bg-slate-200 rounded-[8px]" />
          </div>
        </div>
        <div className=" animate-pulse ">
          <div className="relative ">
            <div className="aspect-video bg-slate-200 rounded-[8px]" />
          </div>
        </div>
        <div className=" animate-pulse ">
          <div className="relative   ">
            <div className="aspect-video bg-slate-200 rounded-[8px]" />
          </div>
        </div>
        <div className=" animate-pulse ">
          <div className="relative">
            <div className="aspect-video bg-slate-200 rounded-[8px]" />
          </div>
        </div>
        <div className=" animate-pulse ">
          <div className="relative  ">
            <div className="aspect-video bg-slate-200 rounded-[8px]" />
          </div>
        </div>
      </div>
      <br />
    </div>
  );
}

export default Works;
