import React, { memo, useRef, useState } from "react";

import { useGetRelatedServicesQuery } from "../../../../features/services/servicesApi";
import ServiceLodear from "../../../../pages/ui/ServiceLodear";

import { MdChevronLeft, MdChevronRight } from "react-icons/md";

import { Link } from "react-router-dom";
import RelatedServiceItem from "./RelatedServiceItem";

function RelatedService({ email }) {
  const { data, isLoading, isError } = useGetRelatedServicesQuery(email);
  const services = data?.data;
  const rowRef = useRef(null);
  const [isMoved, setIsMoved] = useState(false);

  const handleClick = (direction) => {
    setIsMoved(true);
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;

      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;
      rowRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  let content = null;
  if (isLoading) {
    content = (
      <>
        <ServiceLodear />
        <ServiceLodear />
        <ServiceLodear />
        <ServiceLodear />
      </>
    );
  }

  if (!isLoading && !isError && services?.length === 0) {
    content = (
      <>
        {" "}
        <ServiceLodear />
      </>
    );
  }

  if (!isLoading && !isError && services?.length > 0) {
    content = services.map((service, index) => (
      <RelatedServiceItem key={index} service={service} />
    ));
  }

  return (
    <>
      <div className="w-[90%] mx-auto">
        <div className="group relative md:-ml-2 mb-3 ">
          <MdChevronLeft
            className={`absolute top-0 bottom-0 left-2 z-40 m-auto text-[#ea4c89] h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100 ${
              !isMoved && "hidden"
            }`}
            onClick={() => handleClick("left")}
          />
          <div
            style={{ overflowX: "hidden" }}
            className="flex  space-x-[10px] overflow-x-scroll overflow-hidden md:space-x-[20px] md:p-2"
            ref={rowRef}
          >
            {content}
          </div>

          <MdChevronRight
            className="absolute top-0 bottom-0 right-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100 text-[#ea4c89]"
            onClick={() => handleClick("right")}
          />
        </div>
      </div>
    </>
  );
}

export default memo(RelatedService);
