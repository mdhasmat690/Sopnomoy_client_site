import React, { useState } from "react";
import NaveDrop from "./NaveDrop";
import { BiMessageAltDots } from "react-icons/bi";
import { AiFillFolderAdd, AiFillStar } from "react-icons/ai";
import { MdFavorite, MdLogin, MdShowChart } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../features/auth/authSlice";
import { useGetUserDataQuery } from "../../features/auth/authApi";
import { FiLogOut } from "react-icons/fi";

const NaveBar = () => {
  const { email: user } = useSelector((state) => state?.auth?.user);
  const { data } = useGetUserDataQuery(user);
  const userData = data?.data;
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();

  const userLogOut = () => {
    dispatch(logOut());
  };

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[white] xl:container mx-auto   z-50  ">
      <div className="flex items-center font-medium justify-between">
        <div className="z-50 p-5 md:w-auto w-full flex items-center justify-between">
          <Link to="/">
            <img
              src="https://img.freepik.com/free-vector/letter-h-with-blossoms_53876-66878.jpg?size=626&ext=jpg&ga=GA1.2.1738658831.1683692513&semt=ais"
              alt="logo"
              className="md:cursor-pointer h-10 w-10 rounded-[50%]"
            />
          </Link>

          <ul className="md:flex hidden  items-center text-[#6e6d7a] font-[500] ">
            <NaveDrop />
          </ul>

          <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
            <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
          </div>
        </div>

        <div className="md:block hidden">
          {!user ? (
            <>
              <div className="flex items-center text-[#6e6d7a]">
                <span className="mr-[-15px] cursor-pointer text-[20px]">
                  <MdLogin className="w-12" />
                </span>
                <button
                  onClick={() => navigate(`/login`)}
                  className="ml-5 text-[#6a6d7a]"
                >
                  Sign In
                </button>
                <button
                  onClick={() => navigate(`/signUp`)}
                  className="ml-5 text-white rounded-lg bg-[#ea4c89] p-2 "
                >
                  Sign Up
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="flex items-center text-[#6e6d7a]">
                <span
                  onClick={userLogOut}
                  className="cursor-pointer ml-4 text-[24px]"
                >
                  <FiLogOut />
                </span>
                <div className="group">
                  {userData?.image ? (
                    <img
                      className="ml-5 w-[42px] h-[42px] rounded-[50%] text-[#6a6d7a] cursor-pointer"
                      src={userData.image}
                      alt=""
                    />
                  ) : (
                    <img
                      className="ml-5 w-[42px] h-[42px] rounded-[50%] text-[#6a6d7a]"
                      src="https://i.ibb.co/8bhRHSr/manIcone.png"
                      alt=""
                    />
                  )}

                  <div className="absolute  z-10">
                    <div className="absolute top-15 hidden group-hover:md:block hover:md:block ml-[-80px]">
                      <div className="py-2">
                        <div
                          className="w-4 h-4 left-28 mx-auto absolute 
                         mt-1 rotate-45 bg-white  shadow-[-4px_-4px_3px_-3px_rgba(0,0,0,0.1)]"
                        ></div>
                      </div>
                      <div
                        style={{
                          boxShadow:
                            "0 5px 16px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
                        }}
                        className="p-5 mr-10 bg-white rounded-md w-[100%]"
                      >
                        <div className="border border-indigo-[#f3f3f4] rounded-lg p-6 w-[97%] mt-5 mx-auto shadow-lg text-center">
                          <button className="bg-[rgba(77,68,198,0.1)] w-[140px] p-1 text-[14px] text-[#4d44c6] uppercase font-[400] rounded-lg mb-3">
                            Limited Account
                          </button>
                          <div className="w-[105%] mx-auto mb-1">
                            <h1 className="text-[14px] text-[#3d3d4e] ">
                              Get a free Designer Account to access all
                              features.
                            </h1>
                          </div>
                          <h3 className="text-[14px] font-[400] leading-[20px] text-[#ea4c89] underline cursor-pointer">
                            Learn more
                          </h3>
                        </div>
                        <div className="w-[90%] mx-auto">
                          <Link to={"/profile"}>
                            <h1 className="cursor-pointer text-[#6e6d7a] text-[14px] my-3 hover:bg-[rgba(13,12,34,0.03)]">
                              Profile
                            </h1>
                          </Link>
                          <hr className="text-[#e7e7e9]" />
                          <Link to={"/account/editProfile"}>
                            <h1 className="text-[#6e6d7a] text-[14px] my-3 cursor-pointer">
                              Edit Profile
                            </h1>
                          </Link>
                          <h1 className="text-[#6e6d7a] text-[14px] my-3 cursor-pointer">
                            Edit Work Preferences
                          </h1>
                          <hr className="text-[#e7e7e9]" />

                          <div className="flex items-center cursor-pointer">
                            <span className="mr-3 text-[#6e6d7a] text-[14px] font-bold">
                              {" "}
                              <MdShowChart />
                            </span>
                            <h1 className="text-[#6e6d7a] text-[14px] my-3">
                              My Boosted Shots
                            </h1>
                          </div>

                          <div className="flex items-center cursor-pointer">
                            <span className="mr-3 text-[#6e6d7a] text-[18px] font-bold">
                              <MdFavorite />
                            </span>
                            <h1 className="text-[#6e6d7a] text-[14px]">
                              My Likes
                            </h1>
                          </div>

                          <div className="flex items-center cursor-pointer">
                            <span className="mr-3 text-[#6e6d7a] text-[18px] font-bold">
                              <AiFillFolderAdd />
                            </span>
                            <h1 className="text-[#6e6d7a] text-[14px] my-3">
                              My Collections
                            </h1>
                          </div>

                          <Link to="/inbox">
                            <div className="flex items-center cursor-pointer">
                              <span className="mr-3 text-[#6e6d7a] text-[18px] font-bold">
                                <BiMessageAltDots />
                              </span>
                              <h1 className="text-[#6e6d7a] text-[14px] mb-2">
                                Inbox
                              </h1>
                            </div>
                          </Link>

                          <div className="flex items-center cursor-pointer">
                            <span className="mr-3 text-[#ea4c89] text-[18px] font-bold">
                              <AiFillStar />
                            </span>
                            <h1 className="text-[#6e6d7a] text-[15px]">
                              Go Pro
                            </h1>
                          </div>
                          <hr className="text-[#e7e7e9] mb-3 mt-4" />
                          <Link to={"/account"}>
                            <h1 className="cursor-pointer text-[#6e6d7a] text-[14px] my-3">
                              Account Settings
                            </h1>
                          </Link>

                          <h1 className="cursor-pointer text-[#6e6d7a] text-[14px] my-3">
                            Sign Out
                          </h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => navigate(`/login`)}
                  className="ml-5 text-white rounded-lg bg-[#ea4c89] p-2 "
                >
                  Upload
                </button>
              </div>
            </>
          )}
        </div>
        {/* Mobile nav */}
        <ul
          className={`
      md:hidden bg-white absolute z-40	 w-[100%] h-[50%] overflow-auto scrollbar-hide  top-0 bottom-0 py-24 pl-4
      duration-500 ${open ? "left-0" : "left-[-100%] text-[#6e6d7a] font-[500]"}
      `}
        >
          <NaveDrop />
          <div className="py-5">
            <div className="md:hidden block">
              {!user ? (
                <>
                  <div className="flex items-center text-[#6e6d7a]">
                    <span className="mr-[-15px] cursor-pointer text-[20px]">
                      <MdLogin className="w-12" />
                    </span>
                    <button
                      onClick={() => navigate(`/login`)}
                      className="ml-5 text-[#6a6d7a]"
                    >
                      Sign In
                    </button>
                    <button
                      onClick={() => navigate(`/signUp`)}
                      className="ml-5 text-white rounded-lg bg-[#ea4c89] p-2 "
                    >
                      Sign Up
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex items-center text-[#6e6d7a]">
                    <span
                      onClick={userLogOut}
                      className="cursor-pointer ml-4 text-[24px]"
                    >
                      <FiLogOut />
                    </span>
                    <div className="group">
                      <div onClick={toggleOpen}>
                        {userData?.image ? (
                          <img
                            className="ml-5 w-[42px] h-[42px] rounded-[50%] text-[#6a6d7a] cursor-pointer"
                            src={userData.image}
                            alt=""
                          />
                        ) : (
                          <img
                            className="ml-5 w-[42px] h-[42px] rounded-[50%] text-[#6a6d7a]"
                            src="https://i.ibb.co/8bhRHSr/manIcone.png"
                            alt=""
                          />
                        )}
                      </div>
                    </div>

                    <button
                      onClick={() => navigate(`/login`)}
                      className="ml-5 text-white rounded-lg bg-[#ea4c89] p-2 "
                    >
                      Upload
                    </button>
                  </div>
                  {!isOpen && (
                    <div className="my-2">
                      <>
                        <div className="py-2">
                          <div
                            className="w-4 h-4 left-20 mx-auto absolute 
                         mt-1 rotate-45 bg-white  shadow-[-4px_-4px_3px_-3px_rgba(0,0,0,0.1)]"
                          ></div>
                        </div>
                        <div
                          style={{
                            boxShadow:
                              "0 5px 16px 0px rgb(0 0 0 / 0.1), 0 -2px 4px -2px rgb(0 0 0 / 0.1)",
                          }}
                          className="p-5 mr-10 bg-white rounded-md w-[100%]"
                        >
                          <div className="w-[90%] mx-auto">
                            <Link to={"/profile"}>
                              <h1 className="cursor-pointer text-[#6e6d7a] text-[14px] my-3 hover:bg-[rgba(13,12,34,0.03)]">
                                Profile
                              </h1>
                            </Link>
                            <hr className="text-[#e7e7e9]" />
                            <Link to={"/account/editProfile"}>
                              <h1 className="text-[#6e6d7a] text-[14px] my-3 cursor-pointer">
                                Edit Profile
                              </h1>
                            </Link>
                            <h1 className="text-[#6e6d7a] text-[14px] my-3 cursor-pointer">
                              Edit Work Preferences
                            </h1>
                            <hr className="text-[#e7e7e9]" />

                            <div className="flex items-center cursor-pointer">
                              <span className="mr-3 text-[#6e6d7a] text-[14px] font-bold">
                                {" "}
                                <MdShowChart />
                              </span>
                              <h1 className="text-[#6e6d7a] text-[14px] my-3">
                                My Boosted Shots
                              </h1>
                            </div>

                            <div className="flex items-center cursor-pointer">
                              <span className="mr-3 text-[#6e6d7a] text-[18px] font-bold">
                                <MdFavorite />
                              </span>
                              <h1 className="text-[#6e6d7a] text-[14px]">
                                My Likes
                              </h1>
                            </div>

                            <div className="flex items-center cursor-pointer">
                              <span className="mr-3 text-[#6e6d7a] text-[18px] font-bold">
                                <AiFillFolderAdd />
                              </span>
                              <h1 className="text-[#6e6d7a] text-[14px] my-3">
                                My Collections
                              </h1>
                            </div>

                            <Link to="/inbox">
                              <div className="flex items-center cursor-pointer">
                                <span className="mr-3 text-[#6e6d7a] text-[18px] font-bold">
                                  <BiMessageAltDots />
                                </span>
                                <h1 className="text-[#6e6d7a] text-[14px] mb-2">
                                  Inbox
                                </h1>
                              </div>
                            </Link>

                            <div className="flex items-center cursor-pointer">
                              <span className="mr-3 text-[#ea4c89] text-[18px] font-bold">
                                <AiFillStar />
                              </span>
                              <h1 className="text-[#6e6d7a] text-[15px]">
                                Go Pro
                              </h1>
                            </div>
                            <hr className="text-[#e7e7e9] mb-3 mt-4" />
                            <Link to={"/account"}>
                              <h1 className="cursor-pointer text-[#6e6d7a] text-[14px] my-3">
                                Account Settings
                              </h1>
                            </Link>

                            <h1 className="cursor-pointer text-[#6e6d7a] text-[14px] my-3">
                              Sign Out
                            </h1>
                          </div>
                        </div>
                      </>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default NaveBar;
