import React from "react";
import { AiFillFacebook } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineLink } from "react-icons/ai";

function LarnMore(props) {
  return (
    <div>
      <div className="border-t border-indigo-[#f3f3f4] w-[100%]  "></div>
      <div className="grid md:grid-cols-2   md:bg-[#fdf6f9] pb-10 sm:bg-white">
        <div className="bg-white">
          <img
            src="https://cdn.dribbble.com/uploads/1676/original/c196e4eba81fecb24415b6a9bced576f.png"
            className="  p-[10px] md:ml-[100px] mt-10 sm:ml-auto"
            alt=""
          />
        </div>
        <div className="flex items-center justify-center md:mb-0 sm:mb-14 p-4">
          <div className=" ">
            <h1 className="text-[40px] font-[700] leading-[1.2]  md:w-[330px] sm:w-[90%] mx-auto justify-center mt-10 text-justify">
              Introducing Dribbble's Weekly Warm‑Up
            </h1>

            <h2 className="mx-auto text-justify md:w-[330px] sm:w-[90%] text-[18px] font-[700] leading-1 mt-7 ">
              by Md Hasmat in{" "}
              <span className="hover:text-[#ea4c89] underline cursor-pointer">
                Community
              </span>
            </h2>
            <h3 className="md:w-[330px] sm:w-[90%] mx-auto text-justify text-[#6e6d7a] text-[14] font-[500]">
              DEC 6, 2022
            </h3>
            <div className="grid md:grid-cols-4 gap-3 mt-5 md:ml-[155px] sm:ml-none">
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
                  <span className="text-[#1da1f2] mr-2">
                    <AiFillLinkedin />
                  </span>
                  Share
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
      </div>
      <div className="md:w-[53%] sm:w-[80%] md:p-none sm:p-2 mx-auto text-justify">
        <div className="flex items-center">
          <span className="mr-3 text-[#ea4c89] text-[40px] font-[700]">A</span>
          <h1 className="text-[#6e6d7a]">
            lright Dribbblers, who’s ready to work up a sweat? If you’re
            searching for the creative equivalent of a light jog around the
            block, you’re in luck. We’re excited to kick off a new
          </h1>
        </div>
        <h1 className="text-[#6e6d7a] mt-[-5px]">
          weekly design exercise for the Dribbble community –{" "}
          <span className="text-[#6e6d7a] font-bold">THE WEEKLY WARM-UP.</span>
        </h1>
        <h1 className="text-[#6e6d7a] mt-4">
          Why provide a spark for creative exercises? Well, oftentimes we find
          ourselves up to our eyeballs in high-stakes design projects, so it’s
          nice to take a breath and have design work purely for the sake of
          design—design work for the explicit sake of pushing the limits of your
          visual wheelhouse, while also encouraging you to flex your creative
          muscles.
        </h1>
      </div>
      <div className="w-[70%] mx-auto mt-10 grid md:grid-cols-3 gap-6">
        <img
          src="https://cdn.dribbble.com/uploads/1675/original/438a9fdeea8b92a1239627988622ab2d.png?1567520001"
          className="w-full"
          alt=""
        />
        <img
          src="https://cdn.dribbble.com/uploads/1676/original/c196e4eba81fecb24415b6a9bced576f.png?1567520031"
          className="w-full"
          alt=""
        />
        <img
          src="https://cdn.dribbble.com/uploads/1677/original/4da603ee5329c397e8b0820d3523acc9.png?1567520065"
          className="w-full"
          alt=""
        />
        <img
          src="https://cdn.dribbble.com/uploads/1678/original/7e5708f4c5a86ae08f72b6c433fb3649.png?1567520156"
          className="w-full"
          alt=""
        />
        <img
          src="https://cdn.dribbble.com/uploads/1679/original/d8fc180506d6090e9019d4bee86e1cf2.png?1567520185"
          className="w-full"
          alt=""
        />
        <img
          src="https://cdn.dribbble.com/uploads/1680/original/c40164ad773101934a4af4a2e437333f.png?1567520209"
          className="w-full"
          alt=""
        />
      </div>
      <div className="md:w-[53%] sm:w-[80%] md:p-none sm:p-2 mx-auto text-justify mt-5">
        <h1 className="text-[#6e6d7a] mt-[-5px]">
          So how will our Dribbble{" "}
          <span className="text-[#6e6d7a] font-bold"> Weekly Warm-Up </span>
          Each week we’ll post a new Shot prompt that will feature three
          components:
        </h1>
        <div className="flex items-center">
          <span className="mr-3 text-[#ea4c89] text-[40px] font-[700]">A </span>
          <h1 className="text-[#6e6d7a]">
            lright Dribbblers, who’s ready to work up a sweat? If you’re
            searching for the creative equivalent of a light jog around the
            block, you’re in luck. We’re excited to kick off a new
          </h1>
        </div>
        <h1 className="text-[#6e6d7a] mt-[-5px]">
          weekly design exercise for the Dribbble community –{" "}
          <span className="text-[#6e6d7a] font-bold">THE WEEKLY WARM-UP.</span>
        </h1>
        <h1 className="text-[#6e6d7a] mt-4">
          Why provide a spark for creative exercises? Well, oftentimes we find
          ourselves up to our eyeballs in high-stakes design projects, so it’s
          nice to take a breath and have design work purely for the sake of
          design—design work for the explicit sake of pushing the limits of your
          visual wheelhouse, while also encouraging you to flex your creative
          muscles.
        </h1>
      </div>
    </div>
  );
}

export default LarnMore;
