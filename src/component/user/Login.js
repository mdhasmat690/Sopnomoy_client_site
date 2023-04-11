import React from "react";
import { useForm, Controller, useWatch } from "react-hook-form";
import { CirclesWithBar } from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { googleLogin, loginUser } from "../../features/auth/authSlice";
import { useGetUserDataQuery } from "../../features/auth/authApi";

function Login(props) {
  const { user, isLoading, success } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const userEmail = user?.email;

  const {
    data,
    isLoading: userFetchIsloading,
    isSuccess,
    fulfilledTimeStamp,
    isFetching,
  } = useGetUserDataQuery(userEmail);

  const location = useLocation();
  let navigate = useNavigate();

  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
    reset,
  } = useForm();

  const term = useWatch({ control, name: "term" });

  const onSubmit = (data) => {
    dispatch(loginUser({ email: data.mail, password: data.password }));
    reset();
  };

  const googleLoginHandle = () => {
    dispatch(googleLogin());
  };

  console.log(location?.state?.from, "eita state");

  if (user?.email) {
    if (location?.state?.from) {
      return navigate(location?.state?.from || "/");
    }
    if (isSuccess || data?.data || userFetchIsloading) {
      navigate(!data ? "/getStart" : location?.state?.from || "/");
    }
  }

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
                Sign in to Dribbble
              </h1>
              <div className="mt-4 w-[270px] bg-[#1a73e8] rounded-sm">
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
                  <div className="my-8">
                    <level className="font-bold">
                      Username or Email Address
                    </level>
                    <input
                      className="bg-[#f3f3f4] outline-none rounded-[6px] focus:shadow-[0px_0px_2px_4px_rgba(234,76,137,0.24)]  border-solid focus:border-[1px] border-[#ea4c89] focus:bg-white p-2 w-[100%]"
                      {...register("mail", {
                        required: "Email Address is required",
                      })}
                    />
                  </div>

                  <div className="my-8">
                    <div className="flex justify-between">
                      <label className="font-bold">Password</label>
                      <button
                        onClick={() => navigate(`/forgetPassword`)}
                        className="text-[#4f3cc9]"
                      >
                        Forgot password?
                      </button>
                    </div>
                    <input
                      className="bg-[#f3f3f4] outline-none rounded-[6px] focus:shadow-[0px_0px_2px_4px_rgba(234,76,137,0.24)]  border-solid focus:border-[1px] border-[#ea4c89] focus:bg-white p-2 w-[100%]"
                      {...register("password", { minLength: 6 })}
                      placeholder="6+ Characters"
                    />
                  </div>

                  {!isLoading ? (
                    <button
                      className={`text-white rounded-md w-[270px] mt-5 bg-[#ea4c89] p-2 cursor-pointer}`}
                      type="submit"
                    >
                      Login
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
    </>
  );
}

export default Login;
