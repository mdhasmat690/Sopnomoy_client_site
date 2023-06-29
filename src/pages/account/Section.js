import React from "react";

function Section(props) {
  return (
    <div>
      <div>
        <h1 className="text-[16px] font-bold">Your Sessions</h1>

        <div className="border-t border-solid border-[#dbdbde] my-2"></div>
        <h1 className="mt-4">
          This is a list of devices that have logged into your account. Revoke
          any sessions that you do not recognize.
        </h1>

        <h1 className="text-[16px] font-bold uppercase mt-4 mb-2">Device</h1>
        <div className="border-t border-solid border-[#dbdbde] my-2"></div>

        <td>
          <tr className="text-[14px] font-bold">37.111.222.124</tr>
          <tr className="text-[14px] font-bold">Device</tr>
          <tr className="text-[14px] font-bold">
            Last accessed: <span>May 16, 2023</span>{" "}
          </tr>
          <tr className="text-[14px] font-bold">Signed in: Apr 03, 2023</tr>
        </td>
      </div>
    </div>
  );
}

export default Section;
