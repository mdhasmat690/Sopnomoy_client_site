import React from "react";
import { IoIosSend } from "react-icons/io";
import { useParams } from "react-router-dom";
import NaveBar from "../home/NaveBar";
import { useGetMessagesQuery } from "../../features/message/messagesApi";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import {
  useConversionQuery,
  useEditConversationMutation,
} from "../../features/conversions/converionsApi";
import { useGetUserDataQuery } from "../../features/auth/authApi";

function Dashboard() {
  const { email: user } = useSelector((state) => state?.auth?.user);
  const { id } = useParams();
  const { data } = useGetMessagesQuery(id);
  const [editConversation, {}] = useEditConversationMutation();
  const messages = data?.result;

  const { data: loginUserData } = useGetUserDataQuery(user);
  // const loginUser = loginUserData?.data;

  // const participantUser =
  //       info.receiver.email !== loggedInUser.email
  //           ? info.receiver
  //           : info.sender;

  // const { data: conversionData, refetch } = useConversionQuery({
  //   // user: loginUser?.email,
  //   // serviceUser: servicesUser?.email,
  // });

  const {
    register,
    formState,
    handleSubmit,
    setFocus,
    control,
    reset,
    formState: { isSubmitting, isDirty, isValid },
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

  // console.log(sender?.email);

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
        className="whitespace-nowrap overflow-auto scrollbar-hide w-full h-[calc(100vh_-_197px)] p-6   flex flex-col-reverse "
      >
        <ul className="space-y-2">
          {messages
            ?.slice()
            ?.sort((a, b) => a.timestamp - b.timestamp)
            ?.map((message) => {
              const { message: lastMessage, id, sender } = message || {};

              return (
                <h1
                  key={id}
                  className={`  flex ${
                    sender.email !== user ? "justify-start" : "justify-end"
                  }`}
                >
                  <div className=" max-w-xl px-4 py-2 text-gray-700 rounded shadow">
                    <span className="block">{message?.message}</span>
                  </div>
                </h1>
              );
            })}

          {/*  {messages?.map((message, index) => (
             const {
              message: lastMessage,
              id,
              sender,
          } = message || {};
          return(  <li key={index} className={`flex justify-end`}>
              <div className="relative max-w-xl px-4 py-2 text-gray-700 rounded shadow">
                <span className="block">{message?.message}</span>
              </div>
            </li>)
          ))} */}
        </ul>
      </div>
      <div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid  md:grid-cols-8 gap-4 items-center"
        >
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
        </form>
      </div>
    </>
  );
}

export default Dashboard;
