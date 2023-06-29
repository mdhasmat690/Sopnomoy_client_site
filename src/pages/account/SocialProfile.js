import React from "react";

function SocialProfile(props) {
  return (
    <div>
      <div>
        <form /* onSubmit={handleSubmit(onSubmit)} */>
          <div className="my-5">
            <label className="text-[16px] font-[600]">
              Twitter{" "}
              <span className="text-[14px] font-[400] text-[#9e9ea7]">
                Only url
              </span>
            </label>
            <input
              className=" text-[16px] h-[48px] py-[10px] px-[16px] my-2 border-[2px] outline-none rounded-[6px] focus:shadow-[0px_0px_2px_4px_rgba(234,76,137,0.24)]     focus:bg-white p-2 w-[100%] hover:shadow-[0px_0px_2px_4px_rgba(234,76,137,0.24)] "
              // {...register("username")}
              required
            />
          </div>
          <div className="my-5">
            <label className="text-[16px] font-[600]">
              Facebook{" "}
              <span className="text-[14px] font-[400] text-[#9e9ea7]">
                Only url
              </span>
            </label>
            <input
              className=" text-[16px] h-[48px] py-[10px] px-[16px] my-2 border-[2px] outline-none rounded-[6px] focus:shadow-[0px_0px_2px_4px_rgba(234,76,137,0.24)]     focus:bg-white p-2 w-[100%] hover:shadow-[0px_0px_2px_4px_rgba(234,76,137,0.24)] "
              // {...register("username")}
              required
            />
          </div>
          <div className="my-5">
            <label className="text-[16px] font-[600]">
              Instagram{" "}
              <span className="text-[14px] font-[400] text-[#9e9ea7]">
                Only url
              </span>
            </label>
            <input
              className=" text-[16px] h-[48px] py-[10px] px-[16px] my-2 border-[2px] outline-none rounded-[6px] focus:shadow-[0px_0px_2px_4px_rgba(234,76,137,0.24)]     focus:bg-white p-2 w-[100%] hover:shadow-[0px_0px_2px_4px_rgba(234,76,137,0.24)] "
              // {...register("username")}
              required
            />
          </div>
          <div className="my-5">
            <label className="text-[16px] font-[600]">
              GitHub{" "}
              <span className="text-[14px] font-[400] text-[#9e9ea7]">
                Only url
              </span>
            </label>
            <input
              className=" text-[16px] h-[48px] py-[10px] px-[16px] my-2 border-[2px] outline-none rounded-[6px] focus:shadow-[0px_0px_2px_4px_rgba(234,76,137,0.24)]     focus:bg-white p-2 w-[100%] hover:shadow-[0px_0px_2px_4px_rgba(234,76,137,0.24)] "
              // {...register("username")}
              required
            />
          </div>
          <div className="my-5">
            <label className="text-[16px] font-[600]">
              Creative Market{" "}
              <span className="text-[14px] font-[400] text-[#9e9ea7]">
                Only url
              </span>
            </label>
            <input
              className=" text-[16px] h-[48px] py-[10px] px-[16px] my-2 border-[2px] outline-none rounded-[6px] focus:shadow-[0px_0px_2px_4px_rgba(234,76,137,0.24)]     focus:bg-white p-2 w-[100%] hover:shadow-[0px_0px_2px_4px_rgba(234,76,137,0.24)] "
              // {...register("username")}
              required
            />
          </div>
          <div className="my-5">
            <label className="text-[16px] font-[600]">
              LinkedIn{" "}
              <span className="text-[14px] font-[400] text-[#9e9ea7]">
                Only url
              </span>
            </label>
            <input
              className=" text-[16px] h-[48px] py-[10px] px-[16px] my-2 border-[2px] outline-none rounded-[6px] focus:shadow-[0px_0px_2px_4px_rgba(234,76,137,0.24)]     focus:bg-white p-2 w-[100%] hover:shadow-[0px_0px_2px_4px_rgba(234,76,137,0.24)] "
              // {...register("username")}
              required
            />
          </div>

          <h1 className="text-red-700 my-2">
            This field not working now we are working now
          </h1>

          <div className="flex justify-end">
            {" "}
            <button
              className={`my-anchor-element text-white rounded-md   bg-[#ea4c89] px-3 py-2 
                    cursor-pointer`}
              type="submit"
            >
              Update Social Profile
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SocialProfile;
