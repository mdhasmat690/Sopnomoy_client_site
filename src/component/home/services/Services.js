import React from "react";
import { useGetServicesQuery } from "../../../features/services/servicesApi";
import ServiceItem from "./ServiceItem";
import ServiceLodear from "../../../pages/ui/ServiceLodear";
import { useSelector } from "react-redux";

function Services() {
  const { user } = useSelector((state) => state.auth);
  console.log(user);
  const { data, isLoading, isError } = useGetServicesQuery();
  const services = data?.data;

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

  if (!isLoading && isError) {
    content = <>there was an error</>;
  }

  if (!isLoading && !isError && services?.length === 0) {
    content = <>No videos found!</>;
  }

  if (!isLoading && !isError && services?.length > 0) {
    content = services.map((service, index) => (
      <ServiceItem key={index} service={service} />
    ));
  }

  return (
    <>
      <br />
      <br />
      <br />
      <div id="projects" className="w-[90%] mx-auto">
        <div className=" w-[90%] mx-auto  py-5">
          <button>Popular</button>
        </div>
        <div className="mx-auto px-2 py-5">
          <div className="grid md:grid-cols-4 gap-6">{content}</div>
          <div className="flex items-center justify-center mt-10 mx-auto">
            {!user?.email && (
              <>
                {" "}
                <button className="ml-5 w-[20%] text-white rounded-lg bg-[#ea4c89] p-2 hover:bg-[#f082ac]">
                  Sign Up To Continue
                </button>
                <button className="text-[#ea4c89] hover:text-[#f082ac] ml-10">
                  Or Sign In
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
