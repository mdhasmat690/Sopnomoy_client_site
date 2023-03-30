import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useAuth } from "../../contexts/AuthContext";
import { useUserRegisterMutation } from "../../features/auth/authApi";

function GetStart(props) {
  const { email, name } = useSelector((state) => state?.auth?.user);
  const [userRegister, { isLoading, isSuccess, isError, error }] =
    useUserRegisterMutation();
  console.log(error?.error);
  const { user: us } = useAuth();
  //  console.log(user.displayName, user.email);
  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
    reset,
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    data.email = email;
    data.displayName = name;

    const finalData = data;
    userRegister(finalData);
    /*   fetch(`http://localhost:5000/api/v1/tools/${user.email}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((data) => {
      if (data.status === 200) {
        navigate(`/welcome`);
      }
    }); */
    // reset();
  };

  if (isSuccess) {
    navigate(`/welcome`);
  }

  return (
    <div className="container mx-auto my-5">
      <div className="w-[80%] mx-auto flex justify-center">
        <div>
          <h1 className="text-orange-600 text-[30px] font-bold leading-[1.23em] ">
            Welcome! Let’s create your profile
          </h1>
          <h5 className="text-[#6e6d7a] text-[16px] leading-[24px] mb-3">
            Let others get to know you better! You can do these later
          </h5>
          <br />
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-7">
                <h1 className="text-[20px] font-bold">
                  Add an Image{" "}
                  <span className="text-[12px] text-[#6e6d7a]">
                    Please give image viewer url link
                  </span>
                </h1>

                <input
                  className="outline-none   border-b border-indigo-[#f3f3f4]    p-2 w-[100%]"
                  {...register("image", {})}
                  placeholder="enter a image link without default set a custom image"
                />
              </div>
              <div className="mb-7">
                <h1 className="text-[20px] font-bold">Add your location </h1>

                <input
                  className="  outline-none   border-b border-indigo-[#f3f3f4]    p-2 w-[100%]"
                  {...register("location", {
                    required: "location is required",
                  })}
                  placeholder="Enter a location"
                />
              </div>
              <div className="mb-7">
                <h1 className="text-[20px] font-bold">Company name </h1>

                <input
                  className="  outline-none   border-b border-indigo-[#f3f3f4]    p-2 w-[100%]"
                  {...register("companyName", {})}
                  placeholder="your company name"
                />
                {isError && (
                  <span className="text-red-500">{error?.error}</span>
                )}
              </div>

              <button
                type="submit"
                className={`text-white rounded-md w-[200px]  bg-[#ea4c89] p-2 cursor-pointer}`}
                disabled={isLoading}
              >
                Next
              </button>
            </form>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
}

export default GetStart;
