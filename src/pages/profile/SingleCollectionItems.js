import React, { memo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiFillEye, AiFillFolderAdd, AiFillHeart } from "react-icons/ai";
import { FcLike } from "react-icons/fc";
import Modal from "react-modal";

import "react-modern-drawer/dist/index.css";
import {
  servicesApi,
  useGetUserLikedServicesQuery,
  useLikePostMutation,
  useLikeSingleServicesMutation,
  useWatchPostMutation,
} from "../../features/services/servicesApi";
import { useDispatch, useSelector } from "react-redux";
import Collection from "../../component/home/services/Collection";

function SingleCollectionItems({ service }) {
  const dispatch = useDispatch();
  const [likesPost, {}] = useLikePostMutation();
  const [watchpost, {}] = useWatchPostMutation();

  const { user } = useSelector((state) => state?.auth);
  const userEmail = user?.email;

  const isLiked = service?.likesUser?.includes(userEmail);
  const isCollection = service?.collection?.includes(userEmail);

  const [LikeSingleServices, { isLoading }] = useLikeSingleServicesMutation();
  const { data } = useGetUserLikedServicesQuery();

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

  const handleSubmit = (data) => {
    const mainData = data;

    LikeSingleServices({
      id: data?._id,
      data: { likesUser: userEmail },
    })
      .unwrap()
      .then((data) => {
        if (data.success) {
          dispatch(
            servicesApi.endpoints.likePost.initiate({
              likerEmail: userEmail,
              productName: mainData?.productName,
              imgUrl: mainData?.imgUrl,
              productMainId: mainData?._id,
              productEmail: mainData?.email,
            })
          );
        }
      });
  };

  const hanldeWatchCount = (id) => {
    watchpost(id);
  };

  return (
    <div>
      <div className="relative group ">
        <div>
          <Link
            to={`/singleProduct/${service?._id}`}
            onClick={() => hanldeWatchCount(service._id)}
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
              borderRadius: "8px",
            }}
            className="  pt-[32px]  h-[80px]"
          >
            <div className="flex justify-between items-center w-[95%] mx-auto">
              <p className="text-[18px] font-bold text-white capitalize">
                {service?.productName?.slice(0, 18)}
                {service?.productName?.length >= 18 ? <>...</> : <></>}
              </p>

              <div className="text-[red] flex">
                <span
                  onClick={openModal}
                  className="mr-3 bg-white text-gray-700 p-2 rounded-[7px] cursor-pointer"
                >
                  {" "}
                  <AiFillFolderAdd
                    className={`text-[20px] ${
                      isCollection ? "text-[#ea4c89] " : " text-gray-700"
                    }  `}
                  />
                </span>
                <button
                  type="submit"
                  disabled={isLoading}
                  onClick={() => handleSubmit(service)}
                  className=" bg-white  p-2 rounded-[7px] cursor-pointer"
                >
                  {" "}
                  <AiFillHeart
                    className={`text-[20px] ${
                      isLiked ? "text-[#ea4c89] " : " text-gray-700"
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

          <h1 className="mr-2 text-[14px] font-[500] leading-[20px]">Hasmat</h1>
          <span className="bg-[#ccc] w-[26px] h-[15px] rounded-[4px] text-[10px]  text-white font-bold">
            Team
          </span>
        </div>

        <div className="flex">
          <span className="mr-3 flex items-center  hover:text-[#ea4c89] cursor-pointer">
            <AiFillHeart
              className={` ${
                isLiked ? "text-[#ea4c89] " : " text-[#9e9ea7]"
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
      <div>
        <Collection
          service={service}
          modalIsOpen={modalIsOpen}
          closeModal={closeModal}
          afterOpenModal={afterOpenModal}
          isCollection={isCollection}
        />
      </div>
    </div>
  );
}

export default memo(SingleCollectionItems);
