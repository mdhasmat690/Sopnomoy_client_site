import React from "react";
import { useForm, Controller, useWatch } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function ForgetPassword(props) {
  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
  } = useForm();

  const term = useWatch({ control, name: "term" });

  const onSubmit = (data) => console.log(data);

  const navigate = useNavigate();

  return (
    <>
      <div className="border-t border-indigo-[#e0e0e0] w-[100%]"></div>
      <div className="grid md:grid-cols-12 gap-3">
        <div className="col-span-5 bg-[#f2d184] h-[700px] hidden md:block  ">
          <h1 className="text-[#866118] text-[30px] leading-[25px] font-[700] mt-52  text-left flex justify-center ">
            Discover the world’s <br /> top Designers & Creatives.
          </h1>
        </div>
        <div className=" col-span-7  w-[90%] mx-auto">
          <h3 className="text-end mt-5">
            Not a member?{" "}
            <span
              onClick={() => navigate(`/signUp`)}
              className="text-[#4f3cc9] hover:text-[#7263d4] cursor-pointer"
            >
              Sign up now
            </span>
          </h3>

          <div className="  w-[65%] mx-auto mt-10 flex justify-center">
            <div>
              <h1 className="text-black text-[30px] leading-[23px] font-[700] mb-9">
                Forgot Password?
              </h1>

              <h1 className="my-5">
                Enter the email address you used when you joined and we’ll send
                you instructions to reset your password.
              </h1>
              <h1 className="mb-8">
                For security reasons, we do NOT store your password. So rest
                assured that we will never send your password via email.
              </h1>

              <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="mb-7">
                    <level className="font-bold">Email Address</level>
                    <input
                      className="bg-[#f3f3f4] outline-none rounded-[6px] focus:shadow-[0px_0px_2px_4px_rgba(234,76,137,0.24)]  border-solid focus:border-[1px] border-[#ea4c89] focus:bg-white p-2 w-[100%]"
                      {...register("mail", {
                        required: "Email Address is required",
                      })}
                    />
                  </div>

                  {/*   <input
                    
                    type="submit" 
                  /> */}
                  <button
                    className={`text-white rounded-md w-[270px]  bg-[#ea4c89] p-2 cursor-pointer}`}
                  >
                    Send Reset Instructions
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ForgetPassword;
