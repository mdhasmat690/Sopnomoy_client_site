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
        <PaginatedItems itemsPerPage={12} />
      </>

      {/* <Services /> */}
    </div>
  );
}

export default Home;

/* 

// https://i.ibb.co/GHV7zzV/cafe-4.webp
// https://i.ibb.co/FHnzv4g/cafe-3.webp
// https://i.ibb.co/s3G2xzn/cafe-2.webp
//  https://i.ibb.co/3dDtGrZ/cafe-1.webp


https://i.ibb.co/56rNQqJ/food-Delevery-4.webp
// https://i.ibb.co/VBxw6pf/food-Delevery-3.webp
// https://i.ibb.co/9W3RDMR/food-Delevery-2.webp
// https://i.ibb.co/PT6mtDS/food-Delevery-1.webp


// https://i.ibb.co/GMTrJF6/3-D-Composition-4.webp
https://i.ibb.co/MgfxvHP/3-D-Composition-5.webp
https://i.ibb.co/gj7qCMG/3-D-Composition-3.webp



https://i.ibb.co/Yc73T6X/original-3.webp  
*/
