import React from "react";
import { useGetConversionsQuery } from "../../features/conversions/converionsApi";
import { useSelector } from "react-redux";
import moment from "moment/moment";
import { Link, Outlet } from "react-router-dom";

function ChatUi() {
  const { email: user } = useSelector((state) => state?.auth?.user);
  const { data, isLoading, isError } = useGetConversionsQuery(user);
  const conversion = data?.result;

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

          image,
        } = conversation?.users?.find(
          (participant) => participant.email !== email
        );
        console.log("okay it is outlet", Outlet);

        return (
          <Link to={`/message/${_id}`} key={_id}>
            <div className="flex items-center px-3 py-2 text-sm transition duration-150 ease-in-out cursor-pointer hover:bg-gray-100 focus:outline-none">
              <img
                className="object-cover w-10 h-10 rounded-full"
                src={image}
                alt={image}
              />

              <div className="w-full pb-2 hidden md:block border-b border-gray-300 ">
                <div className="flex justify-between ">
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
      <div className="border-t border-indigo-[#f3f3f4] w-[100%]  "></div>
      <div className=" bg-[#f0f2f5] font-serif py-4 text-[29px] font-bold flex justify-center w-[100%]">
        <h1 className="text-[#]">Inbox</h1>
      </div>
      <div className="bg-[] py-5">
        <div className="w-[100%] mx-auto">
          <div className=" flex lg:grid lg:grid-cols-3 rounded-md">
            <div className="w-[100px]  lg:col-span-1 md:w-full pl-3 md:pl-8">
              <div className="whitespace-nowrap overflow-auto scrollbar-hide h-[calc(100vh_-_129px)]">
                {content}
              </div>
            </div>
            <div
              style={{
                backgroundImage: `url( "https://i.ibb.co/T2B4sCk/svgexport-14.png")`,

                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
              className=" bg-[#f0f2f5]  w-full lg:col-span-2 lg:block border-l border-indigo-[#f3f3f4]"
            >
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChatUi;
