import React from "react";
import Services from "./services/Services";
import Video from "./video/Video";

function Home(props) {
  return (
    <div>
      <Video />
      <Services />
    </div>
  );
}

export default Home;
