import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import EmptyCreateAccout from "../getStart/EmptyCreateAccout";
import { useGetUserDataQuery } from "../../features/auth/authApi";
import { useSelector } from "react-redux";
import { usePostProjectMutation } from "../../features/services/servicesApi";

function PostFrelance() {
  const [postProject, { isSuccess, error }] = usePostProjectMutation();
  const { email } = useSelector((state) => state?.auth?.user);
  const { data: user } = useGetUserDataQuery(email);

  const {
    register,

    handleSubmit,

    reset,
  } = useForm();

  if (!user) {
    return <EmptyCreateAccout />;
  }

  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleString();

  const onSubmit = (data) => {
    data.time = formattedDate;
    const doc = data;

    postProject(doc);
    reset();
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

  return (
    <>
      <div className="border-t border-indigo-[#f3f3f4] w-[100%]  "></div>
      <div className="container mx-auto grid md:grid-cols-12 gap-3">
        <div className="md:block hidden col-span-5 bg-[#ffb54c]">
          <h1 className="text-[#866118] text-[30px] leading-[25px] font-[700] mt-36   text-left flex items-center justify-center">
            Discover the world’s <br /> top Designers & Creatives.
          </h1>
        </div>
        <div className="  col-span-7 w-[90%] md:w-[60%] mx-auto">
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="my-6">
                <label className="font-bold ">Product Name</label>
                <input
                  className="bg-[#f3f3f4] outline-none rounded-[6px] focus:shadow-[0px_0px_2px_4px_rgba(234,76,137,0.24)]  border-solid   focus:bg-white p-2 w-[100%]"
                  {...register("productName")}
                  required
                />
              </div>
              <div className="my-6">
                <label className="font-bold ">Agency Name</label>
                <input
                  className="bg-[#f3f3f4] outline-none rounded-[6px] focus:shadow-[0px_0px_2px_4px_rgba(234,76,137,0.24)]  border-solid   focus:bg-white p-2 w-[100%]"
                  {...register("agencyName")}
                  required
                />
              </div>
              <div className="my-6">
                <label className="font-bold ">Image Url</label>
                <input
                  className="bg-[#f3f3f4] outline-none rounded-[6px] focus:shadow-[0px_0px_2px_4px_rgba(234,76,137,0.24)]  border-solid   focus:bg-white p-2 w-[100%]"
                  {...register("imgUrl")}
                  required
                />
              </div>

              <div className="my-6">
                <label className="font-bold ">Artist</label>
                <input
                  className="bg-[#f3f3f4] outline-none rounded-[6px] focus:shadow-[0px_0px_2px_4px_rgba(234,76,137,0.24)]  border-solid   focus:bg-white p-2 w-[100%]"
                  {...register("artist")}
                  required
                />
              </div>
              <div className="my-6">
                <label className="font-bold ">Description Tittle</label>
                <input
                  className="bg-[#f3f3f4] outline-none rounded-[6px] focus:shadow-[0px_0px_2px_4px_rgba(234,76,137,0.24)]  border-solid   focus:bg-white p-2 w-[100%]"
                  {...register("Tittle")}
                  required
                />
              </div>
              <div className="my-6">
                <label className="font-bold ">Post Description</label>
                <textarea
                  className="bg-[#f3f3f4] outline-none rounded-[6px] focus:shadow-[0px_0px_2px_4px_rgba(234,76,137,0.24)]  border-solid   focus:bg-white p-2 w-[100%]"
                  style={{ whiteSpace: "pre-wrap" }}
                  {...register("description")}
                  required
                />
              </div>
              <div className="my-6">
                <label className="font-bold ">More Details</label>
                <input
                  className="bg-[#f3f3f4] outline-none rounded-[6px] focus:shadow-[0px_0px_2px_4px_rgba(234,76,137,0.24)]  border-solid   focus:bg-white p-2 w-[100%]"
                  {...register("Details")}
                />
              </div>
              <div className="my-6">
                <label className="font-bold ">Contact Tittle</label>
                <input
                  className="bg-[#f3f3f4] outline-none rounded-[6px] focus:shadow-[0px_0px_2px_4px_rgba(234,76,137,0.24)]  border-solid  focus:bg-white p-2 w-[100%]"
                  {...register("contact")}
                  required
                />
              </div>
              <div className="my-6">
                <label className="font-bold ">Email</label>
                <input
                  className="bg-[#f3f3f4] outline-none rounded-[6px] focus:shadow-[0px_0px_2px_4px_rgba(234,76,137,0.24)]  border-solid   focus:bg-white p-2 w-[100%]"
                  {...register("email")}
                  required
                />
              </div>
              <div className="my-6">
                <label className="font-bold ">Links</label>
                <input
                  className="bg-[#f3f3f4] outline-none rounded-[6px] focus:shadow-[0px_0px_2px_4px_rgba(234,76,137,0.24)]  border-solid   focus:bg-white p-2 w-[100%]"
                  {...register("link")}
                />
              </div>

              <div className="">
                <div>
                  <select
                    className="bg-[#f3f3f4] outline-none rounded-[6px] focus:shadow-[0px_0px_2px_4px_rgba(234,76,137,0.24)]  border-solid   focus:bg-white p-2 "
                    {...register("projectType")}
                  >
                    <option value="web">Web Development</option>
                    <option value="designer">Web Designer</option>
                    <option value="softwareDesigner">Software Designer</option>
                    <option value="Grapch Designer">Grapch Designer</option>
                    <option value="animation">Animation</option>
                    <option value="app">App Design</option>
                  </select>
                </div>
                <div className="my-6">
                  <select
                    className="bg-[#f3f3f4] outline-none rounded-[6px] focus:shadow-[0px_0px_2px_4px_rgba(234,76,137,0.24)]  border-solid   focus:bg-white p-2   "
                    {...register("group")}
                  >
                    <option value="single">single</option>
                    <option value="single">team</option>
                  </select>

                  <span className="ml-3 font-bold">
                    Project type Group or Single
                  </span>
                </div>
              </div>
              <div className="mt-5 ">
                {error && <h1 className="text-red-400">{error?.error}</h1>}
              </div>
              <button
                className={`text-white rounded-md w-[270px]  bg-[#ea4c89] p-2   
                    cursor-pointer`}
                type="submit"
              >
                Post Project
              </button>
            </form>
          </div>
        </div>
        <br />
      </div>
    </>
  );
}

export default PostFrelance;
