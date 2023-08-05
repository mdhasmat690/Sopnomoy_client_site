import React, { useRef, useState } from "react";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { search } from "../../../features/services/servicesSlice";
import { useGetUserDataQuery } from "../../../features/auth/authApi";

const groupButton = [
  { name: "Discover", searchTag: "" },
  { name: "Animation", searchTag: "animation" },
  { name: "Web Design", searchTag: "web" },
  { name: "Designer", searchTag: "designer" },
  { name: "Mobile", searchTag: "softwareDesigner" },
  { name: "App Design", searchTag: "app" },
];

const Selector = () => {
  const dispatch = useDispatch();
  const { email: user } = useSelector((state) => state?.auth?.user);
  const { data } = useGetUserDataQuery(user);
  const userData = data?.data;

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

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
    <div className="md:flex   ">
      <div className="relative inline-block text-left  mr-12">
        <button
          type="button"
          className="inline-flex justify-center w-[100%] rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-[15px] text-[#6e6d7a] hover:shadow-[0px_0px_2px_4px_rgba(234,76,137,0.24)] focus:outline-none focus:shadow-[0px_0px_2px_4px_rgba(234,76,137,0.24)]  "
          id="dropdown-menu-button"
          aria-expanded={isOpen}
          aria-haspopup="true"
          onClick={toggleDropdown}
        >
          {selectedOption ? selectedOption : "Popular"}

          <span>
            {isOpen ? (
              <AiOutlineArrowUp className="-mr-1 ml-2 h-5 w-4" />
            ) : (
              <AiOutlineArrowDown className="-mr-1 ml-2 h-5 w-4" />
            )}
          </span>
        </button>

        {isOpen && (
          <div className="  z-10   absolute  mt-1 w-[190px] rounded-md shadow-lg bg-white  cursor-pointer focus:outline-none">
            <div className="py-1 ">
              <h5
                className={` px-4 py-2 text-sm ${
                  selectedOption === "Popular"
                    ? "font-[500] text-[#ea4c89]"
                    : "text-gray-700"
                }  hover:bg-gray-100 hover:text-gray-900`}
                onClick={() => handleOptionClick("Popular")}
              >
                Popular
              </h5>
              <h5
                className={` px-4 py-2 text-sm ${
                  selectedOption === "New & Noteworthy"
                    ? "font-[500] text-[#ea4c89]"
                    : "text-gray-700"
                }  hover:bg-gray-100 hover:text-gray-900`}
                onClick={() => handleOptionClick("New & Noteworthy")}
              >
                New & Noteworthy
              </h5>

              <hr />

              <h5
                className={` px-4 py-2 text-sm ${
                  selectedOption === "Marketplace"
                    ? "font-[500] text-[#ea4c89]"
                    : "text-gray-700"
                }  hover:bg-gray-100 hover:text-gray-900`}
                onClick={() => handleOptionClick("Marketplace")}
              >
                Marketplace
              </h5>
            </div>
          </div>
        )}
      </div>

      <div>
        {(userData?.email || user) && (
          <>
            <div className="md:hidden block">
              <div className="border-t border-indigo-[#f3f3f4] w-[100%] my-5"></div>
            </div>
            <div className="group relative md:-ml-2 mb-3 mx-auto   md:w-full w-[98%] ml-[-10px] md:mt-0 mt-5">
              <MdChevronLeft
                className={`absolute top-0 bottom-0 left-[-18px] z-40 m-auto text-[#ea4c89] h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100 ${
                  !isMoved && "hidden"
                }`}
                onClick={() => handleClick("left")}
              />
              <div
                style={{ overflowX: "hidden" }}
                className="flex  space-x-[10px] overflow-x-scroll overflow-hidden md:space-x-[2px] md:p-2"
                ref={rowRef}
              >
                {groupButton.map((button, index) => (
                  <div key={index}>
                    <button
                      onClick={() => handleGruoupClick(`${button?.searchTag}`)}
                      className={`  rounded-[50px]  w-[90px] p-[1px]       active:bg-[#f8f7f4] focus:text-black focus:bg-[#f8f7f4] focus:ring-violet-300 `}
                    >
                      {button?.name}
                    </button>
                  </div>
                ))}
              </div>

              <MdChevronRight
                className="absolute top-0 bottom-0 right-[10px] z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100 text-[#ea4c89]"
                onClick={() => handleClick("right")}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Selector;
