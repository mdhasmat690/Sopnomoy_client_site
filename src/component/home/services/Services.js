import React from "react";
import ServiceItem from "./ServiceItem";

function Services() {
  return (
    <div id="projects" className="w-full">
      <div className=" w-[85%] mx-auto  py-5">
        <button>Popular</button>
      </div>
      <div className="  mx-auto px-2 py-5">
        <div className="grid md:grid-cols-4 gap-4">
          <ServiceItem
            title="Property Finder"
            backgroundImg="https://i.ibb.co/z8S8RST/about.jpg"
            tech="React JS"
          />
          <ServiceItem
            title="Property Finder"
            backgroundImg="https://i.ibb.co/z8S8RST/about.jpg"
            tech="React JS"
          />
          <ServiceItem
            title="Property Finder"
            backgroundImg="https://i.ibb.co/z8S8RST/about.jpg"
            tech="React JS"
          />
          <ServiceItem
            title="Property Finder"
            backgroundImg="https://i.ibb.co/z8S8RST/about.jpg"
            tech="React JS"
          />
          <ServiceItem
            title="Property Finder"
            backgroundImg="https://i.ibb.co/z8S8RST/about.jpg"
            tech="React JS"
          />
          <ServiceItem
            title="Property Finder"
            backgroundImg="https://i.ibb.co/z8S8RST/about.jpg"
            tech="React JS"
          />
          <ServiceItem
            title="Property Finder"
            backgroundImg="https://i.ibb.co/z8S8RST/about.jpg"
            tech="React JS"
          />
          <ServiceItem
            title="Property Finder"
            backgroundImg="https://i.ibb.co/z8S8RST/about.jpg"
            tech="React JS"
          />
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
  );
}

export default Services;
