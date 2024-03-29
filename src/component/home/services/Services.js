import React from "react";
import {
  useGetGroupProjectsQuery,
  useGetServicesQuery,
} from "../../../features/services/servicesApi";
import ServiceItem from "./ServiceItem";
import ServiceLodear from "../../../pages/ui/ServiceLodear";
import { useSelector } from "react-redux";
import Selector from "./Selector";
import PaginatedItems from "./pagination/PaginatedItems";

function Services({ currentItems }) {
  const { user } = useSelector((state) => state.auth);
  const { searchTag } = useSelector((state) => state.searchTol);

  const { data } = useGetServicesQuery();
  const {
    data: groupData,
    isLoading,
    isError,
  } = useGetGroupProjectsQuery(searchTag);

  const services = groupData?.service;

  let content = null;

  // if (isLoading) {
  //   content = (
  //     <>
  //       <ServiceLodear />
  //       <ServiceLodear />
  //       <ServiceLodear />
  //       <ServiceLodear />
  //     </>
  //   );
  // }

  /*  if (!isLoading && isError) {
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
  } */

  /*   if (!isLoading && !isError && currentItems?.length === 0) {
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
  } */

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
          {/* <div className="flex items-center justify-center mt-10 mx-auto">
            {!user?.email && (
              <>
                {" "}
                <button className="md:ml-5 w-[50%] md:w-[20%] text-white rounded-lg bg-[#ea4c89] p-2 hover:bg-[#f082ac]">
                  Sign Up To Continue
                </button>
                <button className="text-[#ea4c89] hover:text-[#f082ac] ml-10">
                  Or Sign In
                </button>
              </>
            )}
          </div> */}
        </div>
      </div>
    </>
  );
}

export default Services;
