import React from "react";

function Sidebar({ direction }) {
  return (
    <>
      {direction === "left" ? (
        <>
          <div className="basis-1/4 grid pl-20 py-8 shadow-xl rounded-xl">
            <h5 className="font-bold mb-5">Categories</h5>
            <p>Male</p>
            <p>Female</p>
            <p>Kids</p>
            <p>unisex</p>
          </div>
        </>
      ) : (
        <>
          <div className="basis-1/4 grid pl-20 py-8 shadow-xl rounded-xl">
            <p className="font-bold mb-5">Categories</p>
            <p>Anti-Bluelight</p>
            <p>Rimless</p>
            <p>Night Vision</p>
            <p>Luxury</p>
          </div>
        </>
      )}
    </>
  );
}

export default Sidebar;
