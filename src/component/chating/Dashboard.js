import React, { useEffect } from "react";
import { IoIosSend } from "react-icons/io";
import { useParams } from "react-router-dom";
import { useGetMessagesQuery } from "../../features/message/messagesApi";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { useEditConversationMutation } from "../../features/conversions/converionsApi";

import { io } from "socket.io-client";
import ChatRoom from "./ChatRoom";

function Dashboard() {
  const { email: user } = useSelector((state) => state?.auth?.user);
  const { id } = useParams();
  const { data } = useGetMessagesQuery(id);
  const [editConversation] = useEditConversationMutation();
  const messages = data?.result;

  const socket = io("http://localhost:5000");

  useEffect(() => {
    socket.on("connect", () => {
      console.log("Connected to server!");
    });
  }, [socket]);

  const {
    register,

    handleSubmit,

    reset,
  } = useForm({ mode: "onChange" });

  if (!messages?.length) {
    return <>loading...</>;
  }

  const userInformation = messages[0];
  const login =
    userInformation.receiver.email === user
      ? userInformation.receiver
      : userInformation.sender;
  const senderDetail =
    userInformation.receiver.email !== user
      ? userInformation.receiver
      : userInformation.sender;

  const onSubmit = (message) => {
    editConversation({
      id: userInformation?.conversationId,
      sender: login,
      data: {
        participants: `${login?.email}-${senderDetail.email}`,
        users: [login, senderDetail],
        message: message?.message,
        timestamp: new Date().getTime(),
      },
    });
    reset();
  };

  return (
    <>
      <div
        style={{ overflowY: "" }}
        className="bg-[#efeae2]  whitespace-nowrap overflow-auto scrollbar-hide w-full h-[calc(100vh_-_197px)] p-6   flex flex-col-reverse "
      >
        <ul className="space-y-2">
          {messages
            ?.slice()
            ?.sort((a, b) => a.timestamp - b.timestamp)
            ?.map((message) => {
              const { id, sender } = message || {};

              return (
                <li
                  key={id}
                  className={`  flex ${
                    sender.email !== user ? "justify-start" : "justify-end"
                  }`}
                >
                  <div className=" max-w-xl px-4 py-2 text-gray-700 rounded shadow">
                    <span className="block">{message?.message}</span>
                  </div>
                </li>
              );
            })}
        </ul>
      </div>
      <div className="bg-[#f3f3f4]">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid  md:grid-cols-8 gap-4 items-center "
        >
          <div className=" col-span-7">
            {" "}
            <input
              className="bg-[#f3f3f4] outline-none  border-solid  focus:bg-white p-2 w-[100%] h-[70px] text-[14px] font-[400] leading-[28px]   focus:border border-[pink]"
              {...register("message")}
              required
              placeholder="Type your Question"
            />
          </div>
          <div className="col-span-1">
            <button className="text-[black] text-[40px]" type="submit">
              <IoIosSend />
            </button>
          </div>
        </form>

        <ChatRoom />
      </div>
    </>
  );
}

export default Dashboard;
