import React, { memo, useEffect, useState } from "react";
import { TiMessages } from "react-icons/ti";
import { GrFormClose } from "react-icons/gr";
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
import { useForm } from "react-hook-form";
import { AiFillHeart, AiOutlineClose } from "react-icons/ai";
import { IoIosClose } from "react-icons/io";
import {
  useAddConversationMutation,
  useConversionQuery,
  useEditConversationMutation,
} from "../../features/conversions/converionsApi";

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "10px",
  },
};

function SingleService() {
  const { id } = useParams();
  const { email: user } = useSelector((state) => state?.auth?.user);

  const { data, isError, isLoading } = useGetSingleServicesQuery(id);

  const [addconversion, { isLoading: conversionLoading }] =
    useAddConversationMutation();

  const [editConversation, {}] = useEditConversationMutation();

  const service = data?.data;
  const { data: loginUserData } = useGetUserDataQuery(user);
  const loginUser = loginUserData?.data;
  console.log(service);

  const { data: userData } = useGetUserDataQuery(service?.email);
  const servicesUser = userData?.data;

  const { data: conversionData, refetch } = useConversionQuery({
    user: loginUser?.email,
    serviceUser: servicesUser?.email,
  });

  const {
    register,
    formState,
    handleSubmit,
    setFocus,
    control,
    reset,
    formState: { isSubmitting, isDirty, isValid },
  } = useForm({ mode: "onChange" });

  const userInformation = userData?.data;

  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  if (isLoading) {
    return (
      <>
        <div className="w-[60%] mx-auto animate-pulse my-14">
          <div className="flex flex-row mt-2 gap-2 items-center">
            <div className="bg-slate-200 rounded-full h-8 w-8 shrink-0" />

            <div className="flex flex-col space-y-1 grow">
              <p className="bg-slate-200 text-slate-200 text-[8px]">
                Loading...
              </p>
              <p className="bg-slate-200 text-slate-200 w-[20%] text-[8px]">
                Loading...
              </p>
            </div>
          </div>
          <br />
          <div className="relative">
            <div className="aspect-video bg-slate-200" />
          </div>
          <div>
            <br />
            <h1 className="bg-slate-200 text-slate-200 w-[75%] mx-auto text-[8px] my-2">
              Loading...
            </h1>
            <h1 className="bg-slate-200 text-slate-200 w-[75%] mx-auto text-[8px] my-2">
              Loading...
            </h1>
            <h1 className="bg-slate-200 text-slate-200 w-[75%] mx-auto text-[8px] my-2">
              Loading...
            </h1>
            <h1 className="bg-slate-200 text-slate-200 w-[75%] mx-auto text-[8px] my-2">
              Loading...
            </h1>
            <h1 className="bg-slate-200 text-slate-200 w-[75%] mx-auto text-[8px] my-2">
              Loading...
            </h1>
          </div>
        </div>
      </>
    );
  }

  const onSubmit = (message) => {
    if (loginUser?.email && servicesUser?.email) {
      if (conversionData?.result.length > 0) {
        console.log("edit post");
        editConversation({
          id: conversionData?.result[0]?._id,
          sender: loginUser,
          data: {
            participants: `${loginUser?.email}-${servicesUser?.email}`,
            users: [loginUser, servicesUser],
            message: message?.message,
            timestamp: new Date().getTime(),
          },
        });
      } else if (conversionData?.result.length === 0) {
        console.log("test case");
        addconversion({
          sender: loginUser,
          data: {
            participants: `${loginUser?.email}-${servicesUser?.email}`,
            users: [loginUser, servicesUser],
            message: message?.message,
            timestamp: new Date().getTime(),
          },
        })
          .unwrap()
          .then((data) => {
            if (data?.id) {
              refetch({
                user: loginUser?.email,
                serviceUser: servicesUser?.email,
              });
            }
          })
          .catch((error) => console.log(error));
      }
      reset();
    } else {
      console.log(
        "there was a Problem please agin latter or refresh this page"
      );
    }
  };

  return (
    <>
      <div>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div className="rounded-[10px]">
            <button className="w-[100%] flex  justify-end" onClick={closeModal}>
              <span className="text-[#9e9ea7] hover:text-[#ea4c89] hover:rounded-md text-[20px]">
                <AiOutlineClose />
              </span>
            </button>
            <div>
              <div className="my-2 p-4">
                <div className="flex items-center">
                  <img
                    src="https://i.ibb.co/LtBvpbr/IMG20211124101014.jpg"
                    alt=""
                    className=" h-[50px] w-[50px] rounded-[50%]"
                  />
                  <h1 className="ml-3 text-[24px] font-[700] leading-[29px]  ">
                    Message Design Squad
                  </h1>
                </div>
              </div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="sm:w-[400px] md:w-[520px] p-3">
                  <textarea
                    className="bg-[#f3f3f4] outline-none rounded-[10px] focus:shadow-[0px_0px_2px_4px_rgba(234,76,137,0.24)] border-solid  focus:bg-white p-2 w-[100%] h-[110px] text-[14px] font-[400] leading-[28px] hover:shadow-[0px_0px_2px_4px_rgba(234,76,137,0.24)] hover:bg-white"
                    {...register("message")}
                    required
                    placeholder="Start a conversation with Design Squad"
                  />

                  <div className=" w-[100%] flex items-center justify-end ">
                    <button className="my-2 mr-5 bg-[#f3f3f4] hover:bg-[#e7e7e9] h-[40px] w-[70px] rounded-[8px] text-[14px] font-[500] leading-[20px] ">
                      Cancel
                    </button>
                    <button
                      className={`bg-[#ea4c89] hover:bg-[#f082ac] h-[40px] w-[70px] rounded-[8px] text-[14px] font-[500] leading-[20px]  ${
                        !isDirty || !isValid ? "cursor-not-allowed" : "null"
                      }`}
                      type="submit"
                      disabled={!formState.isValid}
                    >
                      Send
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </Modal>
      </div>

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
                onClick={openModal}
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
          <button className=" bg-[#ea4c89] text-white hover:bg-[#f082ac] h-[40px] w-[70px] rounded-[8px] text-[14px] font-[500] leading-[20px] mx-auto">
            <span className="flex justify-center items-center">
              <AiFillHeart className={`text-white `} />
              <span className="ml-2">Like</span>
            </span>
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
            <h1 className="text-[20px] font-bold leading-[32px] my-8">
              {service?.Tittle}
            </h1>
            <div>
              <h2
                style={{ whiteSpace: "pre-line" }}
                className="text-[20px] font-[400] leading-[32px] my-8"
              >
                {service?.description}
              </h2>
              <div>
                {/* {service?.description?.split("\n").map((line, index) => (
                  <h2
                    className="text-[20px] font-[400] leading-[32px] my-8"
                    key={index}
                  >
                    {line}
                  </h2>
                ))} */}
              </div>
            </div>
            <h1
              style={{ whiteSpace: "pre-line" }}
              className="text-[20px] font-[400] leading-[32px] my-8"
            >
              {service?.Details}
            </h1>
            <h1 className="text-[20px] font-[400] leading-[32px] my-8">
              ________
            </h1>
            <h1
              style={{ whiteSpace: "pre-line" }}
              className="text-[20px] font-[400] leading-[32px]  my-1"
            >
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
