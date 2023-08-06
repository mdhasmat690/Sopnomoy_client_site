import React, { memo, useState } from "react";
import { TiMessages } from "react-icons/ti";
import "react-modern-drawer/dist/index.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  servicesApi,
  useGetSingleServicesQuery,
  useLikeSingleServicesMutation,
} from "../../features/services/servicesApi";
import RelatedService from "../../component/home/services/related/RelatedService";
import { useDispatch, useSelector } from "react-redux";
import { useGetUserDataQuery } from "../../features/auth/authApi";
import PopularServices from "../../component/home/services/related/PopularServices";
import { AiFillHeart } from "react-icons/ai";
import Collection from "../../component/home/services/Collection";
import SingleServicesLoder from "../ui/SingleServicesLoder";
import MessagePopUp from "./MessagePopUp";
import { Vortex } from "react-loader-spinner";

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

  const { data, isLoading } = useGetSingleServicesQuery(id);
  const [LikeSingleServices, { isLoading: likeIsloading }] =
    useLikeSingleServicesMutation();

  const service = data?.data;
  const dispatch = useDispatch();
  const [modalIsOpenSave, setIsOpenSave] = useState(false);
  const { data: serviceUserInto } = useGetUserDataQuery(service?.email);
  const servicesUserInfo = serviceUserInto?.data;
  const isLiked = service?.likesUser?.includes(user);
  const isCollection = service?.collection?.includes(user);
  const { data: userData } = useGetUserDataQuery(service?.email);
  const userInformation = userData?.data;
  const navigate = useNavigate();
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    if (!user) {
      return navigate("/signUp");
    }
    setIsOpen(true);
  }
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = "#f00";
  }
  function closeModal() {
    setIsOpen(false);
  }

  /* collection modal */

  function openModalSave() {
    if (!user) {
      return navigate("/signUp");
    }
    setIsOpenSave(true);
  }

  function afterOpenModalSave() {}

  function closeModalSave() {
    setIsOpenSave(false);
  }

  /*  */

  if (isLoading) {
    return (
      <>
        <SingleServicesLoder />
      </>
    );
  }

  /* like product */
  const handleLikeSubmit = (data) => {
    if (!user) {
      return navigate("/signUp");
    }
    const mainData = data;

    LikeSingleServices({
      id: data?._id,
      data: { likesUser: user },
    })
      .unwrap()
      .then((data) => {
        if (data.success) {
          dispatch(
            servicesApi.endpoints.likePost.initiate({
              likerEmail: user,
              productName: mainData?.productName,
              imgUrl: mainData?.imgUrl,
              productMainId: mainData?._id,
              productEmail: mainData?.email,
            })
          );
        }
      });
  };

  return (
    <>
      <div>
        <MessagePopUp
          modalIsOpen={modalIsOpen}
          afterOpenModal={afterOpenModal}
          closeModal={closeModal}
          customStyles={customStyles}
          servicesUserInfo={servicesUserInfo}
        />
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
            <h1 className="text-[17px] font-[500] leading-[22px] ">
              {service?.productName}
            </h1>
            <div className="flex justify-evenly md:flex-wrap">
              <h1 className="text-[#3d3d4e] text-[14] font-[400] leading-[20px] flex justify-center items-center">
                {servicesUserInfo?.displayName}
              </h1>
              <h1 className="text-[#3d3d4e] ml-5 md:block hidden">• Follow</h1>
              <h1
                onClick={openModal}
                className="ml-5 text-[#ea4c89] font-[400] hover:text-[#f082ac] cursor-pointer md:block hidden"
              >
                • Hire Me
              </h1>
            </div>
          </div>
        </div>

        <div className="py-2">
          <button
            onClick={openModalSave}
            className={`${
              isCollection ? "bg-[#fef6f9] text-[#ea4c89]" : "bg-[#f3f3f4]"
            } my-2 mr-3  hover:bg-[#e7e7e9] h-[40px] w-[70px] rounded-[8px] text-[14px] font-[500] leading-[20px] mx-auto`}
          >
            Save
          </button>

          <button
            disabled={likeIsloading}
            onClick={() => handleLikeSubmit(service)}
            className={`${
              isLiked
                ? "bg-white border border-[#ea4c89] hover:bg-white"
                : "bg-[#ea4c89]  "
            } text-white hover:bg-[#f082ac] h-[40px] w-[70px] rounded-[8px] text-[14px] font-[500] leading-[20px] mx-auto`}
          >
            <span className="flex justify-center items-center">
              {likeIsloading ? (
                <Vortex
                  visible={true}
                  height="20"
                  width="20"
                  ariaLabel="vortex-loading"
                  wrapperStyle={{}}
                  wrapperClass="vortex-wrapper"
                  colors={[
                    "red",
                    "green",
                    "blue",
                    "yellow",
                    "orange",
                    "purple",
                  ]}
                />
              ) : (
                <AiFillHeart
                  className={`${isLiked ? "text-[#ea4c89]" : "text-[white]"}  `}
                />
              )}

              {isLiked ? (
                <>
                  <span className="ml-2 text-[#ea4c89] ">
                    {service?.likesUser?.length}
                  </span>
                </>
              ) : (
                <>
                  <span className="ml-2 text-[white]">like</span>
                </>
              )}
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
          <div className="md:w-[67%] w-[90%] mx-auto">
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
              <div></div>
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
              <Link to={`/agency/${servicesUserInfo?.email}`}>
                {servicesUserInfo?.image ? (
                  <img
                    src={servicesUserInfo?.image}
                    alt="logo"
                    className="md:cursor-pointer h-[48px] w-[48px] rounded-[50%] mx-3 "
                  />
                ) : (
                  <>
                    <img
                      src="https://cdn-icons-png.flaticon.com/128/3177/3177440.png"
                      alt="logo"
                      className="md:cursor-pointer h-[48px] w-[48px] rounded-[50%] mx-3 "
                    />
                  </>
                )}
              </Link>
            </div>
            <div className="border-t-2 border-indigo-[#f3f3f4] w-[50%]"></div>
          </div>
        </div>

        <div>
          <h1 className="text-[20px] font-[500] leading-[30px] text-center mt-10">
            {" "}
            {servicesUserInfo?.displayName}
          </h1>
          <h2 className="text-[#3d3d4e] text-center mb-3 mt-1">
            Representing exceptional artists around the world.
          </h2>
          <button
            onClick={openModal}
            className="text-white bg-[#ea4c89] hover:bg-[#f082ac] h-[40px] w-[100px] rounded-[8px] text-[14px] font-[500] leading-[20px] mx-auto flex items-center p-1"
          >
            <span className="ml-1 mr-3 text-[19px]">
              <TiMessages />
            </span>
            Hire Me
          </button>
        </div>
      </div>

      <div>
        <div className="flex ite justify-between w-[88%] mx-auto mt-10">
          <h1 className="text-[16px] font-[700] leading-[24px]">
            More by {servicesUserInfo?.displayName}
          </h1>

          <h2 className=" text-[#ea4c89] font-[400] hover:text-[#f082ac]">
            {" "}
            <Link to={`/agency/${servicesUserInfo?.email}`}>View profile</Link>
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
      <div>
        <Collection
          service={service}
          modalIsOpen={modalIsOpenSave}
          closeModal={closeModalSave}
          afterOpenModal={afterOpenModalSave}
        />
      </div>
    </>
  );
}

export default memo(SingleService);
