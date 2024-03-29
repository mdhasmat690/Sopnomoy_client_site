import React from "react";
import { useSelector } from "react-redux";
import {
  AiTwotoneEdit,
  AiFillDelete,
  AiFillEye,
  AiFillFileAdd,
  AiFillHeart,
} from "react-icons/ai";
import { Link, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { useGetUserDataQuery } from "../../features/auth/authApi";
import {
  useDeleteProjectMutation,
  useGetRelatedServicesQuery,
} from "../../features/services/servicesApi";
import ServiceLodear from "../ui/ServiceLodear";
import ServiceItem from "../../component/home/services/ServiceItem";

function AgencyWorks() {
  const { email: user } = useSelector((state) => state?.auth?.user);
  const { agencyId } = useParams();
  console.log(agencyId, "id");
  const { data: serviceUserInto } = useGetUserDataQuery(agencyId);

  const { data, isLoading, isError } = useGetRelatedServicesQuery(agencyId);
  console.log(data);
  const [deleteProject, { isSuccess: deleteIsSuccess }] =
    useDeleteProjectMutation();

  const deleteClick = (service) => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteProject(service._id);
      }
    });
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

  if (!isLoading && !isError && data?.data?.length === 0) {
    content = (
      <>
        <ServiceLodear />
        <ServiceLodear />
        <ServiceLodear />
        <ServiceLodear />
        <ServiceLodear />
      </>
    );
  }

  if (!isLoading && !isError && data?.data?.length > 0) {
    content = data?.data.map((service, index) => (
      <ServiceItem key={service?._id} service={service} />
    ));
  }

  return (
    <div>
      <div className="grid md:grid-cols-3  gap-x-10 gap-y-8">{content}</div>
      <br />
    </div>
  );
}

export default AgencyWorks;
