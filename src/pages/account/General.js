import { useForm } from "react-hook-form";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useBeforeUnload } from "react-router-dom";
import {
  useGetUserDataQuery,
  useUserUpdateMutation,
} from "../../features/auth/authApi";
import { useSelector } from "react-redux";

function General(props) {
  const { email } = useSelector((state) => state?.auth?.user);

  const { data: user } = useGetUserDataQuery(email);
  const [updateUserMore, {}] = useUserUpdateMutation();
  // console.log(user?.data?._id);
  /*   const [save, setSave] = useState("");

  useEffect(() => {
    window.onbeforeunload = function () {
      if (!save) {
        return "If you leave this page, you will lose any unsaved changes.";
      }
    };
  }, [save]);
 */
  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
    reset,
  } = useForm();

  useEffect(() => {
    reset();
  }, [user, reset]);

  const onSubmit = (data) => {
    updateUserMore({ id: user?.data?._id, data });
    reset();
  };

  return (
    <div>
      <div>
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

          <h1 className="text-red-700 my-2">
            This field not working now we are working now
          </h1>
          {errors.userEmail && <span>This field is required</span>}

          <div className="flex justify-end">
            {" "}
            <button
              className={`text-white rounded-md   bg-[#ea4c89] px-3 py-2 
                    cursor-pointer`}
              type="submit"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default General;
