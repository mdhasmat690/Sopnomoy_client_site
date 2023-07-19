import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import NaveBar from "../../component/home/NaveBar";
import Footer from "../../component/home/Footer";
import { Tooltip } from "react-tooltip";
import { useSelector } from "react-redux";
import { useGetUserDataQuery } from "../../features/auth/authApi";

function Account() {
  const { email } = useSelector((state) => state?.auth?.user);

  const { data } = useGetUserDataQuery(email);
  const user = data?.data;
  const location = useLocation();

  let name;
  if (location.pathname == "/account") {
    name = "General";
  } else if (location.pathname == "/account/editProfile") {
    name = "Edit Profile";
  } else if (location.pathname == "/account/socialProfile") {
    name = "Social Profile";
  } else if (location.pathname == "/account/section") {
    name = "Section Application";
  }

  return (
    <div>
      <NaveBar />
      <hr />

      <div className="w-[70%] mx-auto my-14">
        <div className="flex items-center">
          <div>
            {" "}
            <img
              src={user?.image}
              alt=""
              className="h-[48px] w-[48px] rounded-[50%]"
            />
          </div>
          <div className="ml-5">
            <h1 className="text-[#0d0c22] text-[20px] font-[500]">
              {user?.displayName} <span className="text-[#dbdbde]">/</span>{" "}
              <span className="my-anchor-element">{name}</span>
            </h1>
            <h4 className="text-[14px] text-[#6e6d7a]">
              Update your username and manage your account
            </h4>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-8 my-10">
          <div className="col-span-1  ">
            <ul className="text-[17px] leading-1 text-[#6e6d7a]">
              <Link to={"/account"}>
                {" "}
                <li className="my-2">General </li>
              </Link>
              <Link to={"/account/editProfile"}>
                <li className="my-2">Edit Profile </li>
              </Link>
              <Link to={"/account/socialProfile"}>
                <li className="my-2  ">Social Profile </li>
              </Link>
              <Link to={"/account"}>
                <li className="my-2 my-anchor-element">Email Notifications</li>
              </Link>
              <Link to={"/account/section"}>
                <li className="my-2"> Sessions Applications </li>
              </Link>
              <li className="my-2 mb-4 my-anchor-element"> Billing </li>
              <hr />
              <Link to={"/deleteAccount"}>
                <li className="my-4 text-[#ff5555] my-anchor-element">
                  Delete Account
                </li>
              </Link>
            </ul>
          </div>
          <div className="col-span-2">
            <Outlet />
          </div>
        </div>
      </div>
      {/* <Footer /> */}
      <Tooltip
        anchorSelect=".my-anchor-element"
        content="We are busy now coming soon fixed it"
        style={{ backgroundColor: "red" }}
      />
    </div>
  );
}

export default Account;
