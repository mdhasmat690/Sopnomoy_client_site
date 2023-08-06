import React, { useRef, useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";

import { useGetUserDataQuery } from "../../features/auth/authApi";
import NaveBar from "../../component/home/NaveBar";
import Footer from "../../component/home/Footer";

function Agency() {
  const { agencyId } = useParams();

  const { data: serviceUserInto } = useGetUserDataQuery(agencyId);
  const user = serviceUserInto?.data;

  const rowRef = useRef(null);
  const [isMoved, setIsMoved] = useState(false);
  const location = useLocation();

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

  const currentPath = location.pathname;

  return (
    <div>
      <NaveBar />
      <hr className="#f3f3f4" />

      <div className="grid md:grid-cols-2 gap-3 w-[90%] mx-auto justify-center my-7">
        <div>
          <img
            src={user?.image}
            alt="https://md-hasmat-ali.imgbb.com/"
            className="w-[80px] h-[80px] rounded-[50%]"
          />
          <h1 class="text-2xl md:text-3xl lg:text-4xl font-semibold leading-9 md:leading-10">
            emote_agency
          </h1>
          <h1 class="text-3xl md:text-[48px] lg:text-[5xl] font-semibold leading-14 my-2 md:my-4">
            Email us: <br class="md:hidden" />
            <span className=""> {user?.email}</span>
          </h1>
          <div className=" flex mt-4">
            <Link to={"/account/editProfile"}>
              <button className="border border-indigo-[#E7E7E7] rounded-[8px] cursor-pointer text-[14px] h-[40px] font-[500] py-[10] px-[16px] mr-4">
                Hire Us
              </button>
            </Link>
            <button className="border border-black rounded-[8px] cursor-pointer text-[14px] h-[40px] font-[500] py-[10] px-[16px] mr-4 md:block hidden">
              Follow
            </button>
            <button className="border border-indigo-[#E7E7E7] rounded-[8px] cursor-pointer text-[14px] h-[40px] font-[500] py-[10] px-[16px] mr-4 md:block hidden">
              ...
            </button>
          </div>
        </div>
        <div>
          <img src="https://i.ibb.co/BZ4BNn6/original-1.webp" alt="" />
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
            <div className="">
              <Link to={`agencyWorks`}>
                <button
                  className={`text-[#6e6d7a] font-[500] mr-3 text-[17px]   hover:text-black   active:text-black focus:text-black focus:bg-white focus:ring-violet-300 py-[30] ${
                    currentPath == "/profile" ? "text-black" : "null"
                  }`}
                >
                  Work
                </button>
              </Link>

              <Link to={`agencyLike`}>
                <button
                  className={`text-[#6e6d7a] font-[500] mr-3 text-[17px]   hover:text-black   active:text-black focus:text-black focus:bg-white focus:ring-violet-300 py-[30]`}
                >
                  Liked Shots
                </button>
              </Link>
              <Link to={`agencyAbout`}>
                <button
                  className={`text-[#6e6d7a] font-[500] mr-3 text-[17px]   hover:text-black   active:text-black focus:text-black focus:bg-white focus:ring-violet-300 py-[30]`}
                >
                  About
                </button>
              </Link>
            </div>
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
      <Footer />
    </div>
  );
}

export default Agency;
