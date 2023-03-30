import React, { useEffect, useState } from "react";
import { useForm, Controller, useWatch } from "react-hook-form";
import { CirclesWithBar } from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { createUser, googleLogin } from "../../features/auth/authSlice";

function SignUp() {
  const dispatch = useDispatch();
  const { isLoading, success } = useSelector((state) => state.auth);

  const {
    signInWithGoogle,
    createUserWithUserEmail,
    isLoading: loading,
    user,
  } = useAuth();
  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
    reset,
  } = useForm();

  const term = useWatch({ control, name: "term" });

  const [reDir, setReDir] = useState();

  /*   useEffect(() => {
    fetch(`http://localhost:5000/api/v1/tools/${user.email}`)
      .then((res) => res.json())
      .then((data) => setReDir(data.data));
  }, [user.email]); */

  const location = useLocation();
  const navigate = useNavigate();

  /*   const re = () => {
    if (reDir) {
      console.log(reDir.location);
      navigate(reDir?.location ? "/getStart" : location?.state?.from || "/");
    }
  }; */

  const googleLoginHandle = () => {
    dispatch(googleLogin());
  };

  const onSubmit = (data) => {
    const name = data.firstName + " " + data.lastName;
    console.log(data);
    dispatch(createUser({ email: data.mail, password: data.password, name }));
    reset();
  };

  if (success) {
    navigate("/getStart");
  }

  return (
    <div>
      <div className="border-t border-indigo-[#e0e0e0] w-[100%]  "></div>
      <div className="grid md:grid-cols-12 gap-3">
        <div className="col-span-5 bg-[#f2d184] h-[1000px] hidden md:block  ">
          <h1 className="text-[#866118] text-[30px] leading-[25px] font-[700] mt-52  text-left flex justify-center">
            Discover the world’s <br /> top Designers & Creatives.
          </h1>
        </div>
        <div className=" col-span-7    w-[90%] mx-auto">
          <h3 className="text-end mt-5">
            Already a member?{" "}
            <span
              onClick={() => navigate(`/login`)}
              className="text-[#4f3cc9] hover:text-[#7263d4] cursor-pointer"
            >
              Sign In
            </span>
          </h3>

          <div className="  w-[65%] mx-auto mt-10 flex justify-center">
            <div>
              <h1 className="text-[#f2d184] text-[30px] leading-[23px] font-[700] mb-9">
                Sign up to Dribbble
              </h1>
              <div className="mt-4 w-[270px] bg-[#1a73e8] hover:bg-[rgba(0,0,0,0.30)] rounded-sm">
                <button
                  onClick={googleLoginHandle}
                  className=" flex items-center justify-start "
                >
                  <img
                    className="w-[36px] m-[2px] p-1 bg-white"
                    src="https://i.ibb.co/3pbVY1G/googleimg.png"
                    alt=""
                  />{" "}
                  <span className="text-white font-[500] ml-8">
                    Sign up with Google
                  </span>
                </button>
              </div>
              <div className="my-7 flex items-center">
                <div className="border-t border-indigo-[#e0e0e0] w-[100%]  "></div>
                <span className="mx-3 text-[#6e6d7a]">Or</span>
                <div className="border-t border-indigo-[#e0e0e0] w-[100%]  "></div>
              </div>
              <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="font-bold">First Name</label>
                      <input
                        className="bg-[#f3f3f4] outline-none rounded-[6px] focus:shadow-[0px_0px_2px_4px_rgba(234,76,137,0.24)]  border-solid focus:border-[1px] border-[#ea4c89] focus:bg-white p-2 w-[100%]"
                        {...register("firstName")}
                        required
                      />
                    </div>

                    <div>
                      <level className="font-bold mb-2">Last Name</level>
                      <input
                        className="bg-[#f3f3f4] outline-none rounded-[6px] focus:shadow-[0px_0px_2px_4px_rgba(234,76,137,0.24)]  border-solid focus:border-[1px] border-[#ea4c89] focus:bg-white p-2 w-[100%]"
                        {...register("lastName")}
                        required
                      />
                    </div>
                  </div>

                  <div className="my-8">
                    <level className="font-bold">Email</level>
                    <input
                      className="bg-[#f3f3f4] outline-none rounded-[6px] focus:shadow-[0px_0px_2px_4px_rgba(234,76,137,0.24)]  border-solid focus:border-[1px] border-[#ea4c89] focus:bg-white p-2 w-[100%]"
                      {...register("mail", {
                        required: "Email Address is required",
                      })}
                    />
                  </div>

                  <div className="my-8">
                    <label className="font-bold">Password</label>
                    <input
                      className="bg-[#f3f3f4] outline-none rounded-[6px] focus:shadow-[0px_0px_2px_4px_rgba(234,76,137,0.24)]  border-solid focus:border-[1px] border-[#ea4c89] focus:bg-white p-2 w-[100%]"
                      {...register("password", { minLength: 6 })}
                      placeholder="6+ Characters"
                    />
                  </div>

                  <div className="my-5 flex">
                    <div>
                      <input
                        className="form-check-input   h-5 w-5 border border-gray-300 rounded-sm  checked:bg-[#4f3cc9] checked:border-blue-600 focus:outline-none   transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer  accent-[#4f3cc9]"
                        value=""
                        type="checkbox"
                        {...register("term")}
                        id="terms"
                      />
                    </div>
                    <div>
                      <p>
                        Creating an account means you’re okay with our{" "}
                        <span className="text-[#4f3cc9] font-[500]">
                          Terms of Service, Privacy Policy,
                        </span>{" "}
                        and our default{" "}
                        <span className="text-[#4f3cc9] font-[500]">
                          Notification Settings.
                        </span>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    {!isLoading ? (
                      <button
                        disabled={!term}
                        className={`text-white rounded-md w-[270px] mt-5 bg-[#ea4c89] p-2 hover:bg-[#f082ac]  ${
                          !term ? "cursor-not-allowed" : "cursor-pointer"
                        }`}
                        type="submit"
                      >
                        Sign Up
                      </button>
                    ) : (
                      <button
                        className={`text-white rounded-md w-[200px] mt-5 bg-[#ea4c89] p-2 hover:bg-[#f082ac] flex justify-center`}
                        type="submit"
                      >
                        <CirclesWithBar
                          height="40"
                          width="40"
                          color="#4fa94d"
                          wrapperStyle={{}}
                          wrapperClass=""
                          visible={true}
                          outerCircleColor=""
                          innerCircleColor=""
                          barColor=""
                          ariaLabel="circles-with-bar-loading"
                        />
                      </button>
                    )}
                  </div>
                </form>

                <div className="mt-5">
                  <span className="text-[11px]">
                    This site is protected by Sopnomoy and the Google <br />
                    <span className="text-[#4f3cc9]">
                      Privacy Policy
                    </span> and{" "}
                    <span className="text-[#4f3cc9]">Terms of Service</span>{" "}
                    apply.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
