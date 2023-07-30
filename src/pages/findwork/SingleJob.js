import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { Link, useParams } from "react-router-dom";
import { useGetSingleJobsQuery } from "../../features/jobs/jobApi";
import moment from "moment/moment";
function SingleJob() {
  const { id } = useParams();

  const { data } = useGetSingleJobsQuery(id);
  console.log(data ? "true" : "false");

  return (
    <>
      <div className="border-t border-indigo-[#f3f3f4] w-[100%]  "></div>
      <div className="w-[90%] mx-auto mt-10">
        <button className="flex items-center bg-[#f3f3f4] h-[40px]  text-[14px] font-[500] leading-[24px]  rounded-[8px] w-[100px] p-2 hover:bg-[#e7e7e9] ">
          <span>
            <IoIosArrowBack />
          </span>
          <Link to={`/JobBoards`}>
            <span className="ml-2 ">All Jobs</span>
          </Link>
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-3 justify-center w-[90%] mx-auto my-10">
        <div class="col-span-2 md:ml-14 ml-0">
          <h1 className="text-[16px] font-[500] leading-[22px] my-3">
            Job Details
          </h1>
          {data ? (
            <>
              <h1 className="text-[32px] font-[700] leading-[38px] my-5">
                {data?.JobTitle}
              </h1>

              <h1 style={{ whiteSpace: "pre-line" }}>{data?.description}</h1>

              <h1 className="my-2 font-bold">
                Please your application send email {data?.email}
                <br />
                Apply button not working now
              </h1>

              <button className="h-[40px] py-[10px] px-[16px] rounded-[8px] bg-[#ea4c89] text-[14px] font-[400]  mx-auto my-5">
                Apply for this position
              </button>
            </>
          ) : (
            <div className="my-10 text-orange-600">Loading....</div>
          )}
        </div>
        <div className=" col-span-1  border border-indigo-[#f3f3f4] rounded-lg p-6 h-[550px] w-80 md:w-72 mx-auto  ">
          <div className=" justify-center">
            <img className="mx-auto w-[80px]" src={data?.image} alt="" />
            <h1 className="text-[24px] font-[700] leading-[29px] text-center mt-4 capitalize">
              {" "}
              {data?.companyName}
            </h1>
            {/* <h1 className="text-[16px] font-[400]  text-center my-3">
              {" "}
              Visit Website
            </h1> */}
            {data && (
              <>
                <Link
                  to={data?.companyWeb}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h1 className="text-[16px] font-[400] text-center my-3">
                    Visit Website
                  </h1>
                </Link>
              </>
            )}

            <button className="h-[40px] py-[10px] px-[16px] rounded-[8px] bg-[#ea4c89] text-[14px] font-[400]  justify-center mx-auto md:block hidden">
              Apply for this position
            </button>
          </div>
          <div className="border-t border-[#e7e7e9] my-8"></div>
          <div>
            <h1 className="text-[15px] font-[400] ">Job Type</h1>
            <h1 className="text-[16px] font-[500] my-1 leading-[22px] capitalize">
              {data?.employType}
            </h1>

            <h1 className="text-[15px] font-[400] mt-5 leading-[20px]">
              Location
            </h1>
            <h1 className="text-[16px] font-[500] my-1 leading-[22px] capitalize">
              {data?.JobLocation}
            </h1>
            <h1 className="text-[16px] font-[500] my-1 leading-[22px] capitalize">
              {data?.workplace} Friendly
            </h1>

            <h1 className="text-[15px] font-[400] mt-5 leading-[20px]">
              Posted Date
            </h1>
            <h1 className="text-[16px] font-[500] my-1 leading-[22px] capitalize">
              {moment(data?.data).format("MMM Do YY")}
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleJob;
