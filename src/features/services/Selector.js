import React, { useEffect, useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import {
  AiOutlineArrowDown,
  AiOutlineArrowUp,
  AiOutlineSearch,
  AiOutlineUp,
} from "react-icons/ai";

const Selector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  console.log(isOpen);

  return (
    <div className="relative inline-block text-left">
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
  );
};

export default Selector;
