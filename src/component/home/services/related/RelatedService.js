import React, { memo } from "react";

import { useGetRelatedServicesQuery } from "../../../../features/services/servicesApi";
import ServiceLodear from "../../../../pages/ui/ServiceLodear";
import ServiceItem from "../ServiceItem";

function RelatedService({ email }) {
  const { data, isLoading, isError } = useGetRelatedServicesQuery(email);

  const services = data?.data;

  /*   if (!services?.length) {
    return <>Loading</>;
  } */

  // decide what to render
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

  // console.log("this is main problem in code", services);

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

export default memo(RelatedService);
