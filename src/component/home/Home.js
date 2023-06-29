import React from "react";
import Services from "./services/Services";
import Video from "./video/Video";
import ChatUi from "../chating/ChatUi";
import PaginatedItems from "./services/pagination/PaginatedItems";

function Home(props) {
  return (
    <div>
      <Video />

      <>
        <PaginatedItems itemsPerPage={5} />
      </>

      {/* <Services /> */}
    </div>
  );
}

export default Home;
