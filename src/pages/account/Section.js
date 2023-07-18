import React, { useEffect, useState } from "react";

import { browserName, browserVersion, BrowserTypes } from "react-device-detect";

function Section() {
  /*   const [data, setData] = useState("");

  useEffect(() => {
    fetch("https://geolocation-db.com/json/")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => console.log(error));
  }, []);
 */
  return (
    <div>
      {/*  <div>
        <h1 className="text-[16px] font-bold">Your Sessions</h1>

        <div className="border-t border-solid border-[#dbdbde] my-2"></div>
        <h1 className="mt-4">
          This is a list of devices that have logged into your account. Revoke
          any sessions that you do not recognize.
        </h1>

        <h1 className="text-[16px] font-bold uppercase mt-4 mb-2">Device</h1>
        <div className="border-t border-solid border-[#dbdbde] my-2"></div>

        <h4 className="text-[14px] font-bold">{data?.IPv4}</h4>
        <h4 className="text-[14px] font-bold">
          Device: <span className="capitalize">{browserName}</span>
        </h4>
        <h4 className="text-[14px] font-bold">
          Last accessed: <span>{data?.latitude}</span>{" "}
        </h4>
        <h4 className="text-[14px] font-bold">Signed in: Apr 03, 2023</h4>
      </div> */}
    </div>
  );
}

export default Section;
