import React from "react";
import { IoIosSend } from "react-icons/io";
import { useParams } from "react-router-dom";

function Dashboard(props) {
  const { id } = useParams();

  return (
    <>
      {" "}
      <div className="relative w-full h-[calc(100vh_-_197px)] p-6 overflow-y-auto flex flex-col-reverse ">
        <ul className="space-y-2">
          <li className={`flex justify-end`}>
            <div className="relative max-w-xl px-4 py-2 text-gray-700 rounded shadow">
              <span className="block">{id}</span>
            </div>
          </li>
        </ul>
      </div>
      <div className="grid  md:grid-cols-8 gap-4 items-center">
        <div className=" col-span-7">
          {" "}
          <input
            className="bg-[#f3f3f4] outline-none  border-solid  focus:bg-white p-2 w-[100%] h-[70px] text-[14px] font-[400] leading-[28px]   focus:border border-[pink]"
            /* {...register("message")} */
            required
            placeholder="Ask your Question"
          />
        </div>
        <div className="col-span-1">
          <button className="text-[black] text-[40px]" type="submit">
            <IoIosSend />
          </button>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
