import React from "react";
import { useNavigate } from "react-router-dom";

function ServiceItem({ title, backgroundImg, tech, projectUrl }) {
  const navigate = useNavigate();
  return (
    <div>
      <div className="relative flex items-center justify-center w-[80%] mx-auto   shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
        <img
          onClick={() => navigate(`/singleProduct/1`)}
          className="  rounded-xl  group-hover:opacity-10 cursor-pointer"
          src={backgroundImg}
          alt=""
        />

        <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
          <h3 className="text-2xl text-black tracking-wider text-center">
            Cantuct
          </h3>
          <p className="pb-4 pt-2 text-black text-center">Contact Seller</p>
          <a href={projectUrl}>
            <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
              Save Data
            </p>
          </a>
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

export default ServiceItem;
