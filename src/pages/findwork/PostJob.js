import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useSelector } from "react-redux";
import { usePostJobMutation } from "../../features/jobs/jobApi";

function PostJob() {
  const [postJob, { isSuccess }] = usePostJobMutation();
  const { email } = useSelector((state) => state?.auth?.user);

  const {
    register,

    handleSubmit,

    reset,
  } = useForm();

  /*  if (!user) {
    return <EmptyCreateAccout />;
  } */

  const time = new Date().getTime();

  const onSubmit = (data) => {
    data.time = time;
    data.email = email | "";
    postJob(data);

    reset();
  };

  if (isSuccess) {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Your Job post added",
      showConfirmButton: false,
      timer: 2000,
    });
  }

  const divStyle = {
    backgroundImage: "url('https://i.ibb.co/5hYBq8t/postbg.png')",
    width: "100%",
    height: "400px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <>
      <div className="border-t border-indigo-[#f3f3f4] w-[100%]  "></div>
      <div style={divStyle}></div>
      <div className="container mx-auto ">
        <div className="mt-[-320px] w-[60%] mx-auto ">
          <div className="text-white">
            <h1 className="text-[32px] font-[700] leading-[38px]   ">
              Post a job on Sopomoy
            </h1>
            <h1 className="text-[16px] font-[400] leading-[28px]   ">
              The #1 job board for hiring designers and creative professionals.
            </h1>
          </div>
          <form
            className="bg-[#ffffff] p-10 rounded-[8px] mt-8"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div>
              <h1 className="text-[24px] font-[700] leading-[29px] mb-12">
                Tell us about your role
              </h1>
            </div>
            <div className="mb-6">
              <label className="text-[16px] font-[600] leading-[22px]">
                Job title *
              </label>

              <input
                className="mt-3 bg-[#fafafb] outline-none rounded-[6px] focus:shadow-[0px_0px_2px_4px_rgba(234,76,137,0.24)] border-solid border-2 border-[#e7e7e9] focus:border-[#e7e7e9] focus:bg-white p-2 w-[100%] h-[50px]"
                {...register("JobTitle")}
                placeholder="Web developer"
                required
              />
            </div>

            <div className="my-6">
              <label className="text-[16px] font-[600] leading-[22px]">
                Add your job description *
              </label>
              <textarea
                className="bg-[#fafafb] border-solid border-2 mt-3 border-[#e7e7e9] outline-none rounded-[6px] focus:shadow-[0px_0px_2px_4px_rgba(234,76,137,0.24)] h-[200px]   focus:bg-white p-2 w-[100%]"
                style={{ whiteSpace: "pre-wrap" }}
                {...register("description")}
                placeholder="application description"
                required
              />
            </div>

            <div className="mb-6">
              <label className="text-[16px] font-[600] leading-[22px]">
                Job location
              </label>

              <input
                className="mt-3 bg-[#fafafb] outline-none rounded-[6px] focus:shadow-[0px_0px_2px_4px_rgba(234,76,137,0.24)] border-solid border-2 border-[#e7e7e9] focus:border-[#e7e7e9] focus:bg-white p-2 w-[100%] h-[50px]"
                {...register("JobLocation")}
                placeholder="Dhaka,Bangladesh"
                required
              />
            </div>

            <div className="">
              <div>
                <label className="text-[16px] font-[600] leading-[22px]">
                  Workplace type *
                </label>

                <select
                  className="bg-[#fafafb] mt-3 outline-none rounded-[6px] focus:shadow-[0px_0px_2px_4px_rgba(234,76,137,0.24)]     focus:bg-white p-2 w-[100%] border-solid border-2 border-[#e7e7e9] h-[50px]"
                  {...register("workplace")}
                >
                  <option value="remote">Remote</option>
                  <option value="onSite">On-Site</option>
                  <option value="hybrid">Hybrid</option>
                </select>
              </div>
            </div>

            <div className="my-6">
              <div>
                <label className="text-[16px] font-[600] leading-[22px]">
                  What type of designer are you looking for? *
                </label>

                <select
                  className="bg-[#fafafb] mt-3 outline-none rounded-[6px] focus:shadow-[0px_0px_2px_4px_rgba(234,76,137,0.24)]     focus:bg-white p-2 w-[100%] border-solid border-2 border-[#e7e7e9] h-[50px]"
                  {...register("designerloking")}
                >
                  <option value="animation">Animation</option>
                  <option value="graphicDesign">Graphic Design</option>
                  <option value="uxDesign">Ux Design</option>
                  <option value="webDesign">Web Design</option>
                </select>
              </div>
            </div>

            <div className="my-6">
              <div>
                <label className="text-[16px] font-[600] leading-[22px]">
                  Employment type *
                </label>

                <select
                  className="bg-[#fafafb] mt-3 outline-none rounded-[6px] focus:shadow-[0px_0px_2px_4px_rgba(234,76,137,0.24)]     focus:bg-white p-2 w-[100%] border-solid border-2 border-[#e7e7e9] h-[50px]"
                  {...register("employType")}
                >
                  <option value="full-time">Full-time</option>
                  <option value="freelance">Freelance / Contract Hire</option>
                </select>
              </div>
            </div>

            <div className="mb-6">
              <label className="text-[16px] font-[600] leading-[22px]">
                Where can people apply? *
              </label>

              <input
                className="mt-3 bg-[#fafafb] outline-none rounded-[6px] focus:shadow-[0px_0px_2px_4px_rgba(234,76,137,0.24)] border-solid border-2 border-[#e7e7e9] focus:border-[#e7e7e9] focus:bg-white p-2 w-[100%] h-[50px]"
                {...register("apply")}
                placeholder="e.g. https://abc.io/f73jf7wh"
                required
              />
            </div>
            <div className="mb-6">
              <label className="text-[16px] font-[600] leading-[22px]">
                What's your company name? *{" "}
              </label>

              <input
                className="mt-3 bg-[#fafafb] outline-none rounded-[6px] focus:shadow-[0px_0px_2px_4px_rgba(234,76,137,0.24)] border-solid border-2 border-[#e7e7e9] focus:border-[#e7e7e9] focus:bg-white p-2 w-[100%] h-[50px]"
                {...register("companyName")}
                placeholder="Test Website"
                required
              />
            </div>

            <div className="mb-6">
              <label className="text-[16px] font-[600] leading-[22px]">
                Image Url *{" "}
              </label>

              <input
                className="mt-3 bg-[#fafafb] outline-none rounded-[6px] focus:shadow-[0px_0px_2px_4px_rgba(234,76,137,0.24)] border-solid border-2 border-[#e7e7e9] focus:border-[#e7e7e9] focus:bg-white p-2 w-[100%] h-[50px]"
                {...register("image")}
                placeholder="Image Url"
                required
              />
            </div>

            <div className="mb-6">
              <label className="text-[16px] font-[600] leading-[22px]">
                Your company website *{" "}
              </label>

              <input
                className="mt-3 bg-[#fafafb] outline-none rounded-[6px] focus:shadow-[0px_0px_2px_4px_rgba(234,76,137,0.24)] border-solid border-2 border-[#e7e7e9] focus:border-[#e7e7e9] focus:bg-white p-2 w-[100%] h-[50px]"
                {...register("companyWeb")}
                placeholder="https://domain.com"
                required
              />
            </div>

            <div className="flex justify-end">
              <button
                className="text-white rounded-md w-[120px]  bg-[#ea4c89] p-2   
                    cursor-pointer "
                type="submit"
              >
                Post Project
              </button>
            </div>
          </form>
        </div>
        <br />
      </div>
    </>
  );
}

export default PostJob;
