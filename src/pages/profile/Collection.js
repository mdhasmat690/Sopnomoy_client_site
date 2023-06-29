import React from "react";
import { useGetCollectionsQuery } from "../../features/collection.api/collectionApi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Collection() {
  const { user } = useSelector((state) => state?.auth);
  const userEmail = user?.email;

  const { data, isLoading, isError } = useGetCollectionsQuery(userEmail);
  // console.log(data?.data);
  let content = null;

  if (isLoading) {
    content = (
      <>
        {/*  <ServiceLodear />
        <ServiceLodear />
        <ServiceLodear />
        <ServiceLodear /> */}
      </>
    );
  }

  if (!isLoading && isError) {
    content = (
      <>
        {/*  <ServiceLodear />
        <ServiceLodear />
        <ServiceLodear />
        <ServiceLodear />
        <ServiceLodear />
        <ServiceLodear />
        <ServiceLodear /> */}
      </>
    );
  }

  if (!isLoading && !isError && data?.data?.length === 0) {
    content = (
      <>
        {" "}
        <div className=" animate-pulse ">
          <div className="relative  ">
            <div className="aspect-video bg-slate-200 rounded-b-[8px]" />
          </div>
        </div>
        <div className=" animate-pulse ">
          <div className="relative  ">
            <div className="aspect-video bg-slate-200 rounded-b-[8px]" />
          </div>
        </div>
        <div className=" animate-pulse ">
          <div className="relative  ">
            <div className="aspect-video bg-slate-200 rounded-b-[8px]" />
          </div>
        </div>
      </>
    );
  }

  if (!isLoading && !isError && data?.data?.length > 0) {
    content = data?.data?.map((collection) => {
      const { collections } = collection;

      return (
        <>
          <Link to={`/profile/${collection?._id}`} className="cursor-pointer">
            <div className=" ">
              <img
                className="w-full md:w-[100%] h-[60%] rounded-t-[8px] hover:bg-[f082ac] bg-indigo-[#f082ac] hover:opacity-75 "
                src={collection?.image}
                alt=""
              />
              <div className="grid grid-cols-3 gap-1 mt-1">
                {collections.slice(0, 3)?.map?.((col) => (
                  <div>
                    <img
                      className="w-full md:w-[100%] h-[78%] rounded-b-[8px] hover:bg-[f082ac] bg-indigo-[#f082ac] "
                      src={col?.image}
                      alt=""
                    />
                  </div>
                ))}
                {collections?.length === 2 && (
                  <div className=" animate-pulse ">
                    <div className="relative  ">
                      <div className="aspect-video bg-slate-200 rounded-b-[8px]" />
                    </div>
                  </div>
                )}

                {collections?.length === 1 && (
                  <div className=" animate-pulse ">
                    <div className="relative  ">
                      <div className="aspect-video bg-slate-200 rounded-b-[8px] w-full" />
                    </div>
                  </div>
                )}
                {collections?.length === 1 && (
                  <div className=" animate-pulse ">
                    <div className="relative  ">
                      <div className="aspect-video bg-slate-200 rounded-b-[8px]" />
                    </div>
                  </div>
                )}
              </div>
              <div className="text-center pt-5">
                <h1 className="text-[16px] font-bold hover:underline">
                  {collection.collectionName}
                </h1>
                <h1 className="text-[#6e6d7a] text-[400] mt-[8px]  ">
                  {collections?.length} Shot • {collections?.length} Designer
                </h1>
              </div>
            </div>
          </Link>
        </>
      );
    });
  }

  return (
    <div>
      <div className="grid md:grid-cols-3 gap-x-8">
        {content}

        {/*  <div className="">
          <img
            className="w-full md:w-[100%] h-[60%] rounded-t-[8px] hover:bg-[f082ac] bg-indigo-[#f082ac] hover:opacity-75 "
            src="https://i.ibb.co/N1L1jLd/about.jpg"
            alt=""
          />
          <div className="grid grid-cols-3 gap-1 mt-1">
            <div className=" animate-pulse ">
              <div className="relative  ">
                <div className="aspect-video bg-slate-200 rounded-b-[8px]" />
              </div>
            </div>
            <div className=" animate-pulse ">
              <div className="relative  ">
                <div className="aspect-video bg-slate-200 rounded-b-[8px]" />
              </div>
            </div>
            <div className=" animate-pulse ">
              <div className="relative  ">
                <div className="aspect-video bg-slate-200 rounded-b-[8px]" />
              </div>
            </div>
          </div>
          <div className="text-center pt-5">
            <h1 className="text-[16px] font-bold ">web</h1>
            <h1 className="text-[#6e6d7a] text-[400] mt-[8px]">
              1Shot • 1Designer
            </h1>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Collection;
