import React from "react";
import { FaTwitter } from "react-icons/fa";
import { AiFillFacebook } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";

function Footer(props) {
  return (
    <div className="bg-[#fafafb]">
      <br />
      <div className="container mx-auto mt-10 ">
        <div className="p-2 grid md:grid-cols-6   gap-4 ">
          <div className="col-span-2">
            <div>
              <img
                src="https://img.freepik.com/free-vector/letter-h-with-blossoms_53876-66878.jpg?size=626&ext=jpg&ga=GA1.2.1738658831.1683692513&semt=ais"
                alt="logo"
                className="md:cursor-pointer h-20 rounded-md mb-3"
              />
            </div>

            <h1 className="text-[#3d3d4e] md:w-[50vh] w-[30vh]">
              Dribbble is the world’s leading community for creatives to share,
              grow, and get hired.
            </h1>
            <div className="flex mt-3 w-[100%] text-[#3d3d4e]">
              <FaTwitter className="w-[30px] h-[40px] mr-3" />
              <AiFillFacebook className="w-[30px] h-[40px] mr-3" />
              <AiOutlineInstagram className="w-[30px] h-[40px] mr-3" />
              <BsLinkedin className="w-[30px] h-[40px]" />
            </div>
          </div>
          <div className=" text-[#3d3d4e]">
            <h2 className="text-[16px] font-[600] leading-3 pb-3">
              For designers
            </h2>
            <h2 className="py-2">Go Pro!</h2>
            <h2 className="py-2">Explore design work</h2>
            <h2 className="py-2">Design blog</h2>
            <h2 className="py-2">Overtime podcast</h2>
            <h2 className="py-2">Playoffs</h2>
            <h2 className="py-2">Weekly Warm-Up</h2>
            <h2 className="py-2">Refer a Friend</h2>
            <h2 className="py-2">Code of conduct</h2>
          </div>
          <div className="  text-[#3d3d4e]">
            <h1 className="text-[16px] font-[600] leading-3 pb-3">Company</h1>
            <h1 className="py-2">About</h1>
            <h1 className="py-2">Careers</h1>
            <h1 className="py-2">Support</h1>
            <h1 className="py-2">Media kit</h1>
            <h1 className="py-2">Testimonials</h1>
            <h1 className="py-2">API</h1>
            <h1 className="py-2">Terms of service</h1>
            <h1 className="py-2">Privacy policy</h1>
            <h1 className="py-2">Cookie policy</h1>
          </div>
          <div className="  text-[#3d3d4e]">
            <h1 className="text-[16px] font-[600] leading-3 pb-3">
              Directories
            </h1>
            <h1 className="py-2">Design jobs</h1>
            <h1 className="py-2">Designers for hire</h1>
            <h1 className="py-2">Freelance designers for hire</h1>
            <h1 className="py-2">Tags</h1>
            <h1 className="py-2">Places</h1>
            <h1 className="text-[16px] font-[600] leading-3 py-3">
              Design assets
            </h1>
            <h1 className="py-2">Dribbble Marketplace</h1>
            <h1 className="py-2">Creative Market</h1>
            <h1 className="py-2">Fontspring</h1>
            <h1 className="py-2">Font Squirrel</h1>
          </div>
          <div className="  text-[#3d3d4e]">
            <h1 className="text-[16px] font-[600] leading-3 pb-3">
              Design Resources
            </h1>
            <h1 className="py-2">Freelancing</h1>
            <h1 className="py-2">Design Hiring</h1>
            <h1 className="py-2">Design Portfolio</h1>
            <h1 className="py-2">Design Education</h1>
            <h1 className="py-2">Creative Process</h1>
            <h1 className="py-2">Design Industry Trends</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
