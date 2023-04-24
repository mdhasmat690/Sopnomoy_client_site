import React from "react";
import {
  AiFillFacebook,
  AiFillLinkedin,
  AiOutlineLink,
  AiOutlineTwitter,
} from "react-icons/ai";

import { HiLocationMarker } from "react-icons/hi";
import { TiContacts } from "react-icons/ti";

function About() {
  return (
    <div className="w-[80%] mx-auto">
      <br />
      {/* <div className="grid grid-cols-3">
        <div className="col-span-2">
          <h1 className="text-[#0d0c22] text-[16] font-bold leading-[1em]">
            Biography
          </h1>
          <h1 className="text-[#ea4c89] text-[14] font-[500] mt-5 leading-[20px]">
            Add Bio
          </h1>
        </div>
        <div className="col-span-1">asdkfj</div>
      </div> */}

      <div className="flex md:justify-between items-center  ">
        <div>
          <div className="md:hidden block">
            <div className="flex my-4">
              <div>
                {" "}
                <button className="border border-indigo-[#f3f3f4]  w-[95%] p-2 rounded-md mr-5 flex items-center font-[500]">
                  {" "}
                  <span className="text-[#1da1f2] mr-2">
                    <AiFillFacebook />
                  </span>
                  Share
                </button>
              </div>
              <div>
                {" "}
                <button className="border border-indigo-[#f3f3f4]  w-[95%] p-2 rounded-md mr-5 flex items-center font-[500]">
                  {" "}
                  <span className="text-[#1da1f2] mr-2">
                    <AiOutlineTwitter />
                  </span>
                  Tweet
                </button>
              </div>

              <div>
                {" "}
                <button className="border border-indigo-[#f3f3f4]  w-[95%] p-2 rounded-md mr-5 flex items-center font-[500]">
                  {" "}
                  <span className="text-[#6e6d7a] mr-2">
                    <AiOutlineLink />
                  </span>
                  Share
                </button>
              </div>
            </div>
          </div>
          <h1 className="text-[#0d0c22] text-[16] font-bold leading-[1em]">
            Biography
          </h1>
          <h1 className="text-[#ea4c89] hover:text-[#f082ac] cursor-pointer text-[14px] font-[500] mt-5 leading-[20px]">
            Add Bio
          </h1>
        </div>
        <div className="hidden md:block">
          <div className="flex">
            <div>
              {" "}
              <button className="border border-indigo-[#f3f3f4]  w-[95px] p-2 rounded-md mr-5 flex items-center font-[500]">
                {" "}
                <span className="text-[#1da1f2] mr-2">
                  <AiFillFacebook />
                </span>
                Share
              </button>
            </div>
            <div>
              {" "}
              <button className="border border-indigo-[#f3f3f4]  w-[95px] p-2 rounded-md mr-5 flex items-center font-[500]">
                {" "}
                <span className="text-[#1da1f2] mr-2">
                  <AiOutlineTwitter />
                </span>
                Tweet
              </button>
            </div>

            <div>
              {" "}
              <button className="border border-indigo-[#f3f3f4]  w-[95px] p-2 rounded-md mr-5 flex items-center font-[500]">
                {" "}
                <span className="text-[#6e6d7a] mr-2">
                  <AiOutlineLink />
                </span>
                Share
              </button>
            </div>
          </div>
        </div>
      </div>

      <br />

      <div className="flex md:justify-between items-center  ">
        <div>
          <div className="md:hidden block">
            <div className="bg-[#fafafb] rounded-[8px] py-[24px] px-[60px] mx-auto mb-4 mr-14 w-[99%]">
              <h1 className="flex items-center #3d3d4e my-2">
                <span className="mr-2">
                  <HiLocationMarker />
                </span>
                Dinajpur
              </h1>
              <h1 className="flex items-center text-[#3d3d4e]">
                <span className="mr-2">
                  <TiContacts />
                </span>{" "}
                Member since Feb 2023
              </h1>
            </div>
          </div>
          <h1 className="text-[#0d0c22] text-[16] font-bold leading-[1em]">
            Skills
          </h1>
          <h1 className="text-[#ea4c89] hover:text-[#f082ac] cursor-pointer text-[14px] font-[500] mt-5 leading-[20px]">
            Add Skills
          </h1>
        </div>
        <div className="hidden md:block">
          <div className="bg-[#fafafb] rounded-[8px] py-[24px] px-[60px] mx-auto mr-14 w-[99%]">
            <h1 className="flex items-center #3d3d4e my-2">
              <span className="mr-2">
                <HiLocationMarker />
              </span>
              Dinajpur
            </h1>
            <h1 className="flex items-center text-[#3d3d4e]">
              <span className="mr-2">
                <TiContacts />
              </span>{" "}
              Member since Feb 2023
            </h1>
          </div>
        </div>
      </div>

      <div className=" md:hidden block mt-8">
        {" "}
        <h1 className="text-[#0d0c22] text-[16] font-bold leading-[1em]">
          Social
        </h1>
        <h1 className="text-[#ea4c89] hover:text-[#f082ac] cursor-pointer text-[14px] font-[500] mt-5 leading-[20px]">
          Add social/portfolio links
        </h1>
      </div>

      <div className="grid md:grid-cols-8 gap-x-4 my-4">
        <div className="col-span-5">
          <div className="border-t border-indigo-[#f3f3f4] w-[100%]"></div>
          <div className="text-[#6e6d7a] text-[14px] font-[400] mt-4 md:mt-8">
            <span className="mr-4">0 followers </span>
            <span>0 following</span>
          </div>
        </div>

        <div className="col-span-3  mt-8">
          {" "}
          <div className="hidden md:block">
            <h1 className="text-[#0d0c22] text-[16] font-bold leading-[1em]">
              Social
            </h1>
            <h1 className="text-[#ea4c89] hover:text-[#f082ac] cursor-pointer text-[14px] font-[500] mt-5 leading-[20px]">
              Add social/portfolio links
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
