import React from "react";
import { useForm } from "react-hook-form";
import { AiOutlineClose } from "react-icons/ai";
import Modal from "react-modal";
import { useSelector } from "react-redux";
import { useGetUserDataQuery } from "../../features/auth/authApi";
import {
  useAddConversationMutation,
  useConversionQuery,
  useEditConversationMutation,
} from "../../features/conversions/converionsApi";
import Swal from "sweetalert2";

function MessagePopUp({
  modalIsOpen,
  afterOpenModal,
  closeModal,
  customStyles,
  servicesUserInfo,
}) {
  const { email: user } = useSelector((state) => state?.auth?.user);

  const { data: loginUserData } = useGetUserDataQuery(user);
  const loginUser = loginUserData?.data;

  const { data: conversionData, refetch } = useConversionQuery({
    user: loginUser?.email,
    serviceUser: servicesUserInfo?.email,
  });
  const [editConversation, { isSuccess: editConLoading }] =
    useEditConversationMutation();
  const [addconversion, { isSuccess: conversionLoading }] =
    useAddConversationMutation();
  const {
    register,
    formState,
    handleSubmit,

    reset,
    formState: { isDirty, isValid },
  } = useForm({ mode: "onChange" });

  const onSubmit = (message) => {
    if (loginUser?.email && servicesUserInfo?.email) {
      if (conversionData?.result.length > 0) {
        editConversation({
          id: conversionData?.result[0]?._id,
          sender: loginUser,
          data: {
            participants: `${loginUser?.email}-${servicesUserInfo?.email}`,
            users: [loginUser, servicesUserInfo],
            message: message?.message,
            timestamp: new Date().getTime(),
          },
        });
      } else if (conversionData?.result.length === 0) {
        addconversion({
          sender: loginUser,
          data: {
            participants: `${loginUser?.email}-${servicesUserInfo?.email}`,
            users: [loginUser, servicesUserInfo],
            message: message?.message,
            timestamp: new Date().getTime(),
          },
        })
          .unwrap()
          .then((data) => {
            if (data?.id) {
              refetch({
                user: loginUser?.email,
                serviceUser: servicesUserInfo?.email,
              });
            }
          })
          .catch((error) => console.log(error));
      }
      reset();
    } else {
      console.log(
        "there was a Problem please agin latter or refresh this page"
      );
    }
  };

  if (conversionLoading | editConLoading) {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "You message send",
      showConfirmButton: false,
      timer: 2000,
    });
  }

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="rounded-[10px]">
          <button className="w-[100%] flex  justify-end" onClick={closeModal}>
            <span className="text-[#9e9ea7] hover:text-[#ea4c89] hover:rounded-md text-[20px]">
              <AiOutlineClose />
            </span>
          </button>
          <div>
            <div className="my-2 p-4">
              <div className="flex items-center">
                <img
                  src="https://i.ibb.co/LtBvpbr/IMG20211124101014.jpg"
                  alt=""
                  className=" h-[50px] w-[50px] rounded-[50%]"
                />
                <h1 className="ml-3 text-[24px] font-[700] leading-[29px]  ">
                  {servicesUserInfo?.displayName}
                </h1>
              </div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="sm:w-[400px] md:w-[520px] p-3">
                <textarea
                  className="bg-[#f3f3f4] outline-none rounded-[10px] focus:shadow-[0px_0px_2px_4px_rgba(234,76,137,0.24)] border-solid  focus:bg-white p-2 w-[100%] h-[110px] text-[14px] font-[400] leading-[28px] hover:shadow-[0px_0px_2px_4px_rgba(234,76,137,0.24)] hover:bg-white"
                  {...register("message")}
                  required
                  placeholder="Start a conversation with Design Squad"
                />

                <div className=" w-[100%] flex items-center justify-end ">
                  <button
                    onClick={closeModal}
                    type="button"
                    className="my-2 mr-5 bg-[#f3f3f4] hover:bg-[#e7e7e9] h-[40px] w-[70px] rounded-[8px] text-[14px] font-[500] leading-[20px] "
                  >
                    Cancel
                  </button>
                  <button
                    className={`bg-[#ea4c89] hover:bg-[#f082ac] h-[40px] w-[70px] rounded-[8px] text-[14px] font-[500] leading-[20px]  ${
                      !isDirty || !isValid ? "cursor-not-allowed" : "null"
                    }`}
                    type="submit"
                    disabled={!formState.isValid}
                  >
                    Send
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default MessagePopUp;
