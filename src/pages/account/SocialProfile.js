import React from "react";
import { useSelector } from "react-redux";
import {
  useGetUserDataQuery,
  useUserUpdateMutation,
} from "../../features/auth/authApi";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

function SocialProfile() {
  const { email } = useSelector((state) => state?.auth?.user);

  const { data: user } = useGetUserDataQuery(email);
  const [updateUserMore, { isLoading }] = useUserUpdateMutation();

  const {
    register,

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
      timer: 1500,
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
    <div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="my-5">
            <label className="text-[16px] font-[600]">
              Twitter{" "}
              <span className="text-[14px] font-[400] text-[#9e9ea7]">
                Only url
              </span>
            </label>
            <input
              className=" text-[16px] h-[48px] py-[10px] px-[16px] my-2 border-[2px] outline-none rounded-[6px] focus:shadow-[0px_0px_2px_4px_rgba(234,76,137,0.24)]     focus:bg-white p-2 w-[100%] hover:shadow-[0px_0px_2px_4px_rgba(234,76,137,0.24)] "
              defaultValue={user?.data?.twitter ? user?.data?.twitter : ""}
              {...register("twitter")}
            />
          </div>
          <div className="my-5">
            <label className="text-[16px] font-[600]">
              Facebook{" "}
              <span className="text-[14px] font-[400] text-[#9e9ea7]">
                Only url
              </span>
            </label>
            <input
              className=" text-[16px] h-[48px] py-[10px] px-[16px] my-2 border-[2px] outline-none rounded-[6px] focus:shadow-[0px_0px_2px_4px_rgba(234,76,137,0.24)]     focus:bg-white p-2 w-[100%] hover:shadow-[0px_0px_2px_4px_rgba(234,76,137,0.24)] "
              defaultValue={user?.data?.facebook ? user?.data?.facebook : ""}
              {...register("facebook")}
            />
          </div>
          <div className="my-5">
            <label className="text-[16px] font-[600]">
              Instagram{" "}
              <span className="text-[14px] font-[400] text-[#9e9ea7]">
                Only url
              </span>
            </label>
            <input
              className=" text-[16px] h-[48px] py-[10px] px-[16px] my-2 border-[2px] outline-none rounded-[6px] focus:shadow-[0px_0px_2px_4px_rgba(234,76,137,0.24)]     focus:bg-white p-2 w-[100%] hover:shadow-[0px_0px_2px_4px_rgba(234,76,137,0.24)] "
              defaultValue={user?.data?.instagram ? user?.data?.instagram : ""}
              {...register("instagram")}
            />
          </div>
          <div className="my-5">
            <label className="text-[16px] font-[600]">
              GitHub{" "}
              <span className="text-[14px] font-[400] text-[#9e9ea7]">
                Only url
              </span>
            </label>
            <input
              className=" text-[16px] h-[48px] py-[10px] px-[16px] my-2 border-[2px] outline-none rounded-[6px] focus:shadow-[0px_0px_2px_4px_rgba(234,76,137,0.24)]     focus:bg-white p-2 w-[100%] hover:shadow-[0px_0px_2px_4px_rgba(234,76,137,0.24)] "
              defaultValue={user?.data?.github ? user?.data?.github : ""}
              {...register("github")}
            />
          </div>

          <div className="my-5">
            <label className="text-[16px] font-[600]">
              LinkedIn{" "}
              <span className="text-[14px] font-[400] text-[#9e9ea7]">
                Only url
              </span>
            </label>
            <input
              className=" text-[16px] h-[48px] py-[10px] px-[16px] my-2 border-[2px] outline-none rounded-[6px] focus:shadow-[0px_0px_2px_4px_rgba(234,76,137,0.24)]     focus:bg-white p-2 w-[100%] hover:shadow-[0px_0px_2px_4px_rgba(234,76,137,0.24)] "
              defaultValue={user?.data?.linkdin ? user?.data?.linkdin : ""}
              {...register("linkdin")}
            />
          </div>

          <div className="flex justify-end">
            {" "}
            <button
              className={`text-white rounded-md   bg-[#ea4c89] px-3 py-2 
                    cursor-pointer`}
              type="submit"
              disabled={isLoading}
            >
              Update Social Profile
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SocialProfile;
