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
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  useDeleteCollectionNameMutation,
  useGetSingleCollectionsQuery,
  useGetSingleCollectionsitemsQuery,
  useUpdateCollectionNameMutation,
} from "../../features/collection.api/collectionApi";
import { useGetUserDataQuery } from "../../features/auth/authApi";
import ServiceLodear from "../ui/ServiceLodear";
import ServiceItem from "../../component/home/services/ServiceItem";
import SingleCollectionItems from "./SingleCollectionItems";
import Modal from "react-modal";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { servicesApi } from "../../features/services/servicesApi";

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

function CollectionItem() {
  const { id } = useParams();
  const { data, refetch } = useGetSingleCollectionsQuery(id);
  const mainCollections = data?.data;
  const { data: userInfo } = useGetUserDataQuery(
    mainCollections?.loginUserEmail
  );
  const {
    data: collectionItem,
    isLoading,
    isError,
  } = useGetSingleCollectionsitemsQuery(id);
  const dispatch = useDispatch();

  const [updateCollectionName, {}] = useUpdateCollectionNameMutation();

  const [deleteCollection, { isSuccess }] = useDeleteCollectionNameMutation();
  const navigate = useNavigate();
  const {
    register,
    formState,
    handleSubmit,
    setFocus,
    control,
    reset,
    formState: { isSubmitting, isDirty, isValid },
  } = useForm({ mode: "onChange" });

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

  if (!isLoading && isError) {
    content = (
      <>
        <ServiceLodear />
        <ServiceLodear />
        <ServiceLodear />
        <ServiceLodear />
        <ServiceLodear />
        <ServiceLodear />
        <ServiceLodear />
      </>
    );
  }

  if (!isLoading && !isError && collectionItem?.newData?.length === 0) {
    content = (
      <h3 className="text-red-500 font-medium">
        No Collection yet!!{" "}
        <Link to="/">
          <span className="font-bold underline text-green-500 cursor-pointer">
            Click
          </span>{" "}
        </Link>
      </h3>
    );
  }

  if (!isLoading && !isError && collectionItem?.newData?.length > 0) {
    content = collectionItem?.newData?.map((service, index) => (
      <SingleCollectionItems key={index} service={service} />
    ));
  }

  const onSubmit = (e) => {
    const data = {
      // loginUserEmail: userEmail,
      collectionName: e.collectionName,
      collectionNameDescripction: e.desc,
      // name: service?.productName,
      // image: service?.imgUrl,
      // mainServiceId: service._id,
      timestamp: new Date().getTime(),
    };

    updateCollectionName({ id, data })
      .unwrap()
      .then((data) => refetch(data.id));
    reset();
    // setToggle(false);
  };

  const handleDelete = (id) => {
    const objId = id?.collections?.map((data) => data?.mainServiceId);

    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteCollection(id?._id)
          .unwrap()
          .then((data) => {
            if (data.success) {
              dispatch(
                servicesApi.endpoints.updateServiceCollection.initiate({
                  ids: objId,
                  data: { collection: id?.loginUserEmail },
                })
              );
            }
          });
      }
    });
  };

  if (isSuccess) {
    navigate("/profile/collection");
  }

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
                <button
                  onClick={openModal}
                  className="text-[black] text-[14px] font-[500] border border-indigo-[#f3f3f4] h-[40px] py-[10px] px-[16px] rounded-[8px] mt-0 md:mt-28"
                >
                  Edit Collection
                </button>
                <button
                  onClick={() => handleDelete(mainCollections)}
                  className="text-[black] text-[14px] font-[500] border border-indigo-[#f3f3f4] h-[40px] py-[10px] px-[16px] rounded-[8px] ml-5"
                >
                  Delete Collection
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <br />
          <div className="grid md:grid-cols-3 gap-10">{content}</div>
        </div>
      </div>

      <div>
        <Modal
          isOpen={modalIsOpen}
          // onAfterOpen={afterOpenModal}
          ariaHideApp={false}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <>
            {" "}
            <div className="px-[40px]">
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
                        defaultValue={mainCollections?.collectionName || ""}
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
                        defaultValue={
                          mainCollections?.collectionNameDescripction || ""
                        }
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
        </Modal>
      </div>
    </>
  );
}

export default CollectionItem;
