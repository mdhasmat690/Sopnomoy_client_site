import React from "react";
import Services from "./services/Services";
import Video from "./video/Video";
import ChatUi from "../chating/ChatUi";

function Home(props) {
  return (
    <div>
      <Video />
      <ChatUi />
      <Services />
    </div>
  );
}

export default Home;
