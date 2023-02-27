import React from "react";

function DesginProjects(props) {
  return (
    <div>
      <div className="border-t border-indigo-[#f3f3f4] w-[100%]   mb-10 "></div>
      <div className=" p-2">
        <div className="">
          <img
            src="https://cdn.dribbble.com/assets/pro/landing-page/intro-image-2@1x-1ebb0eb0bda320d30c80c35cf57e406c203fc54aa09184565a26df0c21d37b8b.png"
            alt=""
            className="md:ml-[590px] sm:ml-none  sm:mx-auto  mt-24 absolute "
          />
        </div>
        <div className="grid md:grid-cols-2 gap-2 container mx-auto">
          <div className="md:ml-10 sm:ml-none">
            <span className="text-[12px] font-[700] leading-[14px] tracking-[0.03em]  text-transparent bg-clip-text bg-gradient-to-r from-[#ff874f] to-[#f64f90] ">
              PRO BUSINESS
            </span>
            <h1 className="text-[38px] font-[700] leading-[38px] w-[73%] my-3">
              New freelance design projects emailed to you every morning
            </h1>
            <p className="text-[20px] font-[400] leading-[32px] w-[70%] my-3">
              Get access to nearly a thousand new freelance projects each month,
              with hundreds of fresh leads every week.
            </p>
            <button className="bg-gradient-to-r from-[#ff874f] to-[#ec5e95] rounded-[8px]   p-4 my-3">
              Get Freelance Project
            </button>
            <h1 className="text-[16px] font-[500] leading-[22px] text-[#3d3d4e] my-4">
              Work with companies like
            </h1>
          </div>
          <div className="">
            <img
              src="https://cdn.dribbble.com/assets/pro/landing-page/intro-image@1x-17888e39379301eb865bdca0ed3f7795e14f5d4b439139ff931111559d00a1e4.jpg"
              alt=""
              className="rounded-[32px] w-full"
            />
          </div>
          <div>hh</div>
        </div>
      </div>
      <h1 className="text-center mt-24 w-[40%] mx-auto text-[32px] font-[700] leading-[38px]">
        Let the opportunities come to you with Dribbble’s Pro Business
      </h1>
      <div className="grid md:grid-cols-2 gap-2 container mx-auto mt-12">
        <div>
          <img
            src="https://cdn.dribbble.com/assets/pro/landing-page/pro-opportunities-1@1x-1b95e654f7d64e3387b823118f54eb04070498b92df2cb9cf953f98f50ab81b7.jpg"
            className="w-[95%] mx-auto rounded-[32px]"
            alt=""
          />
        </div>
        <div className="ml-5">
          <h1 className="text-[20px] font-[400] leading-[32px] text-[#3d3d4e] w-[75%]">
            Every day, clients turn to Dribbble to find help to bring their
            latest design projects to life.
          </h1>
          <h1 className="text-[20px] font-[400] leading-[32px] text-[#3d3d4e] w-[75%] my-4  first-letter:">
            These projects are posted on our{" "}
            <span className="font-[700]">
              exclusive Freelance Project board for Pro Business subscribers
            </span>{" "}
            , plus we email you the newest projects added each morning so you're
            always in the loop.
          </h1>
          <h1 className="text-[20px] font-[400] leading-[32px] text-[#3d3d4e] w-[75%] my-4  ">
            We also have a whole new way for designers to stand out from the
            crowd and win new opportunities with{" "}
            <span className="text-[#ea4c89] hover:text-[#f082ac] cursor-pointer">
              Pitch
            </span>
            , your own personalized video that lives on your Dribbble profile.
          </h1>
          <h1 className="text-[20px] font-[400] leading-[32px] text-[#3d3d4e] w-[75%] my-4 ">
            Our goal is simple. We want to enable designers to have more time
            for designing and to spend less time chasing leads.
          </h1>
        </div>
      </div>
      {/* <h1 className="text-center mt-24 w-[40%] mx-auto text-[32px] font-[700] leading-[38px]">
        Let the opportunities come to you with Dribbble’s Pro Business
      </h1> */}
      <div className="grid md:grid-cols-2 gap-2 container mx-auto mt-12">
        <div className="ml-5">
          <h1 className="text-[38px] font-[700] leading-[38px] w-[73%] my-3">
            New freelance design projects emailed to you every morning
          </h1>
          <p className="text-[20px] font-[400] leading-[32px] w-[70%] my-3">
            Get access to nearly a thousand new freelance projects each month,
            with hundreds of fresh leads every week.
          </p>
          <button className="bg-gradient-to-r from-[#ff874f] to-[#ec5e95] rounded-[8px]   p-4 my-3">
            Get Freelance Project
          </button>
          <h1 className="text-[16px] font-[500] leading-[22px] text-[#3d3d4e] my-4">
            Work with companies like
          </h1>
          <h1 className="text-[20px] font-[400] leading-[32px] text-[#3d3d4e] w-[75%] my-4  ">
            We also have a whole new way for designers to stand out from the
            crowd and win new opportunities with{" "}
            <span className="text-[#ea4c89] hover:text-[#f082ac] cursor-pointer">
              Pitch
            </span>
            , your own personalized video that lives on your Dribbble profile.
          </h1>
        </div>
        <div className=" ">
          <img
            src="https://cdn.dribbble.com/assets/pro/landing-page/job-board@1x-8a80beb4257fa599a798b850f9b26e0e81cc9a7e6a7a0a63ea72acfd431031bb.png"
            className="w-[95%] mx-auto rounded-[32px]"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default DesginProjects;
