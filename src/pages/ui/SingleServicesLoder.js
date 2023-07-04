import React from "react";

function SingleServicesLoder(props) {
  return (
    <>
      <div className="w-[60%] mx-auto animate-pulse my-14">
        <div className="flex flex-row mt-2 gap-2 items-center">
          <div className="bg-slate-200 rounded-full h-8 w-8 shrink-0" />

          <div className="flex flex-col space-y-1 grow">
            <p className="bg-slate-200 text-slate-200 text-[8px]">Loading...</p>
            <p className="bg-slate-200 text-slate-200 w-[20%] text-[8px]">
              Loading...
            </p>
          </div>
        </div>
        <br />
        <div className="relative">
          <div className="aspect-video bg-slate-200" />
        </div>
        <div>
          <br />
          <h1 className="bg-slate-200 text-slate-200 w-[75%] mx-auto text-[8px] my-2">
            Loading...
          </h1>
          <h1 className="bg-slate-200 text-slate-200 w-[75%] mx-auto text-[8px] my-2">
            Loading...
          </h1>
          <h1 className="bg-slate-200 text-slate-200 w-[75%] mx-auto text-[8px] my-2">
            Loading...
          </h1>
          <h1 className="bg-slate-200 text-slate-200 w-[75%] mx-auto text-[8px] my-2">
            Loading...
          </h1>
          <h1 className="bg-slate-200 text-slate-200 w-[75%] mx-auto text-[8px] my-2">
            Loading...
          </h1>
        </div>
      </div>
    </>
  );
}

export default SingleServicesLoder;
