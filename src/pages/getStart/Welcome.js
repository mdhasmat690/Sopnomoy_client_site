import React from "react";
import { Link } from "react-router-dom";

function Welcome(props) {
  return (
    <div>
      <br />
      <div className="w-[90%] mx-auto flex justify-center">
        <div>
          <h1 className=" text-[40px] font-bold leading-[1.23em] text-center">
            What brings you to Dribbble?
          </h1>
          <h5 className="text-[#6e6d7a] text-[16px] leading-[24px] my-3 text-center mb-16">
            Select the options that best describe you. Don’t worry, you can
            explore other options later.
          </h5>
          <div className="grid md:grid-cols-3 gap-4 w-[80%] mx-auto justify-center mb-16">
            {/* dashboard post project */}
            <div className="  border-[1px] rounded-[18px] border-[#e7e7e9] p-3">
              <img
                src="https://dribbble.com/assets/packs/media/onboarding/designer-3a947f92.png"
                alt=""
                className="w-[100%] my-3"
              />
              <h1 className="text-[20px] font-bold text-center">
                I’m a designer looking to share my work
              </h1>
            </div>
            <div className="  border-[1px] rounded-[18px] border-[#e7e7e9] p-3">
              <Link to={`/hiringWorkType`}>
                <img
                  src="https://dribbble.com/assets/packs/media/onboarding/designer-3a947f92.png"
                  alt=""
                  className="w-[100%] my-3"
                />
                <h1 className="text-[20px] font-bold text-center">
                  I’m looking to hire a designer
                </h1>
              </Link>
            </div>
            <div className="  border-[1px] rounded-[18px] border-[#e7e7e9] p-3">
              {/* home page or services project  */}
              <img
                src="https://dribbble.com/assets/packs/media/onboarding/designer-3a947f92.png"
                alt=""
                className="w-[100%] my-3"
              />
              <h1 className="text-[20px] font-bold text-center">
                I’m looking for design inspiration
              </h1>
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

export default Welcome;
