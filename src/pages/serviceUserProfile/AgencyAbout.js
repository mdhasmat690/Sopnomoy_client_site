import React from "react";

import { HiLocationMarker } from "react-icons/hi";
import { TiContacts } from "react-icons/ti";
import { useParams } from "react-router-dom";
import { useGetUserDataQuery } from "../../features/auth/authApi";

function AgencyAbout() {
  const { agencyId } = useParams();
  const { data: serviceUserInto } = useGetUserDataQuery(agencyId);
  const user = serviceUserInto?.data;
  return (
    <div className="w-[80%] mx-auto">
      <br />

      <div className="grid md:grid-cols-3 gap-4">
        <div className="col-span-2">
          {" "}
          <h1 className="text-[#0d0c22] text-[16] font-bold leading-[1em]">
            Biography
          </h1>
          <h1 className="  cursor-pointer text-[16px] font-[400] mt-5 leading-[28px]   ">
            {user?.bio}
          </h1>
        </div>
        <div className="col-span-1">
          <div className="bg-[#fafafb] rounded-[8px] py-[10px]  md:px-[20px] mx-auto mb-4 mr-14 w-[99%]">
            <h1 className="flex items-center #3d3d4e my-2">
              <span className="mr-2">
                <HiLocationMarker />
              </span>
              {user?.location}
            </h1>
            <h1 className="flex items-center text-[#3d3d4e]">
              <span className="mr-2">
                <TiContacts />
              </span>{" "}
              Member since Feb 2023
            </h1>
          </div>
        </div>
      </div>

      <br />

      <div className="grid md:grid-cols-3 gap-4">
        <div className="col-span-2">
          {" "}
          <div>
            <div className="md:hidden block"></div>
            <h1 className="text-[#0d0c22] text-[16] font-bold leading-[1em]">
              Skills
            </h1>
            <div class="flex flex-wrap  gap-3 my-4">
              <button class="flex bg-[#f3f3f4] px-1 rounded-[6px]">
                animation animation
              </button>
              <button class="flex bg-[#f3f3f4] px-1 rounded-[6px]">
                app design
              </button>
              <button class="flex bg-[#f3f3f4] px-1 rounded-[6px]">
                branding
              </button>
              <button class="flex bg-[#f3f3f4] px-1 rounded-[6px]">
                dashboard
              </button>
              <button class="flex bg-[#f3f3f4] px-1 rounded-[6px]">icon</button>
              <button class="flex bg-[#f3f3f4] px-1 rounded-[6px]">
                illustration
              </button>
              <button class="flex bg-[#f3f3f4] px-1 rounded-[6px]">
                interaction design
              </button>
              <button class="flex bg-[#f3f3f4] px-1 rounded-[6px]">
                landing page
              </button>
              <button class="flex bg-[#f3f3f4] px-1 rounded-[6px]">
                logo design
              </button>
              <button class="flex bg-[#f3f3f4] px-1 rounded-[6px]">
                product design
              </button>
              <button class="flex bg-[#f3f3f4] px-1 rounded-[6px]">saas</button>
              <button class="flex bg-[#f3f3f4] px-1 rounded-[6px]">ui</button>
              <button class="flex bg-[#f3f3f4] px-1 rounded-[6px]">ux</button>
              <button class="flex bg-[#f3f3f4] px-1 rounded-[6px]">
                web design
              </button>
              <button class="flex bg-[#f3f3f4] px-1 rounded-[6px]">
                websites
              </button>
            </div>
          </div>
        </div>
        <div className="col-span-1 ">
          {" "}
          <div className="ml-15">
            {" "}
            <h1 className="text-[#0d0c22] text-[16] font-bold leading-[1em]">
              Social
            </h1>
            <h1>Linkedin</h1>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-8 gap-x-4 my-4">
        <div className="col-span-5 ">
          <div className="border-t border-indigo-[#f3f3f4] w-[100%]"></div>
          <div className="text-[#6e6d7a] text-[14px] font-[400] mt-4 md:mt-8">
            <span className="mr-4">0 followers </span>
            <span>0 following</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AgencyAbout;
