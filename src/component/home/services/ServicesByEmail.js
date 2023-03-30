import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiFillFileAdd } from "react-icons/ai";
import { FcLike } from "react-icons/fc";
import { AiOutlineClose } from "react-icons/ai";

import Drawer from "react-modern-drawer";

//import styles 👇
import "react-modern-drawer/dist/index.css";
import SingleService from "../../../pages/services/SingleService";

function ServicesByEmail() {
  const [isOpen, setIsOpen] = React.useState(true);

  const navigate = useNavigate();
  const toggleDrawer = () => {
    navigate("/");
    setIsOpen((prevState) => !prevState);
  };

  return (
    <>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="bottom"
        size={"95%"}
        className="bla bla bla "
        style={{ overflow: "auto" }}
        onClick={() => navigate("/")}
      >
        <div>
          <div className="w-[90%] my-2 flex justify-end">
            <button onClick={toggleDrawer}>
              <AiOutlineClose className="font-bold" />
            </button>
          </div>
          <h1>ami tomake vlo basi</h1>
        </div>
      </Drawer>
    </>
  );
}

export default ServicesByEmail;
