import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import { useGetGroupProjectsQuery } from "../../../../features/services/servicesApi";
import { useSelector } from "react-redux";
import Services from "../Services";
import ServiceLodear from "../../../../pages/ui/ServiceLodear";
import { Link } from "react-router-dom";

function PaginatedItems({ itemsPerPage }) {
  const { user } = useSelector((state) => state.auth);
  const { searchTag } = useSelector((state) => state.searchTol);

  const {
    data: groupData,
    isLoading,
    isError,
  } = useGetGroupProjectsQuery(searchTag);

  console.log(groupData);

  const items = groupData?.service;
  let content;
  if (isLoading) {
    content = (
      <>
        <ServiceLodear />
        <ServiceLodear />
        <ServiceLodear />
        <ServiceLodear />
        <ServiceLodear />
        <ServiceLodear />
        <ServiceLodear />
      </>
    );
  }

  if (!isLoading && !isError && items?.length === 0) {
    content = (
      <>
        No Services found
        <ServiceLodear />
        <ServiceLodear />
        <ServiceLodear />
        <ServiceLodear />
        <ServiceLodear />
        <ServiceLodear />
      </>
    );
  }

  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items?.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items?.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items?.length;
    setItemOffset(newOffset);
  };

  if (!isLoading && isError) {
    content = (
      <>
        <ServiceLodear />
        <ServiceLodear />
        <ServiceLodear />
        <ServiceLodear />
        <ServiceLodear />
        <ServiceLodear />
        <ServiceLodear />
      </>
    );
  }

  return (
    <>
      {content && (
        <div className="w-[90%] mx-auto">
          <div className="grid md:grid-cols-4 gap-x-6 gap-y-8 my-12">
            {content}
          </div>
        </div>
      )}

      <div id="" className="">
        {items?.length && (
          <>
            <Services currentItems={currentItems} />
            <ReactPaginate
              breakLabel="..."
              nextLabel="next"
              onPageChange={handlePageClick}
              pageRangeDisplayed={12}
              pageCount={pageCount}
              previousLabel="previous"
              renderOnZeroPageCount={null}
              containerClassName="flex mt-4 "
              pageClassName=" p-5   bg-[pink]   h-8 w-8 flex items-center justify-center  border-t border-r border-b border-indigo-600 cursor-pointer"
              pageLinkClassName="  p-5   bg-[pink]   h-8 w-8 flex items-center justify-center  border-t border-r border-b border-indigo-600 cursor-pointer"
              activeLinkClassName="bg-[#0d6efd] text-white"
              nextClassName=" flex items-center justify-center  border-t p-2 border-r border-b border-indigo-600"
              previousClassName="flex items-center justify-center p-2 border border-indigo-600"
              disabledClassName="opacity-50 cursor-not-allowed"
              className="flex  mx-auto justify-center   "
            />
          </>
        )}
      </div>

      <div>
        <div className="flex items-center justify-center my-10 mx-auto">
          {!user?.email && (
            <>
              <button className="md:ml-5 w-[50%] md:w-[20%] text-white rounded-lg bg-[#ea4c89] p-2 hover:bg-[#f082ac]">
                <Link to={`/signUp`}>Sign Up To Continue</Link>
              </button>
              <button className="text-[#ea4c89] hover:text-[#f082ac] ml-10">
                <Link to={`/login`}>Or Sign In</Link>
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default PaginatedItems;
