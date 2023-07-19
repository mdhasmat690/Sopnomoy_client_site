import React from "react";
import Modal from "react-modal";

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
    overflow: "auto",
    WebkitOverflowScrolling: "touch",
    outline: "none",
    padding: "20px",
    with: "50px",
  },
};

function ContributeStory({ service, modalIsOpen, closeModal, afterOpenModal }) {
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        ariaHideApp={false}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <>
          {" "}
          <div className="px-[40px]">
            {/* <button className="w-[100%] flex  justify-end" onClick={closeModal}>
            <span className="text-[#9e9ea7] hover:text-[#ea4c89] hover:rounded-md text-[20px]">
              <AiOutlineClose />
            </span>
          </button> */}
            <div>
              <form /* onSubmit={handleSubmit(onSubmit)} */>
                <div className="sm:w-[400px] md:w-[550px] p-3">
                  <div>
                    <h1 className="text-[16px] font-[500] text-[#0d0c22]">
                      Write A blog
                    </h1>
                    <div className="border-t-[1px] border-[#ddd] w-[100%]"></div>
                  </div>

                  <div className="my-3">
                    <label className="font-[500] text-[16px] text-[#0d0c22]">
                      Tittle
                    </label>
                    <input
                      className="bg-[#f3f3f4] outline-none rounded-[6px] mt-2 focus:shadow-[0px_0px_2px_4px_rgba(234,76,137,0.24)]  border-solid   focus:bg-white p-2 w-[100%]"
                      // {...register("collectionName")}
                      required
                    />
                  </div>

                  <div>
                    <label className="font-[500] text-[16px] text-[#0d0c22]">
                      Description
                    </label>
                    <textarea
                      className="bg-[#f3f3f4] outline-none rounded-[10px] mt-2 focus:shadow-[0px_0px_2px_4px_rgba(234,76,137,0.24)] border-solid  focus:bg-white p-2 w-[100%] h-[110px] text-[14px] font-[400] leading-[28px] hover:shadow-[0px_0px_2px_4px_rgba(234,76,137,0.24)] hover:bg-white"
                      // {...register("desc")}
                      required
                      placeholder="Start a conversation with Design Squad"
                    />
                  </div>

                  <div className=" w-[100%] flex items-center justify-start mt-2">
                    <button
                      className="my-2 mr-5 bg-[#ea4c89] hover:bg-[#f082ac]
                        text-white h-[40px] w-[80%] md:w-[30%] rounded-[8px]
                        text-[14px] font-[500] leading-[20px] cursor-pointer"
                      type="submit"
                      // disabled={isLoading}
                    >
                      Post
                    </button>

                    <button
                      className="text-center items-center  my-2 mr-5 bg-[#f3f3f4] hover:bg-[#e7e7e9] h-[40px] w-[70px] rounded-[8px] text-[14px] font-[500] leading-[20px] cursor-pointer"
                      type="button"
                      onClick={closeModal}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <>
            {" "}
            <div className="px-[7px] md:px-[40px]">
              <div className="whitespace-nowrap overflow-auto scrollbar-hide w-[100%] h-[200px] py-4">
                {/*   <ul className="min-h-[68px] flex flex-col">
                  {content}
                 
                </ul> */}
                <div className="grid md:grid-cols-2  ">
                  <div className="col-span-1">
                    lkjhfffffffffffffffffffffffffffff
                    {/*  <img
                      src="https://cdn.dribbble.com/uploads/43144/original/3c0b815faaccefbb2c55009848996fde.png?1670361214"
                      alt=""
                      className="w-[100px] rounded-md "
                    /> */}
                  </div>
                  <div className="col-span-1">
                    <span className="text-[#dbdbde] text-[14] font-[500]">
                      DEC 13, 2022
                    </span>
                    <h1 className="text-[24px] font-[500] cursor-pointer hover:text-[#ea4c89]">
                      7 critical business{" "}
                    </h1>
                    <p className="text-[#dbdbde] text-[14] font-[400]">
                      Discover{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </>
        </>
      </Modal>
    </div>
  );
}

export default ContributeStory;
