import React from "react";
import { useSelector } from "react-redux";
import { useGetRelatedServicesQuery } from "../../features/services/servicesApi";
import {
  AiTwotoneEdit,
  AiFillDelete,
  AiFillEye,
  AiFillFileAdd,
  AiFillHeart,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import ServiceLodear from "../ui/ServiceLodear";

function Works(props) {
  const { email: user } = useSelector((state) => state?.auth?.user);
  const { data, isLoading, isError } = useGetRelatedServicesQuery(user);

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
    content = (
      <>
        <ServiceLodear />
        <ServiceLodear />
        <ServiceLodear />
        <ServiceLodear />
        <ServiceLodear />
      </>
    );
  }

  if (!isLoading && !isError && data?.data?.length > 0) {
    content = data?.data?.map((service, index) => (
      <div>
        <div className="relative group ">
          <div>
            <Link
              to={`/singleProduct/${service?._id}`}
              //  onClick={() => hanldeWatchCount(service._id)}
            >
              <img
                className=" cursor-pointer rounded-[8px]"
                src={service?.imgUrl}
                alt=""
              />
            </Link>
          </div>

          <div className="hidden group-hover:block absolute mt-[-80px] w-[100%] ">
            <div
              style={{
                backgroundImage:
                  "linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.8))",
                // "linear-gradient(to bottom, rgba(255,0,0,0), rgba(255,0,0,1))",
                borderRadius: "8px",
              }}
              className="  pt-[32px]  h-[80px]"
            >
              <div className="flex justify-between items-center w-[95%] mx-auto">
                <p className="text-[18px] font-bold text-white capitalize">
                  {service?.productName?.slice(0, 18)}
                  {service?.productName?.length >= 18 ? <>...</> : <></>}
                </p>

                <div className=" flex">
                  <span className="mr-3 bg-white text-red-600 p-2 rounded-[7px] cursor-pointer">
                    {" "}
                    <AiFillDelete className="text-[20px]" />
                  </span>
                  <button
                    type="submit"
                    disabled={isLoading}
                    //  onClick={() => handleSubmit(service)}
                    className=" bg-white  p-2 rounded-[7px] cursor-pointer"
                  >
                    {" "}
                    <AiTwotoneEdit
                      className={`text-[20px] text-gray-700 ${
                        "isLiked" ? "text-gray-700 " : " text-gray-700" //isLiked
                      }  `}
                    />
                  </button>
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
            <span className="mr-3 flex items-center  hover:text-[#ea4c89] cursor-pointer">
              <AiFillHeart
                className={` ${
                  "isLiked" ? "text-[#ea4c89] " : " text-[#9e9ea7]" //isLiked
                }  `}
              />
              <span className="text-[#9e9ea7] font-[500] text-[12px] ml-1">
                {" "}
                356
              </span>
            </span>
            <span className="flex items-center  text-[#9e9ea7] cursor-pointer">
              <AiFillEye className="text-[#9e9ea7] hover:text-[#ea4c89]" />
              <span className="text-[#9e9ea7] font-[500] text-[12px] ml-1">
                {" "}
                2345
              </span>
            </span>
          </div>
        </div>
      </div>
    ));
  }

  return (
    <div>
      <div className="grid md:grid-cols-3 gap-4">
        {/*   <div className="w-[100%] py-[38px] px-[20px] border-dashed border-[2px] border-indigo-[#e7e7e9] rounded-[8px] ">
          <div className=" text-center">
            <h1 className="text-[24px] font-[700] leading-[29px] mb-[8px]  ">
              Upload your first shot
            </h1>
            <h4 className="text-[16px] font-[400] leading-[24px] mb-[5%]  ">
              Show off your best work. Get feedback, likes and be a part of a
              growing community.
            </h4>
            <button className="text-[#fff] text-[14px] font-[500] bg-[#ea4c89] h-[40px] py-[10px] px-[16px] rounded-[8px]">
              Upload your first shot
            </button>
          </div>
        </div> */}
        <div className="w-[100%] py-[38px] px-[20px] border-dashed border-[2px] border-indigo-[#e7e7e9] rounded-[8px] ">
          <div className=" text-center mt-0 md:mt-[45px]">
            <h1 className="text-[24px] font-[700] leading-[29px] mb-[8px] md:mb-[18px] ">
              Upload your first shot
            </h1>
            <h4 className="text-[16px] font-[400] leading-[24px] mb-[5%]  ">
              Show off your best work. Get feedback, likes and be a part of a
              growing community.
            </h4>
            <button className="text-[#fff] text-[14px] font-[500] bg-[#ea4c89] h-[40px] py-[10px] px-[16px] rounded-[8px]">
              Upload your first shot
            </button>
          </div>
        </div>
        {content}
        {/* {data?.data?.map((service) => (
          
        ))} */}
      </div>
      <br />
    </div>
  );
}

export default Works;
