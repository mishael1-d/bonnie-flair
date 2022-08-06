import React from "react";

function Sidebar({ direction }) {
  return (
    <>
      {direction === "left" ? (
        <>
          <div className="basis-1/4 grid pl-20 py-8 shadow-xl rounded-xl">
            <h5 className="font-bold mb-3">Categories</h5>
            <p className="mb-1 cursor-pointer">Male</p>
            <p className="mb-1 cursor-pointer">Female</p>
            <p className="mb-1 cursor-pointer">Kids</p>
            <p className="mb-1 cursor-pointer">unisex</p>
          </div>
        </>
      ) : (
        <>
          <div className="basis-1/4 grid pl-20 py-8 shadow-xl rounded-xl">
            <h5 className="font-bold mb-3">Categories</h5>
            <p className="mb-1 cursor-pointer">Anti-Bluelight</p>
            <p className="mb-1 cursor-pointer">Rimless</p>
            <p className="mb-1 cursor-pointer">Night Vision</p>
            <p className="mb-1 cursor-pointer">Luxury</p>
          </div>
        </>
      )}
    </>
  );
}

export default Sidebar;