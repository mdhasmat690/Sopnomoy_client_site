import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Modal from "react-modal";
import {
  servicesApi,
  useCreateCollectionMutation,
  useLikeSingleServicesMutation,
} from "../../../features/services/servicesApi";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment/moment";
import {
  useGetCollectionsQuery,
  useUpdateCollectionMutation,
} from "../../../features/collection.api/collectionApi";
import { AiOutlineCheck, AiOutlineMinus } from "react-icons/ai";
const customStyles = {
  overlay: {
    backgroundColor: "rgba(30,30,30,0.9)",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "10px",
    overflow: "auto",
    WebkitOverflowScrolling: "touch",
    outline: "none",
    padding: "20px",
    with: "50px",
  },
};

function Collection({ service, modalIsOpen, closeModal, afterOpenModal }) {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state?.auth);
  const userEmail = user?.email;
  const [createCollection, { isLoading }] = useCreateCollectionMutation();
  const [updateCollection, { isSuccess, data: updatedData }] =
    useUpdateCollectionMutation();
  const [LikeSingleServices, {}] = useLikeSingleServicesMutation();
  const { data, isError } = useGetCollectionsQuery(userEmail);
  const [toggle, setToggle] = useState(false);

  const {
    register,
    formState,
    handleSubmit,
    setFocus,
    control,
    reset,
    formState: { isSubmitting, isDirty, isValid },
  } = useForm({ mode: "onChange" });

  const onSubmit = (e) => {
    const data = {
      loginUserEmail: userEmail,
      collectionName: e.collectionName,
      collectionNameDescripction: e.desc,
      name: service?.productName,
      image: service?.imgUrl,
      mainServiceId: service._id,
      timestamp: new Date().getTime(),
    };
    createCollection(data)
      .unwrap()
      .then((data) => {
        if (data.success) {
          dispatch(
            servicesApi.endpoints.likeSingleServices.initiate({
              id: service._id,
              data: { collection: userEmail },
            })
          );
        }
      });
    reset();
    setToggle(false);
  };
  const handleUpdte = (colection) => {
    const data = {
      loginUserEmail: userEmail,
      collectionName: colection.collectionName,
      collectionNameDescripction: colection.desc,
      name: service?.productName,
      image: service?.imgUrl,
      mainServiceId: service._id,
    };

    updateCollection({
      id: colection?._id,
      data: data,
    })
      .unwrap()
      .then((data) => {
        if (data.success) {
          dispatch(
            servicesApi.endpoints.likeSingleServices.initiate({
              id: service._id,
              data: { collection: userEmail },
            })
          );
        }
      });

    /*   LikeSingleServices({
      id: service._id,
      data: { collection: userEmail },
    }); */
  };

  useEffect(() => {
    setToggle(false);
  }, []);

  let content = null;

  if (isLoading) {
    return <>Loading</>;
  }

  if (!isLoading && !isError && data?.data?.length === 0) {
    content = <>No videos found!</>;
  }

  if (!isLoading && !isError && data?.data?.length > 0) {
    content = data?.data
      ?.slice()
      ?.sort((a, b) => b.timestamp - a.timestamp)
      ?.map((colection, index) => (
        <li
          onClick={() => handleUpdte(colection)}
          key={index}
          className={`flex   items-center border border-indigo-[#ccc] rounded-[10px] p-2  mb-2 cursor-pointer group ${
            colection?._id === updatedData?.id && isSuccess
              ? "bg-[#ea4c89] text-white"
              : "hover:bg-[#ededed]"
          }`}
        >
          <img
            src={colection?.image}
            alt=""
            className={`w-[21%] h-[60px] ${
              colection?._id === updatedData?.id &&
              isSuccess &&
              "bg-[#ea4c89] opacity-75"
            }  `}
          />
          <div className="ml-2 flex justify-between items-center w-[100%]">
            <div>
              {" "}
              <h1
                className={`text-[15px] font-bold leading-[1.4] ${
                  colection?._id === updatedData?.id &&
                  isSuccess &&
                  " text-white"
                }`}
              >
                {colection?.collectionName}
              </h1>
              <h2
                className={`text-[12px] text-[#6e6d7a] ${
                  colection?._id === updatedData?.id &&
                  isSuccess &&
                  " text-white"
                }`}
              >
                {colection?.collections?.length} Shots
              </h2>
              <h2
                className={`text-[12px] text-[#6e6d7a] ${
                  colection?._id === updatedData?.id &&
                  isSuccess &&
                  " text-white"
                }`}
              >
                {" "}
                updated {moment(colection?.timestamp).fromNow()}
              </h2>
            </div>
            <div className="mr-8 ">
              {colection?._id === updatedData?.id && isSuccess && (
                <>
                  <button className="text-[25px] block group-hover:hidden font-extrabold bg-[#b23a68] rounded-sm text-white">
                    <AiOutlineCheck />
                  </button>
                  <button className="text-[25px] hidden group-hover:block font-extrabold bg-[#b23a68] rounded-sm text-white">
                    <AiOutlineMinus />
                  </button>
                </>
              )}
            </div>
          </div>

          {/* <div>
         
        </div> */}
        </li>
      ));
  }

  return (
    <div className=" ">
      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        ariaHideApp={false}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {toggle || data?.data?.length === 0 ? (
          <>
            {" "}
            <div className="px-[40px]">
              {/* <button className="w-[100%] flex  justify-end" onClick={closeModal}>
            <span className="text-[#9e9ea7] hover:text-[#ea4c89] hover:rounded-md text-[20px]">
              <AiOutlineClose />
            </span>
          </button> */}
              <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="sm:w-[400px] md:w-[550px] p-3">
                    <div>
                      <h1 className="text-[16px] font-[500] text-[#0d0c22]">
                        Create a new collection
                      </h1>
                      <div className="border-t-[1px] border-[#ddd] w-[100%] my-2 pb-3"></div>
                    </div>

                    <div className="my-6">
                      <label className="font-[500] text-[16px] text-[#0d0c22]">
                        Name
                      </label>
                      <input
                        className="bg-[#f3f3f4] outline-none rounded-[6px] mt-2 focus:shadow-[0px_0px_2px_4px_rgba(234,76,137,0.24)]  border-solid   focus:bg-white p-2 w-[100%]"
                        {...register("collectionName")}
                        required
                      />
                    </div>

                    <div>
                      <label className="font-[500] text-[16px] text-[#0d0c22]">
                        Description (optional)
                      </label>
                      <textarea
                        className="bg-[#f3f3f4] outline-none rounded-[10px] mt-2 focus:shadow-[0px_0px_2px_4px_rgba(234,76,137,0.24)] border-solid  focus:bg-white p-2 w-[100%] h-[110px] text-[14px] font-[400] leading-[28px] hover:shadow-[0px_0px_2px_4px_rgba(234,76,137,0.24)] hover:bg-white"
                        {...register("desc")}
                        required
                        placeholder="Start a conversation with Design Squad"
                      />
                    </div>

                    <div className=" w-[100%] flex items-center justify-start mt-2">
                      <button
                        className="my-2 mr-5 bg-[#ea4c89] hover:bg-[#f082ac]
                        text-white h-[40px] w-[80%] md:w-[30%] rounded-[8px]
                        text-[14px] font-[500] leading-[20px] cursor-pointer"
                        type="submit"
                        // disabled={isLoading}
                      >
                        Create Collection
                      </button>

                      <button
                        className="text-center items-center  my-2 mr-5 bg-[#f3f3f4] hover:bg-[#e7e7e9] h-[40px] w-[70px] rounded-[8px] text-[14px] font-[500] leading-[20px] cursor-pointer"
                        type="button"
                        onClick={closeModal}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </>
        ) : (
          <>
            {" "}
            <div className="px-[7px] md:px-[40px]">
              {/* <button className="w-[100%] flex  justify-end" onClick={closeModal}>
            <span className="text-[#9e9ea7] hover:text-[#ea4c89] hover:rounded-md text-[20px]">
              <AiOutlineClose />
            </span>
          </button> */}
              <div>
                <div className="sm:w-[40px] md:w-[550px] p-3">
                  <div>
                    <h1 className="text-[16px] font-[500] text-[#0d0c22]">
                      Add this Shot to a collection
                    </h1>
                    <div className="border-t-[1px] border-[#ddd] w-[100%] mt-2 pb-3"></div>
                  </div>

                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="">
                      <input
                        className="bg-[#f3f3f4] outline-none rounded-[6px]  focus:shadow-[0px_0px_2px_4px_rgba(234,76,137,0.24)]  border-solid   focus:bg-white p-2 w-[100%]"
                        {...register("collectionName")}
                        required
                      />
                    </div>
                  </form>

                  {/* <div  className="h-[300px] w-[100%] overflow-y-scroll -ms-overflow-style:none scrollbar-width: none"> */}
                  <div className="whitespace-nowrap overflow-auto scrollbar-hide w-[100%] h-[300px] py-4">
                    <ul className="min-h-[68px] flex flex-col">{content}</ul>
                  </div>

                  <div className=" w-[100%] flex items-center justify-between mt-10">
                    <button
                      className="text-center items-center  my-2  bg-[#ea4c89] hover:bg-[#f082ac] text-white  h-[40px] w-[70px] rounded-[8px] text-[14px] font-[500] leading-[20px] cursor-pointer"
                      type="button"
                      onClick={closeModal}
                    >
                      Done
                    </button>
                    <input
                      className="my-2    border-[1px]  text-[#0d0c22] h-[40px] w-[70%] md:w-[38%] rounded-[8px] text-[14px] font-[500] leading-[20px] cursor-pointer"
                      value="  Create a new Collection"
                      type="submit"
                      name="commit"
                      onClick={() => setToggle(true)}
                      disabled={isLoading}
                    />
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </Modal>
    </div>
  );
}

export default Collection;
