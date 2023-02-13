import React from "react";

import "./video.css";

function Video(props) {
  return (
    <div className=" mx-auto  ">
      <div className="background_img ">
        <div className="mx-auto text-center justify-around ml-11  items-center sm: flex-wrap">
          <div className="mx-auto p-10 flex  justify-around  sm: flex-wrap gap-3">
            <button className="text-white rounded-[50px] text-xl w-[150px] p-[10px] bg-[rgba(0,0,0,0.5)] hover:bg-white hover:text-black">
              Discover
            </button>
            <button className="text-white rounded-[50px] text-xl w-[150px] p-[10px] bg-[rgba(0,0,0,0.5)] hover:bg-white hover:text-black">
              Animation
            </button>
            <button className="text-white rounded-[50px] text-xl w-[150px] p-[10px] bg-[rgba(0,0,0,0.5)] hover:bg-white hover:text-black">
              Branding
            </button>
            <button className="text-white rounded-[50px] text-xl w-[150px] p-[10px] bg-[rgba(0,0,0,0.5)] hover:bg-white hover:text-black">
              Mobile
            </button>

            <button className="text-white rounded-[50px] text-xl w-[150px] p-[10px] bg-[rgba(0,0,0,0.5)] hover:bg-white hover:text-black">
              Typography
            </button>
            <button className="text-white rounded-[50px] text-xl w-[150px] p-[10px] bg-[rgba(0,0,0,0.5)] hover:bg-white hover:text-black">
              Web Design
            </button>
          </div>
        </div>
        <div className="mx-auto text-center  ">
          <h1 className="text-[3vw] leading-[1.2] text-white font-[700]">
            Explore the world’s leading <br /> design portfolios
          </h1>
          <h2 className="text-justify text-[1.2vw]  w-[50%] mx-auto text-white leading-[25px] mt-5">
            Millions of designers and agencies around the world showcase their
            portfolio work on Dribbble - the home to the world’s best design and
            creative .
          </h2>
        </div>

        <div className="mx-auto w-[50%]   ">
          <input
            className=" w-[90%] text-gray-700 bg-white  border-solid border-gray-300 rounded transition ease-in-out m-0  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none p-4 mt-10 mx-auto"
            type="search"
            placeholder="Search..."
          />
        </div>
      </div>
    </div>
  );
}

export default Video;

/* https://i.ibb.co/2PwnGWT/cdn-dribbble-com-c33e424e99ba06e76cf74d3b8d9a3b02-mp4.gif
https://i.ibb.co/sPnhPnR/cdn-dribbble-com-c33e424e99ba06e76cf74d3b8d9a3b02-mp4-Adobe-Express.gif */
