import React from "react";
import {
  AiFillEye,
  AiFillFacebook,
  AiFillFolderAdd,
  AiFillHeart,
  AiOutlineLink,
  AiOutlineTwitter,
} from "react-icons/ai";
import Collection from "../../component/home/services/Collection";
import { useParams } from "react-router-dom";
import { useGetSingleCollectionsQuery } from "../../features/collection.api/collectionApi";
import { useGetUserDataQuery } from "../../features/auth/authApi";

function CollectionItem() {
  const { id } = useParams();
  const { data } = useGetSingleCollectionsQuery(id);
  const mainCollections = data?.data;
  const { data: userInfo } = useGetUserDataQuery(
    mainCollections?.loginUserEmail
  );
  console.log(mainCollections?.collections);
  return (
    <>
      <hr />
      <div className="w-[90%] mx-auto my-10">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h1 className="text-[45px] font-[700] leading-[56px] pb-4">
              {mainCollections?.collectionName}
            </h1>
            <h5 className="text-[14px] font-[400] leading-[20px] text-[#3d3d4e]">
              {mainCollections?.collections?.length} Shots •{" "}
              {mainCollections?.collections?.length} Designers
            </h5>
            <h5 className="text-[14px] font-[400] leading-[20px] text-[#6e6d7a] my-3">
              {mainCollections?.collectionNameDescripction}
            </h5>
            <div className="flex">
              <img
                className="h-[24px] w-[24px] rounded-[50%]"
                src={userInfo?.data?.image}
                alt=""
              />
              <h5 className="text-[16px] font-bold leading-[22px] text-black ml-3">
                {userInfo?.data?.displayName}
              </h5>
            </div>
          </div>
          <div className="flex flex-col-reverse md:flex-col">
            <div className="flex justify-end mt-5 md:mt-0">
              <div>
                {" "}
                <button className="bg-[#f3f3f4]  w-[95px] p-2 rounded-md mr-5 flex items-center font-[500] ">
                  {" "}
                  <span className="text-[#1da1f2] mr-2">
                    <AiFillFacebook />
                  </span>
                  Share
                </button>
              </div>
              <div>
                {" "}
                <button className="  bg-[#f3f3f4]   w-[95px] p-2 rounded-md mr-5 flex items-center font-[500]">
                  {" "}
                  <span className="text-[#1da1f2] mr-2">
                    <AiOutlineTwitter />
                  </span>
                  Tweet
                </button>
              </div>

              <div>
                {" "}
                <button className="bg-[#f3f3f4]  w-[95px] p-2 rounded-md mr-5 flex items-center font-[500]">
                  {" "}
                  <span className="text-[#6e6d7a] mr-2">
                    <AiOutlineLink />
                  </span>
                  Share
                </button>
              </div>
            </div>

            <div className="flex md:justify-end md:mr-10">
              <div>
                <button className="text-[black] text-[14px] font-[500] border border-indigo-[#f3f3f4] h-[40px] py-[10px] px-[16px] rounded-[8px] mt-0 md:mt-28">
                  Edit Collection
                </button>
                <button className="text-[black] text-[14px] font-[500] border border-indigo-[#f3f3f4] h-[40px] py-[10px] px-[16px] rounded-[8px] ml-5">
                  Delete Collection
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          {/* <div className="relative group ">
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
        />
      </div> */}
        </div>
      </div>
    </>
  );
}

export default CollectionItem;
