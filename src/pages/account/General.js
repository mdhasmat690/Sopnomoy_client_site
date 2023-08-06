import { useForm } from "react-hook-form";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useBeforeUnload } from "react-router-dom";
import {
  useGetUserDataQuery,
  useUserUpdateMutation,
} from "../../features/auth/authApi";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";

function General() {
  const { email } = useSelector((state) => state?.auth?.user);

  const { data: user } = useGetUserDataQuery(email);
  const [updateUserMore, { isSuccess, isLoading }] = useUserUpdateMutation();

  const {
    register,
    formState: { errors },
    handleSubmit,

    reset,
  } = useForm();

  useEffect(() => {
    reset();
  }, [user, reset]);

  const onSubmit = (data) => {
    updateUserMore({ id: user?.data?._id, data });
    reset();
  };

  if (isLoading) {
    let timerInterval;
    Swal.fire({
      title: "Please wait finish soon!",
      html: "I will close in <b></b> milliseconds.",
      timer: 2000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
        const b = Swal.getHtmlContainer().querySelector("b");
        timerInterval = setInterval(() => {
          b.textContent = Swal.getTimerLeft();
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      },
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log("I was closed by the timer");
      }
    });
  }

  return (
    <>
      <div className="h-[1044px]">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="my-6">
            <label className="font-bold">Username</label>
            <input
              className="  my-2 border-[2px] outline-none rounded-[6px] focus:shadow-[0px_0px_2px_4px_rgba(234,76,137,0.24)]     focus:bg-white p-2 w-[100%] hover:shadow-[0px_0px_2px_4px_rgba(234,76,137,0.24)] "
              defaultValue={user?.data?.username ? user?.data?.username : ""}
              {...register("username")}
              required
            />
          </div>

          <div className="my-6">
            <label className="font-bold ">Email</label>
            <input
              className=" my-2  border-[2px] outline-none rounded-[6px] focus:shadow-[0px_0px_2px_4px_rgba(234,76,137,0.24)]     focus:bg-white p-2 w-[100%] hover:shadow-[0px_0px_2px_4px_rgba(234,76,137,0.24)] "
              defaultValue={user?.data?.email ? user?.data?.email : ""}
              {...register("email")}
              required
            />
          </div>

          {errors.userEmail && <span>This field is required</span>}

          <div className="flex justify-end">
            {" "}
            <button
              className={`text-white rounded-md   bg-[#ea4c89] px-3 py-2 
                    cursor-pointer`}
              type="submit"
              disabled={isLoading}
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default General;
