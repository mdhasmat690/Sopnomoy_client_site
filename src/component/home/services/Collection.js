import React from "react";
import { useForm } from "react-hook-form";
import Modal from "react-modal";
import { useCreateCollectionMutation } from "../../../features/services/servicesApi";
import { useSelector } from "react-redux";
const customStyles = {
  overlay: {
    backgroundColor: "rgba(30,30,30,0.9)",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "10px",
  },
};

function Collection({ service, modalIsOpen, closeModal, afterOpenModal }) {
  const { user } = useSelector((state) => state?.auth);
  const userEmail = user?.email;
  const [createCollection, {}] = useCreateCollectionMutation();

  const {
    register,
    formState,
    handleSubmit,
    setFocus,
    control,
    reset,
    formState: { isSubmitting, isDirty, isValid },
  } = useForm({ mode: "onChange" });

  const onSubmit = (e) => {
    const data = {
      loginUserEmail: userEmail,
      collectionName: e.collectionName,
      collectionNameDescripction: e.desc,
      name: service?.productName,
      image: service?.imgUrl,
      mainServiceId: service._id,
    };
    createCollection(data);
    reset();
  };
  const handleCancel = (message) => {
    // console.log(message);
  };

  return (
    <div className=" ">
      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        ariaHideApp={false}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="px-[40px]">
          {/* <button className="w-[100%] flex  justify-end" onClick={closeModal}>
            <span className="text-[#9e9ea7] hover:text-[#ea4c89] hover:rounded-md text-[20px]">
              <AiOutlineClose />
            </span>
          </button> */}
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="sm:w-[400px] md:w-[550px] p-3">
                <div>
                  <h1 className="text-[16px] font-[500] text-[#0d0c22]">
                    Create a new collection
                  </h1>
                  <div className="border-t-[1px] border-[#ddd] w-[100%] my-2 pb-3"></div>
                </div>

                <div className="my-6">
                  <label className="font-[500] text-[16px] text-[#0d0c22]">
                    Name
                  </label>
                  <input
                    className="bg-[#f3f3f4] outline-none rounded-[6px] mt-2 focus:shadow-[0px_0px_2px_4px_rgba(234,76,137,0.24)]  border-solid   focus:bg-white p-2 w-[100%]"
                    {...register("collectionName")}
                    required
                  />
                </div>

                <div>
                  <label className="font-[500] text-[16px] text-[#0d0c22]">
                    Description (optional)
                  </label>
                  <textarea
                    className="bg-[#f3f3f4] outline-none rounded-[10px] mt-2 focus:shadow-[0px_0px_2px_4px_rgba(234,76,137,0.24)] border-solid  focus:bg-white p-2 w-[100%] h-[110px] text-[14px] font-[400] leading-[28px] hover:shadow-[0px_0px_2px_4px_rgba(234,76,137,0.24)] hover:bg-white"
                    {...register("desc")}
                    required
                    placeholder="Start a conversation with Design Squad"
                  />
                </div>

                <div className=" w-[100%] flex items-center justify-start mt-2">
                  <input
                    className="my-2 mr-5 bg-[#ea4c89] hover:bg-[#f082ac] text-white h-[40px] w-[30%] rounded-[8px] text-[14px] font-[500] leading-[20px] "
                    value="  Create Collection"
                    type="submit"
                    name="commit"
                  />

                  <button className="text-center items-center  my-2 mr-5 bg-[#f3f3f4] hover:bg-[#e7e7e9] h-[40px] w-[70px] rounded-[8px] text-[14px] font-[500] leading-[20px] ">
                    Cancel
                  </button>
                  {/* <button
                    className={`bg-[#ea4c89] hover:bg-[#f082ac] h-[40px] w-[70px] rounded-[8px] text-[14px] font-[500] leading-[20px]  ${
                      !"isDirty" || !"isValid" ? "cursor-not-allowed" : "null"
                    }`}

                    // disabled={!formState.isValid}
                  >
                    Send
                  </button> */}
                </div>
              </div>
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default Collection;
