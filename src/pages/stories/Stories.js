import React from "react";
import { useNavigate } from "react-router-dom";
import ContributeStory from "./ContributeStory";
import { useGetBlogQuery } from "../../features/blog/blogApi";
import moment from "moment/moment";
import { useSelector } from "react-redux";

function Stories() {
  const { data } = useGetBlogQuery();
  const { user } = useSelector((state) => state?.auth);
  const userEmail = user?.email;

  const navigate = useNavigate();

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    if (!userEmail) {
      return navigate("/signUp");
    }
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <div className="border-t border-indigo-[#f3f3f4] w-[100%]"></div>
      <div className="w-[90%] mx-auto">
        <div>
          <h1 className="text-[4vw] font-[700] leading-[4vw] my-5">
            Courtside: <br /> The Sopnomoy Blog
          </h1>
        </div>

        <div className="flex justify-between flex-wrap">
          <div className="w-[70%]">
            <div>
              <span className="text-[#dbdbde] text-[14] font-[500]">
                JAN 20, 2023
              </span>
              <h1 className="text-black font-[500] hover:text-[#ea4c89] text-[3vw]">
                Mid-Century Modern Graphic Design Inspiration
              </h1>
              <img
                src="https://i.ibb.co/4mZWqby/sleep.jpg"
                className="w-[100%] h-[40vw] mt-3"
                alt=""
              />
              <h1 className="text-[19px] leading-[1.3] mt-5">
                Clean and straightforward lines did a lot to inspire future
                trends, including the minimalist movement that so many designers
                are so fond of today. Explore a collection of modern graphic
                design inspired by the mid-century modern aesthetic.
                <span className="font-500 text-orange-400">
                  Write A blog{" "}
                  <span
                    onClick={openModal}
                    to={""}
                    className="text-[#ea4c89] font-bold cursor-pointer"
                  >
                    click
                  </span>{" "}
                </span>
              </h1>
              <div className="border-t-2 border-indigo-[#f3f3f4] w-[100%] my-5"></div>

              {data?.map((blog) => (
                <>
                  <hr className="my-5" />
                  <div className="grid md:grid-cols-5 gap-4 mb-8">
                    <div className=" col-span-1">
                      <img
                        src={blog?.image}
                        alt=""
                        className="w-[100%] rounded-md"
                      />
                    </div>

                    <div className="col-span-4">
                      <span className="text-[#dbdbde] text-[14] font-[500]">
                        {moment(blog?.time).fromNow()}
                      </span>
                      <h1
                        className="text-[24px] font-[500] cursor-pointer hover:text-[#ea4c89]"
                        // onClick={() => navigate("/blog/2")}
                        onClick={() => navigate(`/blog/${blog?._id}`)}
                      >
                        {blog?.tittle?.slice(0, 60)}
                      </h1>
                      <p className="text-[#dbdbde] text-[14] font-[400]">
                        {blog?.desc?.slice(0, 55)}
                        {blog?.desc?.length >= 55 ? <>...</> : <></>}
                      </p>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
          <div className=" md:mx-auto">
            <div>
              <h1 className="text-[18px] font-[700] leading-1">Overtime</h1>
              <h1 className="text-[#9e9ea7] font-[14px]">
                The Sopnomoy Podcast
              </h1>
              <h1 className="mt-2 text-[#ea4c89] font-[500]">
                The Power of Play
              </h1>
              <div className="border-t-2 border-indigo-[#f3f3f4] w-[100%] my-5"></div>
              <h1 className="text-[18px] font-[700] leading-1">
                All Categories
              </h1>
              <h2 className="text-[#ea4c89] font-[500] hover:text-[#f082ac] cursor-pointer my-2">
                Interviews
              </h2>
              <h2 className="text-[#ea4c89] font-[500] hover:text-[#f082ac] cursor-pointer my-2">
                PodCast
              </h2>
              <h2 className="text-[#ea4c89] font-[500] hover:text-[#f082ac] cursor-pointer my-2">
                Inspiration
              </h2>
              <h2 className="text-[#ea4c89] font-[500] hover:text-[#f082ac] cursor-pointer my-2">
                Process
              </h2>
              <h2 className="text-[#ea4c89] font-[500] hover:text-[#f082ac] cursor-pointer my-2">
                Meetups
              </h2>
              <h2 className="text-[#ea4c89] font-[500] hover:text-[#f082ac] cursor-pointer my-2">
                Updates
              </h2>
              <h2 className="text-[#ea4c89] font-[500] hover:text-[#f082ac] cursor-pointer my-2">
                Hang Time
              </h2>
              <h2 className="text-[#ea4c89] font-[500] hover:text-[#f082ac] cursor-pointer my-2">
                Community
              </h2>
            </div>
          </div>
        </div>
        <div>
          <ContributeStory
            // service={service}
            modalIsOpen={modalIsOpen}
            closeModal={closeModal}
            afterOpenModal={afterOpenModal}
          />
        </div>
      </div>
    </>
  );
}

export default Stories;
