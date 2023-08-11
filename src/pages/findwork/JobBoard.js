import React from "react";
import { MdLocationOn } from "react-icons/md";
import { useGetJobsQuery } from "../../features/jobs/jobApi";
import moment from "moment/moment";
import { Link } from "react-router-dom";
import Support from "../../component/home/support/Support";

function JobBoards() {
  const { data } = useGetJobsQuery();

  return (
    <>
      <div className="mb-10">
        <div className="border-t border-indigo-[#f3f3f4] w-[100%]  "></div>
        <div className="container  w-[90%]  mx-auto">
          <button className="bg-white focus:bg-[#f3f3f4] text-[#3d3d4e] hover:text-[#0d0c22] rounded-[8px]   p-2 mt-3">
            Full-Time Job Board
          </button>
          <button className="bg-white focus:bg-[#f3f3f4] text-[#3d3d4e] hover:text-[#0d0c22] rounded-[8px]   p-2 mt-3">
            Freelance Jobs
          </button>
          <button className="bg-white focus:bg-[#f3f3f4] text-[#3d3d4e] hover:text-[#0d0c22] rounded-[8px]   p-2 mt-3">
            Designer Search
          </button>
        </div>
        <div>
          <div className=" p-2">
            <div className="">
              <img
                src="https://i.ibb.co/z2NjDVP/lokking.png"
                alt=""
                className="md:ml-[590px] sm:ml-none   sm:mx-auto hidden md:block md:mt-24 absolute "
              />
            </div>
            <div className="grid md:grid-cols-2 gap-2 w-[96%] mx-auto">
              <div className="flex items-center justify-center">
                <div className="md:ml-10 sm:ml-none">
                  <h1 className="text-[38px] font-[700] leading-[38px] w-[100%]">
                    The #1 Job Board for Graphic Design Jobs
                  </h1>
                  <p className="text-[20px] font-[400] leading-[32px] text-[#3d3d4e] w-[80%] my-10">
                    Sopnomoy is the heart of the design community and the best
                    resource to discover and connect with designers and jobs
                    worldwide.
                  </p>
                  <div className="flex">
                    <Link to={`/postJob`}>
                      <button className="  text-white rounded-lg bg-[#ea4c89] p-3 hover:bg-[#f082ac] flex">
                        Post a job
                        <span className="hidden md:block">
                          —Starting at $ 249 /mo
                        </span>
                      </button>
                    </Link>
                    <button className="  bg-[#f3f3f4] text-[#3d3d4e] hover:text-[#0d0c22] rounded-[8px]   p-3 hover:bg-[#e7e7e9] ml-4">
                      Learn more
                    </button>
                  </div>
                </div>
              </div>
              <div className="">
                <img
                  src="https://i.ibb.co/y4MjGWr/job4.webp"
                  alt=""
                  className="rounded-[32px] w-full"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="w-[90%] mx-auto my-5">
          <h1 className="text-[24px] font-[700] leading-[29px]">
            Recent new opportunities
          </h1>
          <h1 className="text-[#3d3d4e] mb-3">
            {Math.floor(Math.random() * 10 + 1)} new opportunities posted today!
          </h1>
          <div className="grid md:grid-cols-12 sm:grid-cols-2 gap-4 ">
            <div class="col-span-8">
              {data?.length ? (
                <>
                  {" "}
                  {data?.map((job) => (
                    <Link key={job?._id} to={`/singleJob/${job?._id}`}>
                      <div
                        key={job?._id}
                        class="flex items-center justify-between hover:bg-[#f3f3f4] p-5 group"
                      >
                        <div className="flex items-center">
                          <div className="">
                            <img
                              src={job?.image}
                              alt=""
                              className="w-[50px]  mr-5 rounded-[50%]"
                            />
                          </div>
                          <div>
                            <h1 class="md:text-[20px] sm:text-[17px] font-semibold leading-[29px] whitespace-nowrap overflow-ellipsis overflow-hidden">
                              {job?.JobTitle?.slice(0, 24)}
                            </h1>
                            <h2 class="text-[18px] font-[600] text-[#3d3d4e]">
                              {job?.companyName}
                              <span class="text-[#3d3d4e] text-[18px] font-[400] ml-1">
                                • {job?.workplace}
                              </span>
                              <span class="text-[#3d3d4e] text-[18px] font-[400] ml-1">
                                • {job?.employType}
                              </span>
                            </h2>
                          </div>
                        </div>

                        <div class=" items-center mr-5 invisible group-hover:visible hidden md:block">
                          <div className="flex items-center">
                            <Link to={`/singleJob/${job?._id}`}>
                              <button class="mr-4 px-4 py-2 bg-blue-500 text-white rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
                                View Job
                              </button>
                            </Link>
                            <button class="px-4 py-2 bg-blue-500 text-white rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
                              apply now
                            </button>
                          </div>
                        </div>
                        <div class="group-hover:hidden md:block hidden">
                          <h1 class="flex items-center">
                            {" "}
                            <span>
                              <MdLocationOn className="mr-2" />
                            </span>{" "}
                            Dhaka, Bangladesh
                          </h1>
                          <h1 class="text-[#3d3d4e] text-[16px] font-[400]">
                            Posted {moment(job?.time).fromNow()}
                          </h1>
                        </div>
                      </div>
                    </Link>
                  ))}
                </>
              ) : (
                <div className="my-10 ">Loading...</div>
              )}
            </div>

            <div className=" col-span-4   border border-indigo-[#f3f3f4] rounded-lg p-6 w-[80%] mx-auto">
              <h1>Filter</h1>
              <input
                className="shadow appearance-none border rounded w-[100%] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="Filter"
                type="text"
                placeholder="Filter"
              />
              <div className="border-t border-indigo-[#f3f3f4] w-[100%] mt-3 "></div>
              <div className="my-3">
                <h1 className="text-[16px] font-[600] leading-[22px]">
                  Specialties
                </h1>
              </div>

              <div>
                <div className="form-check">
                  <div className="my-3">
                    <input
                      className="form-check-input   h-5 w-5 border border-gray-300 rounded-sm  checked:bg-[#ea4c89] checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer  accent-pink-500"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label
                      className="form-check-label inline-block text-[#3d3d4e] text-[14px] font-[400] leading-[20px]"
                      for="flexCheckDefault"
                    >
                      Animation
                    </label>
                  </div>
                  <div className="my-3">
                    <input
                      className="form-check-input   h-5 w-5 border border-gray-300 rounded-sm  checked:bg-[#ea4c89] checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer  accent-pink-500"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label
                      className="form-check-label inline-block text-[#3d3d4e] text-[14px] font-[400] leading-[20px]"
                      for="flexCheckDefault"
                    >
                      Bran / Graphic Design
                    </label>
                  </div>
                  <div className="my-3">
                    <input
                      className="form-check-input   h-5 w-5 border border-gray-300 rounded-sm  checked:bg-[#ea4c89] checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer  accent-pink-500"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label
                      className="form-check-label inline-block text-[#3d3d4e] text-[14px] font-[400] leading-[20px]"
                      for="flexCheckDefault"
                    >
                      Leadership
                    </label>
                  </div>
                  <div className="my-3">
                    <input
                      className="form-check-input   h-5 w-5 border border-gray-300 rounded-sm  checked:bg-[#ea4c89] checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer  accent-pink-500"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label
                      className="form-check-label inline-block text-[#3d3d4e] text-[14px] font-[400] leading-[20px]"
                      for="flexCheckDefault"
                    >
                      Mobile Design
                    </label>
                  </div>
                  <div className="my-3">
                    <input
                      className="form-check-input   h-5 w-5 border border-gray-300 rounded-sm  checked:bg-[#ea4c89] checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer  accent-pink-500"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label
                      className="form-check-label inline-block text-[#3d3d4e] text-[14px] font-[400] leading-[20px]"
                      for="flexCheckDefault"
                    >
                      Ui / Visual Design
                    </label>
                  </div>
                  <div className="my-3">
                    <input
                      className="form-check-input   h-5 w-5 border border-gray-300 rounded-sm  checked:bg-[#ea4c89] checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer  accent-pink-500"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label
                      className="form-check-label inline-block text-[#3d3d4e] text-[14px] font-[400] leading-[20px]"
                      for="flexCheckDefault"
                    >
                      Product Design
                    </label>
                  </div>
                  <div className="my-3">
                    <input
                      className="form-check-input   h-5 w-5 border border-gray-300 rounded-sm  checked:bg-[#ea4c89] checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer  accent-pink-500"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label
                      className="form-check-label inline-block text-[#3d3d4e] text-[14px] font-[400] leading-[20px]"
                      for="flexCheckDefault"
                    >
                      Ux Design
                    </label>
                  </div>
                  <div className="my-3">
                    <input
                      className="form-check-input   h-5 w-5 border border-gray-300 rounded-sm  checked:bg-[#ea4c89] checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer  accent-pink-500"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label
                      className="form-check-label inline-block text-[#3d3d4e] text-[14px] font-[400] leading-[20px]"
                      for="flexCheckDefault"
                    >
                      Web Design
                    </label>
                    <div className="border-t border-indigo-[#f3f3f4] w-[100%] my-5 "></div>
                  </div>

                  <h1 className="text-[16px] font-[600] leading-[22px]">
                    Location
                  </h1>

                  <div>
                    <input
                      className="shadow appearance-none border rounded w-[100%] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline my-3"
                      id="Location"
                      type="text"
                      placeholder="Location"
                    />
                    <div className="my-3">
                      <input
                        className="form-check-input   h-5 w-5 border border-gray-300 rounded-sm  checked:bg-[#ea4c89] checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer  accent-pink-500"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label inline-block text-[#3d3d4e] text-[14px] font-[400] leading-[20px]"
                        for="flexCheckDefault"
                      >
                        Open to remote
                      </label>
                      <div className="border-t border-indigo-[#f3f3f4] w-[100%] my-5 "></div>
                      <div className="my-3">
                        <input
                          className="form-check-input   h-5 w-5 border border-gray-300 rounded-sm  checked:bg-[#ea4c89] checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer  accent-pink-500"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label
                          className="form-check-label inline-block text-[#3d3d4e] text-[14px] font-[400] leading-[20px]"
                          for="flexCheckDefault"
                        >
                          Full-Time
                        </label>
                      </div>
                      <div className="my-3">
                        <input
                          className="form-check-input   h-5 w-5 border border-gray-300 rounded-sm  checked:bg-[#ea4c89] checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer  accent-pink-500"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label
                          className="form-check-label inline-block text-[#3d3d4e] text-[14px] font-[400] leading-[20px]"
                          for="flexCheckDefault"
                        >
                          Freelance/Contract
                        </label>
                      </div>
                      <button className="  text-white rounded-lg bg-[#ea4c89] p-3 hover:bg-[#f082ac] w-[100%]">
                        Filter
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <br />

      <Support />
    </>
  );
}

export default JobBoards;
