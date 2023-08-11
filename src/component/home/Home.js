import React from "react";
import Video from "./video/Video";
import PaginatedItems from "./services/pagination/PaginatedItems";
import Support from "./support/Support";

function Home() {
  return (
    <div>
      <Video />

      <>
        <PaginatedItems itemsPerPage={12} />
        <Support />
      </>
    </div>
  );
}
export default Home;
