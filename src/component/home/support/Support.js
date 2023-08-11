import React from "react";
import {
  AiOutlineGlobal,
  AiOutlineSafetyCertificate,
  AiOutlineTeam,
} from "react-icons/ai";
import {
  MdLocationOn,
  MdOutlineMiscellaneousServices,
  MdSupportAgent,
} from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Support() {
  const { user } = useSelector((state) => state.auth);
  return (
    <div className="">
      <br />
      <br />

      <div>
        <div>
          <img
            className="w-[80%] mx-auto block md:hidden"
            src="https://i.ibb.co/QQmhqhp/6029674.jpg"
            alt=""
          />
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-1 w-[90%] mx-auto  my-9">
        <div className="col-span-2">
          <div className="flex md:grid md:grid-cols-2 gap-1 item-center flex-col-reverse	 ">
            <div>
              <div className="flex    md:flex-row flex-col md:mt-0 mt-4">
                <div className="mx-auto">
                  <AiOutlineTeam className="bg-[#f3f3f4] text-[30px] rounded-[50%] " />
                </div>
                <div className="ml-3 mt-0 md:mt-[-10px] flex    ">
                  <div>
                    <h1 className="text-[20px] font-bold pb-2 md:text-left text-center">
                      Dedicated Team
                    </h1>
                    <div class="border-t border-black w-[20%]  mb-3 md:mx-0 mx-auto"></div>
                    <h1 className="md:text-left text-center  w-[70%] md:w-[100%] md:mx-0 mx-auto">
                      Professional employes are there for you to pick the most
                      amazing and fresh fruits.
                    </h1>
                  </div>
                </div>
              </div>
              <div className="flex    md:flex-row flex-col md:mt-5 mt-4">
                <div className="mx-auto">
                  <MdOutlineMiscellaneousServices className="bg-[#f3f3f4] text-[30px] rounded-[50%] " />
                </div>
                <div className="ml-3 mt-0 md:mt-[-10px] flex    ">
                  <div>
                    <h1 className="text-[20px] font-bold pb-2 md:text-left text-center">
                      24/7 Service
                    </h1>
                    <div class="border-t border-black w-[20%]  mb-3 md:mx-0 mx-auto"></div>
                    <h1 className="md:text-left text-center  w-[70%] md:w-[100%] md:mx-0 mx-auto">
                      Professional employes are there for you to pick the most
                      amazing and fresh fruits.
                    </h1>
                  </div>
                </div>
              </div>

              <div className="flex    md:flex-row flex-col md:mt-5 mt-4">
                <div className="mx-auto">
                  <MdSupportAgent className="bg-[#f3f3f4] text-[30px] rounded-[50%] " />
                </div>
                <div className="ml-3 mt-0 md:mt-[-10px] flex    ">
                  <div>
                    <h1 className="text-[20px] font-bold pb-2 md:text-left text-center">
                      Multiple Language
                    </h1>
                    <div class="border-t border-black w-[20%]  mb-3 md:mx-0 mx-auto"></div>
                    <h1 className="md:text-left text-center  w-[70%] md:w-[100%] md:mx-0 mx-auto">
                      Professional employes are there for you to pick the most
                      amazing and fresh fruits.
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img
                className="w-[80%] mx-auto md:block hidden"
                src="https://i.ibb.co/QQmhqhp/6029674.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <div>
            <div className="flex    md:flex-row-reverse flex-col md:mt-0 mt-4">
              <div className="mx-auto">
                <AiOutlineGlobal className="bg-[#f3f3f4] text-[30px] rounded-[50%] " />
              </div>
              <div className="mr-3 mt-0 md:mt-[-10px] flex justify-end  ">
                <div className="">
                  <h1 className="text-[20px] font-bold pb-2 md:text-end text-center ">
                    Global Team
                  </h1>
                  <div class="border-t border-black w-[20%] md:ml-auto md:mx-0 mx-auto  mb-3 "></div>
                  <h1 className=" md:text-end md:mx-0  mx-auto text-center   w-[70%]   md:w-[100%] ">
                    Professional employes are there for you to pick the most
                    amazing and fresh fruits.
                  </h1>
                </div>
              </div>
            </div>
            <div className="flex    md:flex-row-reverse flex-col md:mt-5 mt-4">
              <div className="mx-auto">
                <BiSupport className="bg-[#f3f3f4] text-[30px] rounded-[50%] " />
              </div>
              <div className="mr-3 mt-0 md:mt-[-10px] flex justify-end  ">
                <div className="">
                  <h1 className="text-[20px] font-bold pb-2 md:text-end text-center ">
                    Easy to live chat
                  </h1>
                  <div class="border-t border-black w-[20%] md:ml-auto md:mx-0 mx-auto  mb-3 "></div>
                  <h1 className=" md:text-end md:mx-0  mx-auto text-center   w-[70%]   md:w-[100%] ">
                    Professional employes are there for you to pick the most
                    amazing and fresh fruits.
                  </h1>
                </div>
              </div>
            </div>
            <div className="flex    md:flex-row-reverse flex-col md:mt-5 mt-4">
              <div className="mx-auto">
                <AiOutlineSafetyCertificate className="bg-[#f3f3f4] text-[30px] rounded-[50%] " />
              </div>
              <div className="mr-3 mt-0 md:mt-[-10px] flex justify-end  ">
                <div className="">
                  <h1 className="text-[20px] font-bold pb-2 md:text-end text-center ">
                    Most Safety
                  </h1>
                  <div class="border-t border-black w-[20%] md:ml-auto md:mx-0 mx-auto  mb-3 "></div>
                  <h1 className=" md:text-end md:mx-0  mx-auto text-center  w-[70%] md:w-[100%] ">
                    Professional employes are there for you to pick the most
                    amazing and fresh fruits.
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-center my-10 mx-auto">
          {!user?.email && (
            <>
              <button className="md:ml-5 w-[50%] md:w-[20%] text-white rounded-lg bg-[#ea4c89] p-2 hover:bg-[#f082ac]">
                <Link to={`/signUp`}>Sign Up To Continue</Link>
              </button>
              <button className="text-[#ea4c89] hover:text-[#f082ac] ml-10">
                <Link to={`/login`}>Or Sign In</Link>
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Support;
