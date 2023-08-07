import React from "react";
import { useNavigate } from "react-router-dom";

function WarmUp() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="border-t border-indigo-[#f3f3f4] w-[100%]  "></div>
      <div className="w-[85%] mx-auto my-14 ">
        <span className="text-[14px] font-[700] text-[#4f3cc9] rounded-[6px] bg-[#f6f5fc] p-3">
          Official Playoff
        </span>
        <div className="flex items-center justify-start my-5">
          <div>
            {" "}
            <img
              src="https://i.ibb.co/z8S8RST/about.jpg"
              alt="logo"
              className="md:cursor-pointer h-12 mr-4"
            />
          </div>
          <div>
            <h1 className="md:text-[24px] sm:text-[17px] leading-[1.25] font-[500] mb-2">
              Design a colorful homepage for a new art supplies shop.
            </h1>

            <div className="grid md:grid-cols-10">
              <h3 className="text-[#6e6d7a] font-bold  col-span-9">
                by Sopnomoy on Jan 27, 2023
              </h3>
              <h3 className="text-black text-[17px] font-[400]">
                Over in 4 days
              </h3>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="col-span-2 ">
            <img
              src="https://i.ibb.co/3StDjQG/h1.png"
              alt=""
              className="w-[100%]"
            />
          </div>

          <div className="text-[20px] font-[400] leading-[32px] flex items-center justify-center ">
            <div className="md: ml-5 sm:ml-none">
              <h1 className="mb-5">
                In this week's design challenge, you've been tasked with{" "}
                <span className="font-[700] text-[]">
                  designing the homepage for an online art supplies shop.
                </span>{" "}
              </h1>

              <h2 className="my-5">
                You have full creative freedom to come up with a unique brand
                positioning and homepage design.
              </h2>

              <h1 className=" ">We can't wait to see what you create!</h1>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-9 mt-16">
          <h1 className="text-[22px] font-[500] leading-[1.2] col-span-8 text-center">
            How to participate
          </h1>
          <h1
            //onClick={() => navigate("/warmUp/1")}
            onClick={() => navigate(`/warmUp/1`)}
            className="text-[#4f3cc9] text-center cursor-pointer"
          >
            Learn more here!
          </h1>
        </div>
        <div className="grid md:grid-cols-3 gap-4 mt-14">
          <div className="flex ">
            <span className="bg-[#f6f5fc]  text-[17px] w-[50px] h-[50px] px-6 py-4 rounded-[50px]">
              1
            </span>
            <div className="ml-3">
              <span className="text-[20px] font-[500] leading-[29px]">
                Design
              </span>

              <h1 className="text-[14px] font-[400] leading-[1.5] mt-2 text-justify">
                Use this week’s warm-up prompt to flex your design muscles and
                hone your skills. Work however you want, but keep it low-stress
                and fun!
              </h1>
            </div>
          </div>
          <div className="flex ">
            <span className="bg-[#f6f5fc]  text-[17px] w-[50px] h-[50px] px-6 py-4 rounded-[50px]">
              1
            </span>
            <div className="ml-3">
              <span className="text-[20px] font-[500] leading-[29px]">
                Rebound
              </span>

              <h1 className="text-[14px] font-[400] leading-[1.5] mt-2 text-justify">
                Design something and hit the button above to Rebound this shot
                before February 6 to participate in this prompt!
              </h1>
            </div>
          </div>
          <div className="flex ">
            <span className="bg-[#f6f5fc]  text-[17px] w-[50px] h-[50px] px-6 py-4 rounded-[50px]">
              1
            </span>
            <div className="ml-3">
              <span className="text-[20px] font-[500] leading-[29px]">
                Explore
              </span>

              <h1 className="text-[14px] font-[400] leading-[1.5] mt-2 text-justify">
                Check out all of this week’s Weekly-Warm-Up community
                submissions below, and keep an eye out for our blog recap and
                social features!
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WarmUp;
