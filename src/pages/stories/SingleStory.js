import React from "react";
import { AiFillFacebook } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineLink } from "react-icons/ai";

function SingleStory() {
  return (
    <div className=" ">
      <div className="border-t border-indigo-[#f3f3f4] w-[100%]  "></div>

      <div className="grid md:grid-cols-2   md:bg-[#fdf6f9] pb-10 sm:bg-white">
        <div className="bg-white">
          <img
            src="https://i.ibb.co/wMhWSFK/chat.png"
            className="  p-[10px] md:ml-[100px] mt-10 sm:ml-auto"
            alt=""
          />
        </div>
        <div className="flex items-center justify-center md:mb-0 sm:mb-14 p-4">
          <div className=" ">
            <h1 className="text-[40px] font-[700] leading-[1.2]  md:w-[330px] sm:w-[90%] mx-auto justify-center mt-10 text-justify">
              Why workplace diversity matters more than ever in today’s remote
              work
            </h1>

            <h2 className="mx-auto text-justify md:w-[330px] sm:w-[90%] text-[18px] font-[700] leading-1 mt-7 ">
              by Md Hasmat in{" "}
              <span className="hover:text-[#ea4c89] underline cursor-pointer">
                Community
              </span>
            </h2>
            <h3 className="md:w-[330px] sm:w-[90%] mx-auto text-justify text-[#6e6d7a] text-[14] font-[500]">
              DEC 6, 2022
            </h3>
            <div className="grid md:grid-cols-4 gap-3 mt-5 md:ml-[155px] sm:ml-none">
              <div>
                {" "}
                <button className="border border-indigo-[#f3f3f4]  w-[95px] p-2 rounded-md mr-5 flex items-center font-[500]">
                  {" "}
                  <span className="text-[#1da1f2] mr-2">
                    <AiFillFacebook />
                  </span>
                  Share
                </button>
              </div>
              <div>
                {" "}
                <button className="border border-indigo-[#f3f3f4]  w-[95px] p-2 rounded-md mr-5 flex items-center font-[500]">
                  {" "}
                  <span className="text-[#1da1f2] mr-2">
                    <AiOutlineTwitter />
                  </span>
                  Tweet
                </button>
              </div>
              <div>
                {" "}
                <button className="border border-indigo-[#f3f3f4]  w-[95px] p-2 rounded-md mr-5 flex items-center font-[500]">
                  {" "}
                  <span className="text-[#1da1f2] mr-2">
                    <AiFillLinkedin />
                  </span>
                  Share
                </button>
              </div>
              <div>
                {" "}
                <button className="border border-indigo-[#f3f3f4]  w-[95px] p-2 rounded-md mr-5 flex items-center font-[500]">
                  {" "}
                  <span className="text-[#6e6d7a] mr-2">
                    <AiOutlineLink />
                  </span>
                  Share
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="grid md:grid-cols-2 mt-5 md:bg-[#fdf6f8] sm:bg-white pb-10">
        <div className="bg-white"></div>
        <div className="flex items-center justify-center md:mb-0 sm:mb-14">
          <div className=" ">
            <h1 className="text-[40px] font-[700] leading-[1.2]  md:w-[330px] sm:w-[90%] mx-auto justify-center mt-10 text-justify"></h1>

            <h2 className="mx-auto text-justify md:w-[330px] sm:w-[90%] text-[18px] font-[700] leading-1 mt-7 ">
              by Renee Fleck in{" "}
              <span className="hover:text-[#ea4c89] underline cursor-pointer">
                Community
              </span>
            </h2>
            <h3 className="md:w-[330px] sm:w-[90%] mx-auto text-justify text-[#6e6d7a] text-[14] font-[500]">
              DEC 6, 2022
            </h3>
            <div className="flex md:justify-center sm:justify-start items-center md:[100%] sm:w-[90%] mx-auto mt-5">
              <button className="border border-indigo-[#f3f3f4]  w-[95px] p-2 rounded-md mr-5 flex items-center font-[500]">
                {" "}
                <span className="text-[#3b5998] mr-2">
                  <AiFillFacebook />
                </span>
                Share
              </button>
              <button className="border border-indigo-[#f3f3f4]  w-[95px] p-2 rounded-md mr-5 flex items-center font-[500]">
                {" "}
                <span className="text-[#1da1f2] mr-2">
                  <AiOutlineTwitter />
                </span>
                Tweet
              </button>
              <button className="border border-indigo-[#f3f3f4]  w-[95px] p-2 rounded-md mr-5 flex items-center font-[500]">
                {" "}
                <span className="text-[#1da1f2] mr-2">
                  <AiFillLinkedin />
                </span>
                Share
              </button>
            </div>
          </div>
        </div>
      </div> */}
      <br />
      <div className="w-[60%]     mx-auto">
        <div>
          <h1 className=" text-[#6e6d7a]">
            <span className="text-[70px] text-[#ea4c89] font-[700] mb-[-50]">
              T
            </span>
            his article was written by Ana Tomašić, Head of People & Culture at
            Balkan Brothers — a full-service creative agency and veteran
            Sopnomoy community member. Thanks to Balkan Brothers for sponsoring
            this blog post! As the world increasingly becomes more connected,
            companies look for ways to tap into new markets and expand their
            customer base. One way they’re doing this is by becoming more
            diverse in their workforce. There are many benefits to having a
            workforce representing different cultures and backgrounds. It can
            also lead to more creativity and innovative thinking, as employees
            with different perspectives can bring new ideas to the table.
            <br />
            <br />
            Remote work has become more prevalent in recent years, allowing
            employees to work from anywhere in the world. This gives companies
            access to a larger pool of talent, including those from
            underrepresented groups who may not be able or willing to relocate.
            <br />
            <br />
            At Balkan Brothers, we’ve been doing this for over a decade. We’re
            proud to have brought together a community of international
            creatives even before the term “remote work” became what it’s today.
            (Yes, before it was cool.) Our coworkers all over the globe keep
            changing their addresses, and we couldn’t be happier. But how does
            multiculturalism affect our daily work, and more importantly — how
            does it affect our people?
          </h1>
        </div>

        <div>
          <h1 className="text-[22px] font-[700] my-5">
            Whistling different tunes… in tune
          </h1>

          <h2 className="text-[#6e6d7a]">
            We all have different backgrounds. Our unique cultures shape us and
            are the reason we hold certain beliefs. They influence our behavior
            more than we realize and give us our identity.
            <br />
            <br />
            Nevertheless, an attitude of tolerance, togetherness, and acceptance
            is an attitude we as a collective must agree upon and, as such,
            presents a filter for all future hires. This is a place where
            everyone has the same rights and opportunities.
          </h2>
        </div>
        <div className="grid md:grid-cols-2 my-10">
          <div>
            <img
              src="https://i.ibb.co/Sx68jTL/h2.png"
              className="border border-indigo-[#f3f3f4] "
              alt=""
            />
          </div>
          <div className="md:ml-5 sm:ml-auto">
            <h1 className="text-[18px] font-[600] mb-5">
              BB - Core Values - Animated
            </h1>

            <p className="text-[#6e6d7a]">
              We’ve animated our Core Value illustrations that can be found on
              our About us page. Even though our illustrations already have a
              strong personality, we wanted to give them more visual context and
              bring them to life with these short animations.Credits: D...
            </p>

            <button className=" w-[150px] mt-3 text-white rounded-md bg-[#ccc] hover:bg-[#ea4c89] p-2 ">
              View On
            </button>
          </div>
        </div>
        <div>
          <h1 className="text-[22px] font-[700] my-5">
            Whistling different tunes… in tune
          </h1>

          <h2 className="text-[#6e6d7a]">
            We all have different backgrounds. Our unique cultures shape us and
            are the reason we hold certain beliefs. They influence our behavior
            more than we realize and give us our identity.
            <br />
            <br />
            Nevertheless, an attitude of tolerance, togetherness, and acceptance
            is an attitude we as a collective must agree upon and, as such,
            presents a filter for all future hires. This is a place where
            everyone has the same rights and opportunities.
          </h2>
        </div>
      </div>
    </div>
  );
}

export default SingleStory;
