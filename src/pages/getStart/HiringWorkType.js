import React from "react";
import { Link } from "react-router-dom";

function HiringWorkType(props) {
  return (
    <div>
      <br />
      <div className="w-[90%] mx-auto flex justify-center">
        <div>
          <div className="flex justify-center">
            <h1 className=" w-[60%] mx-auto text-[40px] font-bold leading-[1.23em]">
              Great! What type of work are you hiring for?
            </h1>
          </div>
          <br />
          <br />

          <div className="grid md:grid-cols-2 gap-4 w-[60%] mx-auto justify-center mb-16">
            <Link to={`/hiringFreelance`}>
              <div className="  border-[1px] rounded-[18px] border-[#e7e7e9]  hover:border-[#ea4c89] p-2 cursor-pointer">
                <img
                  src="https://dribbble.com/assets/packs/media/onboarding/designer-3a947f92.png"
                  alt=""
                  className="w-[50%] mx-auto my-8"
                />
                <div className="w-[75%] mx-auto">
                  <h1 className="text-[20px] font-bold text-center mb-3">
                    Freelance Designer
                  </h1>
                  <h3 className="text-[#6e6d7a] text-[16px] text-center">
                    A contract or freelance designer for your project.
                  </h3>
                </div>
              </div>
            </Link>
            <div className="  border-[1px] rounded-[18px]  border-[#e7e7e9] hover:border-[#ea4c89]  p-2 cursor-pointer">
              <img
                src="https://dribbble.com/assets/packs/media/onboarding/designer-3a947f92.png"
                alt=""
                className="w-[50%] mx-auto my-8"
              />
              <div className="w-[80%] mx-auto">
                <h1 className="text-[20px] font-bold text-center mb-3">
                  A full-time role
                </h1>
                {/* https://dribbble.com/hiring */}
                <h3 className="text-[#6e6d7a] text-[16px] text-center">
                  A full-time team member to join your team.
                </h3>
              </div>
            </div>
          </div>

          <h5 className="text-[#6e6d7a] text-[16px] leading-[24px] my-3 text-center mb-16">
            Select the options that best describe you. Don’t worry, you can
            explore other options later.
          </h5>
        </div>
      </div>
    </div>
  );
}

export default HiringWorkType;
