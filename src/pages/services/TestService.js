import { useEffect, useState } from "react";
import { TiMessages } from "react-icons/ti";
import Drawer from "react-modern-drawer";
import Services from "../../component/home/services/Services";
import { useAuth } from "../../contexts/AuthContext";

function TestService({ isOpen, toggleDrawer, id }) {
  const [service, setService] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5000/api/v1/tools/postProject/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setService(data?.data);
      });
  }, [id]);

  return (
    <>
      <>
        {" "}
        <Drawer
          open={isOpen}
          onClose={toggleDrawer}
          duration={900}
          direction="bottom"
          size={"95%"}
          className="bla bla bla "
          style={{ overflow: "auto" }}
        >
          <div>
            <div className="w-[90%] my-2 flex justify-end">
              <button onClick={toggleDrawer}>
                {/* <AiOutlineClose className="font-bold" /> */}
                eit hoche test case
              </button>
            </div>
            {/* <SingleService id={service._id} /> */}
            eit hoche test case
            <br />
            <br />
            <br />
            <h1>dfgh</h1>
            {/* <Services /> */}
          </div>
        </Drawer>
      </>
    </>
  );
}

export default TestService;
