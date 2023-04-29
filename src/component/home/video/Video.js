import React, { useRef, useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

import "./video.css";
import { useGetGroupProjectsQuery } from "../../../features/services/servicesApi";
import { useDispatch, useSelector } from "react-redux";
import { search } from "../../../features/services/servicesSlice";

const groupButton = [
  { name: "Discover", searchTag: "" },
  { name: "Animation", searchTag: "Animation" },
  { name: "Web Design", searchTag: "WebDesign" },
  { name: "Designer", searchTag: "softwareDesigner" },
  { name: "Mobile", searchTag: "Mobile" },
  { name: "App Design", searchTag: "App Design" },
];

function Video(props) {
  const { user, isLoading } = useSelector((state) => state?.auth);

  const [name, setName] = useState("");

  const dispatch = useDispatch();
  const { searchTag } = useSelector((state) => state.searchTol);
  const rowRef = useRef(null);
  const [isMoved, setIsMoved] = useState(false);

  const handleClick = (direction) => {
    setIsMoved(true);
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;

      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;
      rowRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  const handleGruoupClick = (e) => {
    dispatch(search(e));
  };

  return (
    <div className=" mx-auto  ">
      <div className="background_img ">
        <br />
        <div className="group relative md:-ml-2 mb-3">
          <MdChevronLeft
            className={`absolute top-0 bottom-0 left-2 z-40 m-auto text-white h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100 ${
              !isMoved && "hidden"
            }`}
            onClick={() => handleClick("left")}
          />
          <div
            style={{ overflowX: "hidden" }}
            className="flex md:justify-center items-center space-x-0.5 overflow-x-scroll overflow-hidden md:space-x-2.5 md:p-2"
            ref={rowRef}
          >
            {groupButton.map((button, index) => (
              <div
                key={index}
                className={` min-w-[150px] cursor-pointer   md:min-w-[150px] `}
              >
                <button
                  onClick={() => handleGruoupClick(`${button?.searchTag}`)}
                  className={`text-white rounded-[50px] text-xl w-[150px] p-[10px] bg-[rgba(0,0,0,0.5)] hover:bg-white hover:text-black   active:bg-white focus:text-black focus:bg-white focus:ring-violet-300 `}
                >
                  {button?.name}
                </button>
              </div>
            ))}
          </div>

          <MdChevronRight
            className="absolute top-0 bottom-0 right-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100 text-white"
            onClick={() => handleClick("right")}
          />
        </div>

        {/*  */}

        <div className="mx-auto text-center">
          <br />
          <h1 className="text-[36px] leading-[1.2] text-white font-[700] ">
            Explore the world’s leading <br /> design portfolios
          </h1>
          <h2 className="text-justify text-[16px] w-[90%] md:w-[50%]   mx-auto text-white leading-[25px] mt-5">
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
