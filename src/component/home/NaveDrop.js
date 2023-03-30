import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { links } from "./Link";

function NaveDrop() {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");
  const navigate = useNavigate();
  return (
    <>
      {links.map((link, index) => (
        <div key={index} className="text-[#6e6d7a] font-[500]">
          <div className="md:cursor-pointer group">
            <li
              className="p-4 flex justify-between items-center md:pr-0 pr-10 group hover:text-[black]"
              onClick={() => {
                heading !== link.name ? setHeading(link.name) : setHeading("");
                setSubHeading("");
              }}
            >
              {link.name}
              <span className="text-xl md:hidden inline">
                <ion-icon
                  name={`${
                    heading === link.name ? "chevron-up" : "chevron-down"
                  }`}
                ></ion-icon>
              </span>
            </li>
            {link.submenu && (
              <div>
                <div className="shadow-md p-3 absolute hidden group-hover:md:block hover:md:block ">
                  {/* <div className="bg-white grid grid-cols-2 float-right gap-10"> */}
                  <div className="bg-white w-[400px] h-[300px] px-4    rounded ">
                    {link.sublinks.map((mysublinks, index) => (
                      <div key={index} className="flex flex-col py-2 group">
                        <div className="flex  items-center justify-between">
                          <div className="text-left">
                            <h1 className="text-[16px] text-black">
                              <Link to={mysublinks.link}>
                                {mysublinks.name}
                              </Link>
                            </h1>
                            <h1 className="text-[14px] text-[#6e6d7a] ">
                              {mysublinks.desc}
                            </h1>
                          </div>
                          <div className="hidden group-hover:md:block hover:md:block">
                            <img src={mysublinks.img} alt="" />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* Mobile menus */}
          <div
            className={`
            ${heading === link.name ? "md:hidden" : "hidden"}
          `}
          >
            {/* sublinks */}
            {link.sublinks.map((slinks, index) => (
              <div key={index}>
                <div>
                  <h1
                    onClick={() =>
                      subHeading !== slinks.Head
                        ? setSubHeading(slinks.Head)
                        : setSubHeading("")
                    }
                    className="py-4 pl-7 font-semibold md:pr-0 pr-5 flex justify-between items-center md:pr-0 pr-5"
                  >
                    {slinks.name}

                    <span className="text-xl md:mt-1 md:ml-2 inline"></span>
                  </h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}

export default NaveDrop;
