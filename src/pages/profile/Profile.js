import React, { useRef, useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { Link, Outlet } from "react-router-dom";
const groupButton = [
  { name: "Work 0", searchTag: "", link: "work" },
  { name: "Collections 1", searchTag: "WebDesign", link: "collection" },
  { name: "Liked Shots 1", searchTag: "softwareDesigner", link: "LinkedShoot" },
  { name: "About", searchTag: "Mobile" },
];

function Profile(props) {
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
  return (
    <div>
      <hr className="#f3f3f4" />
      <div className="md:flex justify-center items-center my-10">
        <div className="ml-4 ">
          <img
            src="https://i.ibb.co/3pbVY1G/googleimg.png"
            alt="https://md-hasmat-ali.imgbb.com/"
            className="w-[100px]"
          />
        </div>
        <div className="ml-8">
          <div>
            <h1 className="text-[32px] font-[700] leading-[38px] font-[Haas Grot Text R Web, Helvetica Neue]">
              Md Hasmat Ali
            </h1>
            <h6 className="text-[#9e9ea7] text-[16px] font-[400] hover:text-[#3d3d4e] cursor-pointer my-3">
              Dinajpur
            </h6>
            <div className=" flex">
              <button className="border border-indigo-[#E7E7E7] rounded-[8px] cursor-pointer text-[14px] h-[40px] font-[500] py-[10] px-[16px] mr-4">
                Edit Profile
              </button>
              <button className="border border-indigo-[#E7E7E7] rounded-[8px] cursor-pointer text-[14px] h-[40px] font-[500] py-[10] px-[16px] mr-4">
                ...
              </button>
              <button className="text-[#4d44c6] bg-[rgba(77,68,198,0.1)] border border-indigo-[#E7E7E7] rounded-[71px] cursor-pointer text-[14px] h-[40px] font-[500] py-[10] px-[16px]">
                LIMITED ACCOUNT
              </button>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />

      <div className="w-[90%] mx-auto">
        <div className=" group relative md:-ml-2 mb-3">
          <MdChevronLeft
            className={`absolute top-0 bottom-0 left-2 z-40 m-auto text-black h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100 md:hidden  `}
            onClick={() => handleClick("left")}
          />
          <div
            style={{ overflowX: "hidden" }}
            className="flex items-center space-x-0.5 overflow-x-scroll overflow-hidden md:space-x-2.5 "
            ref={rowRef}
          >
            {groupButton.map((button, index) => (
              <div key={index} className="">
                <Link to={`/${button?.link}`}>
                  <button className="text-[#6e6d7a] font-[500] mr-3 text-[17px]   hover:text-black   active:text-black focus:text-black focus:bg-white focus:ring-violet-300 py-[30]">
                    {button?.name}
                  </button>
                </Link>
              </div>
            ))}
          </div>

          <MdChevronRight
            className="absolute top-0 bottom-0 right-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100 text-black md:hidden"
            onClick={() => handleClick("right")}
          />
        </div>
        <hr className="#f3f3f4" />

        <div>
          <div className="my-10">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
