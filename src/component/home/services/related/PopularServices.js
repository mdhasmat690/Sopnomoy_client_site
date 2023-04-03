import React from "react";
import ServiceItem from "../ServiceItem";
import { useGetServicesQuery } from "../../../../features/services/servicesApi";
import ServiceLodear from "../../../../pages/ui/ServiceLodear";

function PopularServices() {
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
    const shuffledServices = [...services]?.sort(() => 0.5 - Math.random());

    const randomServices = shuffledServices?.slice(0, 8);

    content = randomServices?.map((service, index) => (
      <ServiceItem key={index} service={service} />
    ));
  }

  return (
    <>
      <div id="projects" className="w-[90%] mx-auto">
        <div className="mx-auto px-2 py-5">
          <div className="grid md:grid-cols-4 gap-6">{content}</div>
        </div>
      </div>
    </>
  );
}
export default PopularServices;
