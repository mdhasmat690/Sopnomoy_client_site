import React, { useState } from "react";
import NaveDrop from "./NaveDrop";
import { FiArrowRightCircle } from "react-icons/fi";
import { MdLocalPostOffice } from "react-icons/md";
import Video from "./video/Video";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../features/auth/authSlice";
import { useGetUserDataQuery } from "../../features/auth/authApi";
import { FiLogOut } from "react-icons/fi";

const NaveBar = () => {
  const { email: user } = useSelector((state) => state?.auth?.user);

  const { data } = useGetUserDataQuery(user);

  const userData = data?.data;
  // const { user, logOut: log, reDir } = useAuth();
  const dispatch = useDispatch();
  // console.log(user);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const userLogOut = () => {
    dispatch(logOut());
  };

  return (
    <nav className="bg-[white] xl:container mx-auto">
      <div className="flex items-center font-medium justify-between">
        <div className="z-50 p-5 md:w-auto w-full flex items-center justify-between">
          <img
            src="https://i.ibb.co/z8S8RST/about.jpg"
            alt="logo"
            className="md:cursor-pointer h-12"
          />

          <ul className="md:flex hidden  items-center text-[#6e6d7a] font-[500]">
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
                <span className="mr-[-15px]">
                  <FiArrowRightCircle className="w-12" />
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
                      className="ml-5 w-[42px] h-[42px] rounded-[50%] text-[#6a6d7a]"
                      src={userData.image}
                      alt=""
                    />
                  ) : (
                    <img
                      className="ml-5 w-[42px] h-[42px] rounded-[50%] text-[#6a6d7a]"
                      src="https://cdn-icons-png.flaticon.com/128/3177/3177440.png"
                      alt=""
                    />
                  )}

                  {/*  */}
                  <div>
                    <div className="absolute top-15 hidden group-hover:md:block hover:md:block w-[100%] mr-30">
                      <div className="py-2">
                        <div
                          className="w-4 h-4 left-9 mx-auto absolute 
                         mt-1 rotate-45 bg-white  shadow-[-4px_-4px_3px_-3px_rgba(0,0,0,0.1)]"
                        ></div>
                      </div>
                      {/* 
                    --tw-shadow: 0 5px 16px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
                      
                      */}
                      <div
                        style={{
                          boxShadow:
                            "0 5px 16px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
                        }}
                        className="p-5 mr-10 bg-white"
                      >
                        <h1>eita amar shcool ei khane</h1>
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
      md:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
      duration-500 ${open ? "left-0" : "left-[-100%] text-[#6e6d7a] font-[500]"}
      `}
        >
          <NaveDrop />
          <div className="py-5">
            <div className="flex items-center text-[#6e6d7a]">
              <span className="">
                <FiArrowRightCircle />
              </span>
              <button className="ml-5 text-[#6a6d7a]">Sign In</button>
              <button className="ml-5 text-white rounded-lg bg-[#ea4c89] p-2 ">
                Sign Up
              </button>
            </div>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default NaveBar;

// const NaveBar = () => {
//   return (
//     <nav className="bg-[pink] xl:container mx-auto">
//       <div className="flex items-center  justify-between">
//         <div className="flex items-center">
//           <img
//             src="https://i.ibb.co/z8S8RST/about.jpg"
//             alt="logo"
//             className="md:cursor-pointer h-9"
//           />

//           {/* <ul className="flex justify-evenly md:p-7 sm: p-3 text-[#6e6d7a] font-[500]">
//             <li className="pl-7">Inspiration</li>
//             <li className="pl-7">Fins work</li>
//             <li className="pl-7">Learn Design</li>
//             <li className="pl-7">Go pro</li>
//             <li className="pl-7">Hire Designer</li>
//           </ul> */}
//           <NaveDrop />
//           <div className="text-3xl md:hidden">
//             <span>logo</span>
//           </div>
//         </div>

//         <div className="md:block hidden">
//           <span className="ml-5">icon</span>
//           <button className="ml-5">Sign Up</button>
//           <button className="ml-5">Sign In</button>
//         </div>
//         {/* Mobile nav */}
//         {/*   <ul
//             className={`
//         md:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
//         duration-500 ${open ? "left-0" : "left-[-100%]"}
//         `}
//           >
//             <li>
//               <Link to="/" className="py-7 px-3 inline-block">
//                 Home
//               </Link>
//             </li>
//             <NavLinks />
//             <div className="py-5">
//               <Button />
//             </div>
//           </ul> */}
//       </div>
//     </nav>
//   );
// };

// export default NaveBar;
