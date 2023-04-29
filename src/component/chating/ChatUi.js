import React from "react";
import { useGetConversionsQuery } from "../../features/conversions/converionsApi";
import { useSelector } from "react-redux";
import moment from "moment/moment";
import { AiOutlineSend } from "react-icons/ai";
import { IoIosSend } from "react-icons/io";
import { Link, Outlet } from "react-router-dom";
import NaveBar from "../home/NaveBar";
import Footer from "../home/Footer";

function ChatUi() {
  const { email: user } = useSelector((state) => state?.auth?.user);
  const { data, isLoading, isError } = useGetConversionsQuery(user);
  const conversion = data?.result;

  // decide what to render
  let content = null;

  if (isLoading) {
    content = <li className="m-2 text-center">Loading...</li>;
  } else if (!isLoading && isError) {
    content = (
      <li className="m-2 text-center">
        <>there was an error</>
      </li>
    );
  } else if (!isLoading && !isError && conversion?.length === 0) {
    content = <li className="m-2 text-center">No conversations found!</li>;
  } else if (!isLoading && !isError && conversion?.length > 0) {
    content = conversion
      ?.slice()
      ?.sort((a, b) => b.timestamp - a.timestamp)
      .map((conversation) => {
        const { _id, message, timestamp } = conversation;
        const email = user || {};
        const {
          displayName,
          email: partnerEmail,
          image,
        } = conversation?.users?.find(
          (participant) => participant.email !== email
        );

        return (
          <Link to={`/message/${_id}`} key={_id}>
            <div className="flex items-center px-3 py-2 text-sm transition duration-150 ease-in-out border-b border-gray-300 cursor-pointer hover:bg-gray-100 focus:outline-none">
              <img
                className="object-cover w-10 h-10 rounded-full"
                src={image}
                alt={image}
              />

              <div className="w-full pb-2 hidden md:block">
                <div className="flex justify-between">
                  <span className="block ml-2 font-semibold text-gray-600">
                    {displayName}
                  </span>
                  <span className="block ml-2 text-sm text-gray-600">
                    {moment(timestamp).fromNow()}
                  </span>
                </div>
                <span className="block ml-2 text-sm text-gray-600">
                  {message}
                </span>
              </div>
            </div>
          </Link>
        );
      });
  }

  return (
    <>
      {/* <NaveBar /> */}
      {/*   <br />
      <br />
      <br />
    <br /> */}
      <div className="border-t border-indigo-[#f3f3f4] w-[100%]  "></div>
      <div className="bg-[pink] py-5">
        <div className="w-[90%] mx-auto">
          <div className=" font-serif py-4 text-[29px] font-bold flex justify-center w-[90%]">
            <h1>Inbox</h1>
          </div>
          <div className="  flex lg:grid lg:grid-cols-3 rounded-md">
            <div className="w-[100px]  lg:col-span-1 md:w-full ">
              <div className="whitespace-nowrap overflow-auto scrollbar-hide h-[calc(100vh_-_129px)]">
                {content}
              </div>
              {/* <Blank /> */}
            </div>
            <div className="w-full lg:col-span-2 lg:block border-l border-indigo-[#f3f3f4]">
              {/*  <div className="relative w-full h-[calc(100vh_-_197px)] p-6 overflow-y-auto flex flex-col-reverse bg-[pink]">
              <ul className="space-y-2">
                <li className={`flex justify-end`}>
                  <div className="relative max-w-xl px-4 py-2 text-gray-700 rounded shadow">
                    <span className="block">message</span>
                  </div>
                </li>
              </ul>
            </div> */}
              {/*  {<div className="grid  md:grid-cols-8 gap-4 items-center">
              <div className=" col-span-7">
                {" "}
                <input
                  className="bg-[#f3f3f4] outline-none  border-solid  focus:bg-white p-2 w-[100%] h-[70px] text-[14px] font-[400] leading-[28px]   focus:border border-[pink]"
                  {...register("message")}
                  required
                  placeholder="Ask your Question"
                />
              </div>
              <div className="col-span-1">
                <button className="text-[black] text-[40px]" type="submit">
                  <IoIosSend />
                </button>
              </div>
            </div>} */}
              <Outlet />
            </div>
            {/*  */}
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default ChatUi;
