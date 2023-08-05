import React from "react";
import Video from "./video/Video";
import PaginatedItems from "./services/pagination/PaginatedItems";

function Home() {
  return (
    <div>
      <Video />

      <>
        <PaginatedItems itemsPerPage={12} />
      </>
    </div>
  );
}
export default Home;
