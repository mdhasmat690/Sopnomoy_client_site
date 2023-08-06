import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import {
  useGetUserDataQuery,
  useUserUpdateMutation,
} from "../../features/auth/authApi";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import Swal from "sweetalert2";

function EditProfile() {
  const { email } = useSelector((state) => state?.auth?.user);

  const { data } = useGetUserDataQuery(email);
  const user = data?.data;

  const [updateUserMore, { isSuccess, isLoading: updateLoading }] =
    useUserUpdateMutation();

  const {
    register,

    handleSubmit,

    reset,
  } = useForm();

  useEffect(() => {
    reset();
  }, [user, reset]);

  const [image, setImage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [profileImage, setProfileImage] = useState("");
  const [error, setError] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file.size > 614400) {
      setError("Please select another image.");
      setImage("");
      return;
    }

    setError("");

    setProfileImage(file);
    const reader = new FileReader();

    reader.onload = () => {
      setImage(reader.result);
    };

    reader.readAsDataURL(file);
  };

  const handleSubmitCloudinary = () => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "bzhujgp9");
    data.append("cloud_name", "drrefx3o4");
    setIsLoading(true);

    fetch("https://api.cloudinary.com/v1_1/drrefx3o4/image/upload", {
      method: "POST",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false);
        setProfileImage("");
        setImageUrl(data.url);
      })
      .catch((error) => console.log(error));
  };

  const onSubmit = (data) => {
    data.image = imageUrl;
    const fullData = data;
    updateUserMore({ id: user?._id, data });
  };
  if (updateLoading) {
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
    <div>
      <div className="flex">
        <img
          className="w-[80px] h-[80px] rounded-[50%]"
          src={image || `${user?.image}`}
          alt=""
        />

        <div className="ml-4">
          <form>
            <input
              className="text-[14px]"
              type="file"
              accept="image/png,image/jpeg"
              name="image"
              onChange={handleImageChange}
              required
            />
            <br />

            <h1 className="text-[#9e9ea7] text-[12px] my-3">
              JPG, GIF or PNG. Max size of 600K{" "}
              <span className="text-red-600">{error}</span>
            </h1>
            {imageUrl ? (
              <>
                {" "}
                <button
                  className="bg-[#ea4c89] text-[15px] rounded-[8px] py-[10px] px-[16px] "
                  type="button"
                >
                  Uploaded
                </button>
              </>
            ) : (
              <>
                {" "}
                <button
                  onClick={handleSubmitCloudinary}
                  className="bg-[#ea4c89] text-[15px] rounded-[8px] py-[10px] px-[16px] "
                  disabled={isLoading}
                >
                  {isLoading ? "Uploading..." : "Upload Now"}
                </button>
              </>
            )}
          </form>
        </div>
      </div>

      <form className="md:w-full  w-[90%]" onSubmit={handleSubmit(onSubmit)}>
        <div className="my-5">
          <label className="text-[14px] font-[600]">Name</label>
          <input
            className=" text-[16px] h-[48px] py-[10px] px-[16px] my-2 border-[2px] outline-none rounded-[6px] focus:shadow-[0px_0px_2px_4px_rgba(234,76,137,0.24)]     focus:bg-white p-2 w-[100%] hover:shadow-[0px_0px_2px_4px_rgba(234,76,137,0.24)] "
            defaultValue={user?.displayName ? user?.displayName : ""}
            {...register("displayName")}
            required
          />
        </div>
        <div className="my-5">
          <label className="text-[14px] font-[600]">Location</label>
          <input
            className=" text-[16px] h-[48px] py-[10px] px-[16px] my-2 border-[2px] outline-none rounded-[6px] focus:shadow-[0px_0px_2px_4px_rgba(234,76,137,0.24)]     focus:bg-white p-2 w-[100%] hover:shadow-[0px_0px_2px_4px_rgba(234,76,137,0.24)] "
            defaultValue={user?.location ? user?.location : ""}
            {...register("location")}
            required
          />
        </div>

        <div className="my-5">
          <label className="font-bold ">Bio</label>
          <textarea
            className="min-h-[108px] h-[48px] my-2  border-[2px] outline-none rounded-[6px] focus:shadow-[0px_0px_2px_4px_rgba(234,76,137,0.24)]     focus:bg-white p-2 w-[100%] hover:shadow-[0px_0px_2px_4px_rgba(234,76,137,0.24)] "
            defaultValue={user?.bio ? user?.bio : ""}
            {...register("bio")}
            required
          />
        </div>

        <h3 className="text-[#6e6d7a] text-[15px] font-[700] pt-4 pb-3">
          ONLINE PRESENCE
        </h3>
        <div className="border-t border-solid border-[#dbdbde]"></div>

        <div className="my-5">
          <label className="text-[16px] font-[600]">Personal Website</label>
          <input
            className=" text-[16px] h-[48px] py-[10px] px-[16px] my-2 border-[2px] outline-none rounded-[6px] focus:shadow-[0px_0px_2px_4px_rgba(234,76,137,0.24)]     focus:bg-white p-2 w-[100%] hover:shadow-[0px_0px_2px_4px_rgba(234,76,137,0.24)] "
            defaultValue={user?.personalWeb ? user?.personalWeb : ""}
            {...register("personalWeb")}
            required
          />
        </div>

        <div className="flex justify-end">
          {" "}
          <button
            className={`my-anchor-element text-white rounded-md   bg-[#ea4c89] px-3 py-2 
                    cursor-pointer`}
            type="submit"
          >
            Save Changes
          </button>
        </div>
      </form>
      <Tooltip
        anchorSelect=".my-anchor-element"
        content="We are busy now coming soon fixed it"
        style={{ backgroundColor: "red" }}
      />
    </div>
  );
}

export default EditProfile;
