import React, { memo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiFillFileAdd } from "react-icons/ai";
import { FcLike } from "react-icons/fc";

//import styles 👇
import "react-modern-drawer/dist/index.css";
import SingleService from "../../../pages/services/SingleService";

function ServiceItem({ service }) {
  console.log(service);

  return (
    <div>
      <div className="relative flex items-center justify-center w-[100%] mx-auto   shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-t from-[#335db8]  via-transparent to-transparent">
        <div>
          <Link to={`/singleProduct/${service?._id}`}>
            <img
              className="  rounded-xl  group-hover:opacity-10 cursor-pointer"
              src={service?.imgUrl}
              alt=""
            />
          </Link>
        </div>

        <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
          <div>
            <p className="pb-4 pt-2 text-black text-center font-bold w-[200px] mx-auto">
              {service?.productName?.slice(0, 18)}
              {service?.productName?.length >= 18 ? <>...</> : <></>}
            </p>

            <div className="flex justify-center">
              <button className="bg-white text-gray-700 p-2 rounded-[8px]">
                <span>
                  <AiFillFileAdd className="text-[22px]" />
                </span>
              </button>

              <button className="ml-2 bg-white text-gray-700 p-2 rounded-[8px]">
                <FcLike className="text-[22px]" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-4 w-[70%] mx-auto">
        <div className="flex justify-around">
          <img
            className=" mr-5 rounded-[50%] w-[24px] h-[24px] "
            src="https://i.ibb.co/z8S8RST/about.jpg"
            alt=""
          />
          <h4 className="size-[14px] font-[500]">Hasmat</h4>
        </div>
        <div className="text-[#3d3d4e]">
          <span className="mr-3">123</span>
          <span>456</span>
        </div>
      </div>
    </div>
  );
}

export default memo(ServiceItem);
