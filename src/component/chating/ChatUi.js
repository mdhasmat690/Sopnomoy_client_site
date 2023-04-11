import React from "react";
import { useGetConversionsQuery } from "../../features/conversions/converionsApi";
import { useSelector } from "react-redux";
import moment from "moment/moment";

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
    content = conversion.map((conversation) => {
      const { id, message, timestamp } = conversation;
      const email = user || {};
      const {
        displayName,
        email: partnerEmail,
        image,
      } = conversation?.users?.find(
        (participant) => participant.email !== email
      );
      console.log(displayName);

      return (
        <div
          className="flex items-center px-3 py-2 text-sm transition duration-150 ease-in-out border-b border-gray-300 cursor-pointer hover:bg-gray-100 focus:outline-none"
          to="/"
        >
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
            <span className="block ml-2 text-sm text-gray-600">{message}</span>
          </div>
        </div>
      );
    });
  }

  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <div className="">
        <div className="  flex lg:grid lg:grid-cols-3">
          <div className="w-[100px]  lg:col-span-1 md:w-full ">
            <div className="overflow-auto h-[calc(100vh_-_129px)]">
              {content}
            </div>
            {/* <Blank /> */}
          </div>
          <div className="w-full lg:col-span-2 lg:block bg-[pink]">
            <div className="relative w-full h-[calc(100vh_-_197px)] p-6 overflow-y-auto flex flex-col-reverse">
              <ul className="space-y-2">
                <li className={`flex justify-end`}>
                  <div className="relative max-w-xl px-4 py-2 text-gray-700 rounded shadow">
                    <span className="block">message</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/*  */}
        </div>
      </div>
    </>
  );
}

export default ChatUi;
