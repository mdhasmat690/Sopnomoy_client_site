import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../component/home/Footer";
import NaveBar from "../component/home/NaveBar";
import JobBoards from "../pages/findwork/JobBoard";

function Main(props) {
  return (
    <div>
      <NaveBar />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Main;
