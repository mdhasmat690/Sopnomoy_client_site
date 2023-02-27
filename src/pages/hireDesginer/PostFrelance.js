import React, { useEffect, useState } from "react";
import { useForm, Controller, useWatch } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useAuth } from "../../contexts/AuthContext";
import EmptyCreateAccout from "../getStart/EmptyCreateAccout";

function PostFrelance() {
  const navigate = useNavigate();
  const { reDir, user } = useAuth();
  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
    reset,
  } = useForm();

  if (!reDir?.location) {
    return <EmptyCreateAccout />;
  }

  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleString();

  const onSubmit = (data) => {
    console.log(data);
    data.time = formattedDate;
    const doc = data;
    fetch("http://localhost:5000/api/v1/tools/postProject", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(doc),
    })
      .then((data) => {
        if (data.status === 200) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your new service added",
            showConfirmButton: false,
            timer: 2000,
          });
          reset();
        }
      })

      .catch((err) => console.log("this is an error", err));
  };
  console.log("object");

  return (
    <>
      <div className="border-t border-indigo-[#f3f3f4] w-[100%]  "></div>
      <div className="container mx-auto grid md:grid-cols-12 gap-3">
        <div className="md:block hidden col-span-5 bg-[#ffb54c]">
          <h1 className="text-[#866118] text-[30px] leading-[25px] font-[700] mt-36   text-left flex items-center justify-center">
            Discover the world’s <br /> top Designers & Creatives.
          </h1>
        </div>
        <div className="  col-span-7 w-[60%] mx-auto">
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="my-6">
                <label className="font-bold ">Product Name</label>
                <input
                  className="bg-[#f3f3f4] outline-none rounded-[6px] focus:shadow-[0px_0px_2px_4px_rgba(234,76,137,0.24)]  border-solid focus:border-[1px] border-[#ea4c89] focus:bg-white p-2 w-[100%]"
                  {...register("productName")}
                  required
                />
              </div>
              <div className="my-6">
                <label className="font-bold ">Agency Name</label>
                <input
                  className="bg-[#f3f3f4] outline-none rounded-[6px] focus:shadow-[0px_0px_2px_4px_rgba(234,76,137,0.24)]  border-solid focus:border-[1px] border-[#ea4c89] focus:bg-white p-2 w-[100%]"
                  {...register("agencyName")}
                  required
                />
              </div>
              <div className="my-6">
                <label className="font-bold ">Image Url</label>
                <input
                  className="bg-[#f3f3f4] outline-none rounded-[6px] focus:shadow-[0px_0px_2px_4px_rgba(234,76,137,0.24)]  border-solid focus:border-[1px] border-[#ea4c89] focus:bg-white p-2 w-[100%]"
                  {...register("imgUrl")}
                  required
                />
              </div>

              <div className="my-6">
                <label className="font-bold ">Artist</label>
                <input
                  className="bg-[#f3f3f4] outline-none rounded-[6px] focus:shadow-[0px_0px_2px_4px_rgba(234,76,137,0.24)]  border-solid focus:border-[1px] border-[#ea4c89] focus:bg-white p-2 w-[100%]"
                  {...register("artist")}
                  required
                />
              </div>
              <div className="my-6">
                <label className="font-bold ">Description Tittle</label>
                <input
                  className="bg-[#f3f3f4] outline-none rounded-[6px] focus:shadow-[0px_0px_2px_4px_rgba(234,76,137,0.24)]  border-solid focus:border-[1px] border-[#ea4c89] focus:bg-white p-2 w-[100%]"
                  {...register("Tittle")}
                  required
                />
              </div>
              <div className="my-6">
                <label className="font-bold ">Post Description</label>
                <textarea
                  className="bg-[#f3f3f4] outline-none rounded-[6px] focus:shadow-[0px_0px_2px_4px_rgba(234,76,137,0.24)]  border-solid focus:border-[1px] border-[#ea4c89] focus:bg-white p-2 w-[100%]"
                  {...register("description")}
                  required
                />
              </div>
              <div className="my-6">
                <label className="font-bold ">More Details</label>
                <input
                  className="bg-[#f3f3f4] outline-none rounded-[6px] focus:shadow-[0px_0px_2px_4px_rgba(234,76,137,0.24)]  border-solid focus:border-[1px] border-[#ea4c89] focus:bg-white p-2 w-[100%]"
                  {...register("Details")}
                />
              </div>
              <div className="my-6">
                <label className="font-bold ">Contact Tittle</label>
                <input
                  className="bg-[#f3f3f4] outline-none rounded-[6px] focus:shadow-[0px_0px_2px_4px_rgba(234,76,137,0.24)]  border-solid focus:border-[1px] border-[#ea4c89] focus:bg-white p-2 w-[100%]"
                  {...register("contact")}
                  required
                />
              </div>
              <div className="my-6">
                <label className="font-bold ">Email</label>
                <input
                  className="bg-[#f3f3f4] outline-none rounded-[6px] focus:shadow-[0px_0px_2px_4px_rgba(234,76,137,0.24)]  border-solid focus:border-[1px] border-[#ea4c89] focus:bg-white p-2 w-[100%]"
                  {...register("email")}
                  required
                />
              </div>
              <div className="my-6">
                <label className="font-bold ">Links</label>
                <input
                  className="bg-[#f3f3f4] outline-none rounded-[6px] focus:shadow-[0px_0px_2px_4px_rgba(234,76,137,0.24)]  border-solid focus:border-[1px] border-[#ea4c89] focus:bg-white p-2 w-[100%]"
                  {...register("link")}
                />
              </div>

              <div>
                <select
                  className="bg-[#f3f3f4] outline-none rounded-[6px] focus:shadow-[0px_0px_2px_4px_rgba(234,76,137,0.24)]  border-solid focus:border-[1px] border-[#ea4c89] focus:bg-white p-2 w-[35%]"
                  {...register("projectType")}
                >
                  <option value="web">Web Development</option>
                  <option value="designer">Web Designer</option>
                  <option value="softwareDesigner">Software Designer</option>
                  <option value="Grapch Designer">Grapch Designer</option>
                </select>
              </div>

              <button
                className={`text-white rounded-md w-[270px] mt-5 bg-[#ea4c89] p-2   
                    cursor-pointer`}
                type="submit"
              >
                Sign Up
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

/* sopnomoydb@admin */
/* zX4x7atTfJyQoIeU */
/* sopnomoydb  */
