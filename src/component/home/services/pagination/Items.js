import React from "react";

function Items({ currentItems }) {
  console.log("parent", currentItems);
  return (
    <>
      {currentItems &&
        currentItems.map((item, index) => (
          <div key={index}>
            <h3>Item #{index}</h3>
          </div>
        ))}
    </>
  );
}

export default Items;
