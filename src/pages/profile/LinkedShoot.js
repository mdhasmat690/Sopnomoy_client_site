import React from "react";
import { AiFillEye, AiFillFileAdd } from "react-icons/ai";
import { FcLike } from "react-icons/fc";
import "./likeed.css";
import { Link } from "react-router-dom";
import { useGetUserLikedServicesQuery } from "../../features/services/servicesApi";
import { useSelector } from "react-redux";
import ServiceLodear from "../ui/ServiceLodear";

function LinkedShoot(props) {
  const { email: user } = useSelector((state) => state?.auth?.user);
  const { data, isLoading, isError } = useGetUserLikedServicesQuery(user);
  console.log(data?.data);

  let content = null;

  if (isLoading) {
    content = (
      <>
        <ServiceLodear />
        <ServiceLodear />
        <ServiceLodear />
        <ServiceLodear />
      </>
    );
  }

  if (!isLoading && !isError && data?.data?.length === 0) {
    content = <>No videos found!</>;
  }

  if (!isLoading && !isError && data?.data?.length > 0) {
    content = data?.data.map((service, index) => (
      <div>
        <div className="relative group ">
          <div>
            <Link to={`/singleProduct/`}>
              <img
                className=" cursor-pointer rounded-[8px]"
                src="https://i.ibb.co/Vvz1D7w/3-D-Composition-2.webp"
                alt=""
              />
            </Link>
          </div>

          <div className="hidden group-hover:block absolute mt-[-120px] w-[100%] ">
            <div
              style={{
                backgroundImage:
                  "linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.8))",
                // "linear-gradient(to bottom, rgba(255,0,0,0), rgba(255,0,0,1))",
              }}
              className="  pt-[50px] rounded-b-[8px] h-[120px]"
            >
              <div className="flex justify-between items-center w-[95%] mx-auto">
                <p className="text-[18px] font-bold text-white capitalize">
                  a;lkjasd klhj
                </p>

                <div className="text-[red] flex">
                  <span className="mr-3 bg-white text-gray-700 p-2 rounded-[7px] cursor-pointer">
                    {" "}
                    <AiFillFileAdd className="text-[20px]" />
                  </span>
                  <span className=" bg-white text-gray-700 p-2 rounded-[7px] cursor-pointer">
                    {" "}
                    <FcLike className="text-[20px]" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-[99%] mt-3 mx-auto flex justify-between items-center">
          <div style={{ alignItems: "center" }} className="flex">
            <img
              src="https://i.ibb.co/Vvz1D7w/3-D-Composition-2.webp"
              className="w-[24px] h-[24px] rounded-[50%] mr-2"
              alt=""
            />

            <h1 className="mr-2 text-[14px] font-[500] leading-[20px]">
              Hasmat
            </h1>
            <span className="bg-[#ccc] w-[26px] h-[15px] rounded-[4px] text-[10px]  text-white font-bold">
              Team
            </span>
          </div>

          <div className="flex">
            <span className="mr-3">
              <FcLike />
            </span>
            <span>
              <AiFillEye />
            </span>
          </div>
        </div>
      </div>
    ));
  }

  return (
    <div>
      <div className="grid md:grid-cols-3 gap-x-6 gap-y-8">{content}</div>
    </div>
  );
}

export default LinkedShoot;
