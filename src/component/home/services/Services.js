import React, { useEffect, useState } from "react";
import ServiceItem from "./ServiceItem";
import { AiFillFileAdd } from "react-icons/ai";
import { FcLike } from "react-icons/fc";

import Drawer from "react-modern-drawer";

//import styles 👇
import "react-modern-drawer/dist/index.css";
import { Link } from "react-router-dom";

function Services() {
  const [services, setServices] = useState([]);

  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  useEffect(() => {
    fetch("http://localhost:5000/api/v1/tools/postProject")
      .then((res) => res.json())
      .then((data) => setServices(data?.data));
  }, []);

  if (!services.length) {
    return <>Loading</>;
  }

  return (
    <>
      {/*  <>
        <Drawer
          open={isOpen}
          onClose={toggleDrawer}
          direction="bottom"
          size={"95%"}
          className="bla bla bla "
          style={{ overflow: "auto" }}
        >
          <div>
            <SingleService />
          </div>
        </Drawer>
      </> */}

      <div id="projects" className="w-[90%] mx-auto">
        <div className=" w-[90%] mx-auto  py-5">
          <button>Popular</button>
        </div>
        <div className="  mx-auto px-2 py-5">
          <div className="grid md:grid-cols-4 gap-6">
            {services?.map((service, index) => (
              <ServiceItem service={service} />
            ))}
          </div>
          <div className="flex items-center justify-center mt-10 mx-auto">
            <button className="ml-5 w-[20%] text-white rounded-lg bg-[#ea4c89] p-2 hover:bg-[#f082ac]">
              Sign Up To Continue
            </button>

            <button className="text-[#ea4c89] hover:text-[#f082ac] ml-10">
              Or Sign In
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
