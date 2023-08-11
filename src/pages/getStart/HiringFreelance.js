import React from "react";
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";

function HiringFreelance(props) {
  return (
    <div>
      <br />
      <div className="w-[80%] mx-auto flex justify-end">
        <button className=" h-[48px] w-[48px] p-4 bg-[#f3f4f4] text-[#6e6d7a] rounded-[8px]">
          <IoMdClose />
        </button>
      </div>
      <div className="w-[90%] mx-auto flex justify-center">
        <div>
          <div className="flex justify-center">
            <h1 className=" w-[89%] mx-auto text-[40px] font-bold leading-[1.23em]">
              What type of freelance support do you need?
            </h1>
          </div>
          <br />
          <br />

          <div className="grid md:grid-cols-2 gap-4 w-[80%] mx-auto justify-center mb-16">
            <Link to={"/hiringFreelance"}>
              <div className="  border-[1px] rounded-[18px] border-[#e7e7e9]  hover:border-[#ea4c89] p-2 cursor-pointer">
                <img
                  src="https://dribbble.com/assets/packs/media/onboarding/hand-fa6c5c07.png"
                  alt=""
                  className="w-[50%] mx-auto mb-2"
                />
                <div className="w-[75%] mx-auto">
                  <h1 className="text-[20px] font-bold text-center mb-3">
                    One-of gig
                  </h1>
                  <h3 className="text-[#6e6d7a] text-[16px] text-center mb-2">
                    I need some help for a small or personal project.
                  </h3>
                </div>
              </div>
            </Link>
            <div className="  border-[1px] rounded-[18px]  border-[#e7e7e9] hover:border-[#ea4c89]  p-2 cursor-pointer">
              {/* https://dribbble.com/hiring */}
              <img
                src="https://dribbble.com/assets/packs/media/onboarding/hands-0d76458a.png"
                alt=""
                className="w-[50%] mx-auto mb-2"
              />
              <div className="w-[80%] mx-auto">
                <h1 className="text-[20px] font-bold text-center mb-3">
                  Long-term contract
                </h1>
                {/* https://dribbble.com/hiring */}
                <h3 className="text-[#6e6d7a] text-[16px] text-center">
                  A full-time team member to join your team.
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HiringFreelance;
