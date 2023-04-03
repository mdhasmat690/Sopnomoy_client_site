import React, { memo, useEffect, useState } from "react";
import { TiMessages } from "react-icons/ti";
import Services from "../../component/home/services/Services";
import Modal from "react-modal";
import { useAuth } from "../../contexts/AuthContext";

import Drawer from "react-modern-drawer";

//import styles 👇
import "react-modern-drawer/dist/index.css";
import { BrowserRouter, useParams } from "react-router-dom";
import { useGetSingleServicesQuery } from "../../features/services/servicesApi";
import RelatedService from "../../component/home/services/related/RelatedService";
import ServiceLodear from "../ui/ServiceLodear";
import { useSelector } from "react-redux";
import { useGetUserDataQuery } from "../../features/auth/authApi";
import PopularServices from "../../component/home/services/related/PopularServices";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

function SingleService() {
  const { id } = useParams();
  const { email: user } = useSelector((state) => state?.auth?.user);
  const { data, isError, isLoading } = useGetSingleServicesQuery(id);

  const service = data?.data;
  const { data: userData } = useGetUserDataQuery(service?.email);

  const userInformation = userData?.data;

  const [isOpen, setIsOpen] = React.useState(true);

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  // const parms = useParams();

  let subtitle;

  function afterOpenModal() {
    //  references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  if (isLoading) {
    return (
      <>
        <ServiceLodear />
        <ServiceLodear />
        <ServiceLodear />
        <ServiceLodear />
      </>
    );
  }

  // function closeModal() {
  //   setIsOpen(false);
  // }

  /*   if (!user.emailVerified) {
    return <>Please Verify your email</>;
  }
 */
  return (
    <>
      {/*   <Drawer
      open={isOpen}
      onClose={toggleDrawer}
      direction="bottom"
      size={"95%"}
      className="bla bla bla "
      style={{ overflow: "auto" }}
    >
     </Drawer> */}
      <div className="border-t border-indigo-[#f3f3f4] w-[100%]  mb-5"></div>
      <div className="flex items-center justify-evenly md:flex-wrap">
        <div className="flex">
          {" "}
          {userInformation?.image ? (
            <img
              src={userInformation?.image}
              alt="logo"
              className="md:cursor-pointer h-[48px] w-[48px] rounded-[50%]"
            />
          ) : (
            <img
              src="https://cdn-icons-png.flaticon.com/128/3177/3177440.png"
              alt="logo"
              className="md:cursor-pointer h-[48px] w-[48px] rounded-[50%]"
            />
          )}
          <div className="ml-5">
            <h1 className="text-[17px] font-[500] leading-[22px]">
              {service?.productName}
            </h1>
            <div className="flex justify-evenly md:flex-wrap">
              <h1 className="text-[#3d3d4e] text-[14] font-[400] leading-[20px]">
                {service?.agencyName}
              </h1>
              <h1 className="text-[#3d3d4e] ml-5">• Follow</h1>
              <h1
                // onClick={openModal}
                className="ml-5 text-[#ea4c89] font-[400] hover:text-[#f082ac] cursor-pointer"
              >
                • Hire Me
              </h1>
            </div>
          </div>
        </div>

        <div className="py-2">
          <button className="my-2 mr-5 bg-[#f3f3f4] hover:bg-[#e7e7e9] h-[40px] w-[70px] rounded-[8px] text-[14px] font-[500] leading-[20px] mx-auto">
            Save
          </button>
          <button className=" bg-[#ea4c89] hover:bg-[#f082ac] h-[40px] w-[70px] rounded-[8px] text-[14px] font-[500] leading-[20px] mx-auto">
            Like
          </button>
        </div>
      </div>

      <div className="w-[80%] mx-auto">
        <img
          src={service?.imgUrl}
          className="md:cursor-pointer h-[100%] w-[100%] rounded-[2%] mt-4"
          alt=""
        />
        <div>
          <h1 className="font-[400] text-[20px] mt-9 ml-10">
            Artist:{" "}
            <span className=" text-[#ea4c89] font-[400] hover:text-[#f082ac]">
              {service?.artist}
            </span>
          </h1>
          <div className="w-[67%] mx-auto">
            <h1 className="text-[20px] font-[400] leading-[32px] my-8">
              {service?.Tittle}
            </h1>
            <h2 className="text-[20px] font-[400] leading-[32px] my-8">
              {service?.description}
            </h2>
            <h1 className="text-[20px] font-[400] leading-[32px] my-8">
              {service?.Details}
            </h1>
            <h1 className="text-[20px] font-[400] leading-[32px] my-8">
              ________
            </h1>
            <h1 className="text-[20px] font-[400] leading-[32px]  my-1">
              {service?.contact}
            </h1>
            <h1 className="text-[20px] font-[400] leading-[32px] mb-8 text-[#ea4c89]">
              {service?.email}
            </h1>
            <h2 className="text-[20px] font-[400] leading-[32px] text-[#ea4c89]">
              {service?.link}
            </h2>
          </div>

          <div className=" flex justify-center  items-center mt-16">
            <div className="border-t-2 border-indigo-[#f3f3f4] w-[50%]"></div>
            <div>
              <img
                src="https://i.ibb.co/z8S8RST/about.jpg"
                alt="logo"
                className="md:cursor-pointer h-[48px] w-[48px] rounded-[50%] mx-3 "
              />
            </div>
            <div className="border-t-2 border-indigo-[#f3f3f4] w-[50%]"></div>
          </div>
        </div>

        <div>
          <h1 className="text-[20px] font-[500] leading-[30px] text-center mt-10">
            {" "}
            {service?.agencyName}
          </h1>
          <h2 className="text-[#3d3d4e] text-center mb-3 mt-1">
            Representing exceptional artists around the world.
          </h2>
          <button className="text-white bg-[#ea4c89] hover:bg-[#f082ac] h-[40px] w-[100px] rounded-[8px] text-[14px] font-[500] leading-[20px] mx-auto flex items-center p-1">
            <span className="mr-3 text-[19px]">
              <TiMessages />
            </span>
            Hire Me
          </button>
        </div>
      </div>

      <div>
        <div className="flex ite justify-between w-[88%] mx-auto mt-10">
          <h1 className="text-[16px] font-[700] leading-[24px]">
            More by {service?.agencyName}
          </h1>

          <h2 className=" text-[#ea4c89] font-[400] hover:text-[#f082ac]">
            {" "}
            View profile
          </h2>
        </div>
        <div className="mt-3">
          <RelatedService email={service?.email} />
        </div>

        <div>
          <div className="border-t-2 border-indigo-[#f3f3f4] w-[100%] mt-5"></div>
          <div className="flex ite justify-between w-[88%] mx-auto mt-10">
            <h1 className="text-[16px] font-[700] leading-[24px] mt-16">
              You might also like
            </h1>
          </div>

          <div className="my-3">
            <PopularServices />
          </div>
          <br />
          <br />
        </div>
      </div>
    </>
  );
}

export default memo(SingleService);
