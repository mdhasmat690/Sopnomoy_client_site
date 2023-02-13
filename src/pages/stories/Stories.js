import React from "react";
import { useNavigate } from "react-router-dom";

function Stories() {
  const navigate = useNavigate();
  return (
    <>
      <div className="border-t border-indigo-[#f3f3f4] w-[100%]"></div>
      <div className="w-[90%] mx-auto">
        <div>
          <h1 className="text-[4vw] font-[700] leading-[4vw] my-5">
            Courtside: <br /> The Dribbble Blog
          </h1>
        </div>

        <div className="flex justify-between flex-wrap">
          <div className="w-[70%]">
            <div>
              <span className="text-[#dbdbde] text-[14] font-[500]">
                JAN 20, 2023
              </span>
              <h1 className="text-black font-[500] hover:text-[#ea4c89] text-[3vw]">
                Mid-Century Modern Graphic Design Inspiration
              </h1>
              <img
                src="https://cdn.dribbble.com/users/938871/screenshots/17691736/is-it-friday_dribbble3.jpg"
                className="w-[100%] h-[40vw] mt-3"
                alt=""
              />
              <h1 className="text-[19px] leading-[1.3] mt-5">
                Clean and straightforward lines did a lot to inspire future
                trends, including the minimalist movement that so many designers
                are so fond of today. Explore a collection of modern graphic
                design inspired by the mid-century modern aesthetic.
              </h1>
              <div className="border-t-2 border-indigo-[#f3f3f4] w-[100%] my-5"></div>

              <div className=" flex">
                <img
                  src="https://cdn.dribbble.com/uploads/43144/original/3c0b815faaccefbb2c55009848996fde.png?1670361214"
                  alt=""
                  className="w-[35%] rounded-md mr-5"
                />

                <div>
                  <span className="text-[#dbdbde] text-[14] font-[500]">
                    DEC 13, 2022
                  </span>
                  <h1
                    onClick={() => navigate(`/blog/1`)}
                    className="text-[24px] font-[500] cursor-pointer hover:text-[#ea4c89]"
                  >
                    7 critical business tools every designer needs in 2023
                  </h1>
                  <p className="text-[#dbdbde] text-[14] font-[400]">
                    Discover a list of the most important business tools for
                    designers to scale their brand in 2023 and beyond.
                  </p>
                </div>
              </div>
              <div className="border-t-2 border-indigo-[#f3f3f4] w-[100%] my-5"></div>
              <div className=" flex">
                <img
                  src="https://cdn.dribbble.com/uploads/43144/original/3c0b815faaccefbb2c55009848996fde.png?1670361214"
                  alt=""
                  className="w-[35%] rounded-md mr-5"
                />

                <div>
                  <span className="text-[#dbdbde] text-[14] font-[500]">
                    DEC 13, 2022
                  </span>
                  <h1
                    className="text-[24px] font-[500] cursor-pointer hover:text-[#ea4c89]"
                    // onClick={() => navigate("/blog/2")}
                    onClick={() => navigate(`/blog/1`)}
                  >
                    7 critical business tools every designer needs in 2023
                  </h1>
                  <p className="text-[#dbdbde] text-[14] font-[400]">
                    Discover a list of the most important business tools for
                    designers to scale their brand in 2023 and beyond.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className=" md:mx-auto">
            <div>
              <h1 className="text-[18px] font-[700] leading-1">Overtime</h1>
              <h1 className="text-[#9e9ea7] font-[14px]">
                The Dribbble Podcast
              </h1>
              <h1 className="mt-2 text-[#ea4c89] font-[500]">
                The Power of Play
              </h1>
              <div className="border-t-2 border-indigo-[#f3f3f4] w-[100%] my-5"></div>
              <h1 className="text-[18px] font-[700] leading-1">
                All Categories
              </h1>
              <h2 className="text-[#ea4c89] font-[500] hover:text-[#f082ac] cursor-pointer my-2">
                Interviews
              </h2>
              <h2 className="text-[#ea4c89] font-[500] hover:text-[#f082ac] cursor-pointer my-2">
                PodCast
              </h2>
              <h2 className="text-[#ea4c89] font-[500] hover:text-[#f082ac] cursor-pointer my-2">
                Inspiration
              </h2>
              <h2 className="text-[#ea4c89] font-[500] hover:text-[#f082ac] cursor-pointer my-2">
                Process
              </h2>
              <h2 className="text-[#ea4c89] font-[500] hover:text-[#f082ac] cursor-pointer my-2">
                Meetups
              </h2>
              <h2 className="text-[#ea4c89] font-[500] hover:text-[#f082ac] cursor-pointer my-2">
                Updates
              </h2>
              <h2 className="text-[#ea4c89] font-[500] hover:text-[#f082ac] cursor-pointer my-2">
                Hang Time
              </h2>
              <h2 className="text-[#ea4c89] font-[500] hover:text-[#f082ac] cursor-pointer my-2">
                Community
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Stories;
