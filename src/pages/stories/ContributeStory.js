import React from "react";
import Modal from "react-modal";
import { AiFillDelete } from "react-icons/ai";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useGetUserDataQuery } from "../../features/auth/authApi";
import { useEffect } from "react";
import {
  useDeleteBlogMutation,
  useGetBlogEmailQuery,
  usePostBlogMutation,
} from "../../features/blog/blogApi";
import Swal from "sweetalert2";
import moment from "moment/moment";

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

function ContributeStory({ service, modalIsOpen, closeModal, afterOpenModal }) {
  const { email } = useSelector((state) => state?.auth?.user);

  const { data: user } = useGetUserDataQuery(email);
  const { data: getBlog } = useGetBlogEmailQuery(user?.data?.email);
  console.log(getBlog);
  const [postBlog, { isLoading, isSuccess }] = usePostBlogMutation();

  const [deleteBlog, { isSuccess: deleteSuccess, isLoading: deleteIsloading }] =
    useDeleteBlogMutation();

  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
    reset,
  } = useForm();

  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleString();

  const time = new Date().getTime();

  const onSubmit = (data) => {
    data.time = time;
    data.email = user?.data?.email;
    postBlog(data);
    reset();
  };

  const handleDelete = (e) => {
    deleteBlog(e);
  };

  if (isSuccess) {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Your new service added",
      showConfirmButton: false,
      timer: 2000,
    });
  }

  if (deleteSuccess) {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Your new service added",
      showConfirmButton: false,
      timer: 2000,
    });
  }

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        ariaHideApp={false}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
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
                      Write A blog
                    </h1>
                    <div className="border-t-[1px] border-[#ddd] w-[100%]"></div>
                  </div>

                  <div className="my-3">
                    <label className="font-[500] text-[16px] text-[#0d0c22]">
                      Tittle
                    </label>
                    <input
                      className="bg-[#f3f3f4] outline-none rounded-[6px] mt-2 focus:shadow-[0px_0px_2px_4px_rgba(234,76,137,0.24)]  border-solid   focus:bg-white p-2 w-[100%]"
                      {...register("tittle")}
                      required
                    />
                  </div>

                  <div className="my-3">
                    <label className="font-[500] text-[16px] text-[#0d0c22]">
                      Image
                    </label>
                    <input
                      className="bg-[#f3f3f4] outline-none rounded-[6px] mt-2 focus:shadow-[0px_0px_2px_4px_rgba(234,76,137,0.24)]  border-solid   focus:bg-white p-2 w-[100%]"
                      {...register("image")}
                      required
                    />
                  </div>

                  <div>
                    <label className="font-[500] text-[16px] text-[#0d0c22]">
                      Description
                    </label>
                    <textarea
                      className="bg-[#f3f3f4] outline-none rounded-[10px] mt-2 focus:shadow-[0px_0px_2px_4px_rgba(234,76,137,0.24)] border-solid  focus:bg-white p-2 w-[100%] h-[110px] text-[14px] font-[400] leading-[28px] hover:shadow-[0px_0px_2px_4px_rgba(234,76,137,0.24)] hover:bg-white"
                      style={{ whiteSpace: "pre-wrap" }}
                      {...register("desc")}
                      required
                      placeholder="you comment"
                    />
                  </div>

                  <div className=" w-[100%] flex items-center justify-start mt-2">
                    <button
                      className="my-2 mr-5 bg-[#ea4c89] hover:bg-[#f082ac]
                        text-white h-[40px] w-[80%] md:w-[30%] rounded-[8px]
                        text-[14px] font-[500] leading-[20px] cursor-pointer"
                      type="submit"
                      disabled={isLoading}
                    >
                      Post
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
          <>
            {" "}
            <div className="px-[7px] md:px-[40px]">
              <div className="whitespace-nowrap overflow-auto scrollbar-hide w-[100%] h-[200px] py-4">
                {/*   <ul className="min-h-[68px] flex flex-col">
                  {content}
                 
                </ul> */}
                <div className="min-h-[68px] flex flex-col">
                  {getBlog?.map((blog) => (
                    <>
                      <div className="flex items-center">
                        <div className=" md:block hidden">
                          <img
                            src={blog?.image}
                            alt=""
                            className="w-[80px] rounded-md "
                          />
                        </div>
                        <div className=" ml-5">
                          <span className="text-[#dbdbde] text-[14] font-[400] flex items-center">
                            {moment(blog?.time).fromNow()}
                            <button
                              onClick={() => handleDelete(blog?._id)}
                              className="ml-2 cursor-pointer text-red-600 font-bold"
                              disabled={deleteIsloading}
                            >
                              <AiFillDelete />
                            </button>
                          </span>
                          <h1 className="text-[16px] font-[500] cursor-pointer hover:text-[#ea4c89]">
                            {blog?.tittle?.slice(0, 54)}
                          </h1>
                          <p className="text-[#dbdbde] text-[14] font-[400]">
                            {blog?.desc?.slice(0, 50)}
                            {blog?.desc?.length >= 40 ? <>...</> : <></>}
                          </p>
                        </div>
                      </div>
                    </>
                  ))}
                </div>
              </div>
            </div>
          </>
        </>
      </Modal>
    </div>
  );
}

export default ContributeStory;
