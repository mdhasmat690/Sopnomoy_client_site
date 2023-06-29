import React from "react";

function DeleteAccount(props) {
  return (
    <div className="bg-[#f8f8f9]">
      <div className="w-[32%] mx-auto  py-28  ">
        <div className="shadow-2xl rounded-b-[8px]">
          <img
            className="rounded-t-[8px] "
            src="https://i.ibb.co/P4L0ZnN/3024051.jpg"
            alt=""
          />
          <div className="p-3">
            <h1 className="text-[48px] font-[700] leading-[1.25]">
              We’re sorry to see you go
            </h1>
            <h5 className="text-[16px] text-[#6e6d7a] mt-2 leading-[1.5]">
              If you’d like to reduce your email notifications, you can{" "}
              <span className="text-[#ea4c89]">disable them here</span> or if
              you just want to change your username, you can{" "}
              <span className="text-[#ea4c89]">do that here</span>.
            </h5>
            <h5 className="text-[16px] text-[#6e6d7a] my-2 leading-[1.5]">
              Be advised, account deletion is final. There will be no way to
              restore your account.
            </h5>

            <div className="flex my-5">
              <button className="bg-[#ea4c89] text-white py-[10px] px-[16px] rounded-[8px]">
                Nevermind
              </button>
              <button className=" ml-4 border border-solid-[1px]  py-[10px] px-[16px] rounded-[8px]">
                Delete My Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeleteAccount;
