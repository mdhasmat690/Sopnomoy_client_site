import React from "react";
import { useParams } from "react-router-dom";
import { useGetUserLikedServicesQuery } from "../../features/services/servicesApi";
import ServiceLodear from "../ui/ServiceLodear";
import ServiceItem from "../../component/home/services/ServiceItem";

function AgencyLike() {
  const { agencyId } = useParams();
  const { data, isLoading, isError } = useGetUserLikedServicesQuery(agencyId);
  console.log(data, "data");
  console.log(data?.data);

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

  if (!isLoading && !isError && data?.data?.length === 0) {
    content = (
      <>
        {" "}
        <ServiceLodear />
        <ServiceLodear />
        <ServiceLodear />
        <ServiceLodear />
        <ServiceLodear />
        <ServiceLodear />
      </>
    );
  }

  if (!isLoading && !isError && data?.data?.length > 0) {
    content = data?.data.map((service) => (
      <ServiceItem key={service?._id} service={service} />
    ));
  }

  return (
    <div>
      <div className="grid md:grid-cols-3 gap-x-10 gap-y-8">{content}</div>
    </div>
  );
}

export default AgencyLike;
