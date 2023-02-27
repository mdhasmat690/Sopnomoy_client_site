import React, { useState } from "react";
import NaveDrop from "./NaveDrop";
import { FiArrowRightCircle } from "react-icons/fi";
import { MdLocalPostOffice } from "react-icons/md";
import Video from "./video/Video";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

const NaveBar = () => {
  const { user, logOut, reDir } = useAuth();
  // console.log(user);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

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
          {!user?.email ? (
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
                <span onClick={() => logOut()} className="cursor-pointer ml-4">
                  <img src="https://i.ibb.co/6F1fbGJ/svgexport-31.png" alt="" />
                </span>

                <img
                  className="ml-5 w-[42px] h-[42px] rounded-[50%] text-[#6a6d7a]"
                  src={reDir?.image}
                  alt=""
                />
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
