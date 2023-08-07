import React from "react";
import { Link } from "react-router-dom";

function DesginProjects() {
  return (
    <div>
      <div className="border-t border-indigo-[#f3f3f4] w-[100%]   mb-10 "></div>
      <div className=" p-2">
        <div className="">
          <img
            src="https://i.ibb.co/9tmZvG3/job00.png"
            alt=""
            className="md:ml-[590px] sm:ml-none  sm:mx-auto md:block hidden  mt-24 absolute "
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
            <Link to={"/"}>
              <button className="bg-gradient-to-r from-[#ff874f] to-[#ec5e95] rounded-[8px]   p-4 my-3">
                Get Freelance Project
              </button>
            </Link>
            <h1 className="text-[16px] font-[500] leading-[22px] text-[#3d3d4e] my-4">
              Work with companies like
            </h1>
          </div>
          <div className="">
            <img
              src="https://i.ibb.co/M7Q4yn1/gril.jpg"
              alt=""
              className="rounded-[32px] w-full"
            />
          </div>
        </div>
      </div>
      <h1 className="text-center mt-24 w-[40%] mx-auto text-[32px] font-[700] leading-[38px]">
        Let the opportunities come to you with Sopnomoy’s Pro Business
      </h1>
      <div className="grid md:grid-cols-2 gap-2 container mx-auto mt-12">
        <div>
          <img
            src="https://i.ibb.co/bgVj7Jw/man.jpg"
            className="w-[95%] mx-auto rounded-[32px]"
            alt=""
          />
        </div>
        <div className="ml-5">
          <h1 className="text-[20px] font-[400] leading-[32px] text-[#3d3d4e] w-[75%]">
            Every day, clients turn to Sopnomoy to find help to bring their
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
            , your own personalized video that lives on your Sopnomoy profile.
          </h1>
          <h1 className="text-[20px] font-[400] leading-[32px] text-[#3d3d4e] w-[75%] my-4 ">
            Our goal is simple. We want to enable designers to have more time
            for designing and to spend less time chasing leads.
          </h1>
        </div>
      </div>
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
            <Link to={"/"}>Get Freelance Project</Link>
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
            , your own personalized video that lives on your Sopnomoy profile.
          </h1>
        </div>
        <div className=" ">
          <img
            src="https://i.ibb.co/bRmYskC/designp.png"
            className="w-[95%] mx-auto rounded-[32px]"
            alt=""
          />
        </div>
      </div>
      <br />
    </div>
  );
}

export default DesginProjects;
