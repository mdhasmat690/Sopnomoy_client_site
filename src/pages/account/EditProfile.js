import React from "react";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useNavigate,
  Outlet,
} from "react-router-dom";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

function EditProfile(props) {
  const navigate = useNavigate();

  const [image, setImage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [profileImage, setProfileImage] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setProfileImage(file);
    const reader = new FileReader();

    reader.onload = () => {
      setImage(reader.result);
    };

    reader.readAsDataURL(file);
  };

  const handleSubmit = () => {
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
        console.log(data?.url);
        setProfileImage("");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <div className="flex">
        <img
          className="w-[80px] h-[80px] rounded-[50%]"
          src={
            image ||
            "https://cdn.dribbble.com/assets/default_avatars/avatar-6-91d8278f6ad70a5aebebacac5ab583e57ef1930f085dec5247de9223c765089c.png"
          }
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
              JPG, GIF or PNG. Max size of 800K
            </h1>

            <button
              onClick={handleSubmit}
              className="bg-[#ea4c89] text-[15px] rounded-[8px] py-[10px] px-[16px] "
              disabled={isLoading}
            >
              {isLoading ? "Uploading..." : "Upload Now"}
            </button>
          </form>
        </div>
      </div>

      <form /* onSubmit={handleSubmit(onSubmit)} */>
        <div className="my-5">
          <label className="text-[14px] font-[600]">Name</label>
          <input
            className=" text-[16px] h-[48px] py-[10px] px-[16px] my-2 border-[2px] outline-none rounded-[6px] focus:shadow-[0px_0px_2px_4px_rgba(234,76,137,0.24)]     focus:bg-white p-2 w-[100%] hover:shadow-[0px_0px_2px_4px_rgba(234,76,137,0.24)] "
            defaultValue={"Md Hasmat" || ""}
            // {...register("username")}
            required
          />
        </div>
        <div className="my-5">
          <label className="text-[14px] font-[600]">Location</label>
          <input
            className=" text-[16px] h-[48px] py-[10px] px-[16px] my-2 border-[2px] outline-none rounded-[6px] focus:shadow-[0px_0px_2px_4px_rgba(234,76,137,0.24)]     focus:bg-white p-2 w-[100%] hover:shadow-[0px_0px_2px_4px_rgba(234,76,137,0.24)] "
            defaultValue={"Dhaka" || ""}
            // {...register("username")}
            required
          />
        </div>

        <div className="my-5">
          <label className="font-bold ">Bio</label>
          <textarea
            className="min-h-[108px] h-[48px] my-2  border-[2px] outline-none rounded-[6px] focus:shadow-[0px_0px_2px_4px_rgba(234,76,137,0.24)]     focus:bg-white p-2 w-[100%] hover:shadow-[0px_0px_2px_4px_rgba(234,76,137,0.24)] "
            defaultValue={"Test" || ""}
            // {...register("userEmail")}
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
            defaultValue={"Md Hasmat" || ""}
            // {...register("username")}
            required
          />
        </div>
        <h1 className="text-red-700 my-2">
          This field not working now we are working now
        </h1>

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
