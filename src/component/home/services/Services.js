import React from "react";
import {
  useGetGroupProjectsQuery,
  useGetServicesQuery,
} from "../../../features/services/servicesApi";
import ServiceItem from "./ServiceItem";
import { useSelector } from "react-redux";
import Selector from "./Selector";

function Services({ currentItems }) {
  const { searchTag } = useSelector((state) => state.searchTol);

  const {
    data: groupData,
    isLoading,
    isError,
  } = useGetGroupProjectsQuery(searchTag);

  let content = null;

  if (!isLoading && !isError && currentItems?.length > 0) {
    content = currentItems?.map((service, index) => (
      <ServiceItem key={index} service={service} />
    ));
  }

  return (
    <>
      <br />

      <div id="projects" className="w-[90%] mx-auto">
        <div className=" w-[97%] mx-auto  py-5">
          <Selector />
        </div>
        <div className="mx-auto px-2 py-5">
          <div className="grid md:grid-cols-4 gap-x-6 gap-y-8">{content}</div>
        </div>
      </div>
    </>
  );
}

export default Services;
