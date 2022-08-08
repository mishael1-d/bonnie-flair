import React from "react";
import { Link } from "react-router-dom";

function Sidebar({ direction }) {
  return (
    <>
      {direction === "left" ? (
        <>
          <div className="basis-1/4 grid pl-20 py-8 shadow-xl rounded-xl">
            <h5 className="font-bold mb-3">Categories</h5>
            <Link to="/shop">
              <p className="mb-1 cursor-pointer hover:text-[#051d4c]">
                All categories
              </p>
            </Link>
            <p className="mb-1 cursor-pointer hover:text-[#051d4c]">Male</p>
            <p className="mb-1 cursor-pointer hover:text-[#051d4c]">Female</p>
            <p className="mb-1 cursor-pointer hover:text-[#051d4c]">Kids</p>
            <p className="mb-1 cursor-pointer hover:text-[#051d4c]">Unisex</p>
          </div>
        </>
      ) : (
        <>
          <div className="basis-1/4 grid pl-20 py-8 shadow-xl rounded-xl">
            <h5 className="font-bold mb-3">Categories</h5>
            <p className="mb-1 cursor-pointer hover:text-[#051d4c]">
              Anti-Bluelight
            </p>
            <p className="mb-1 cursor-pointer hover:text-[#051d4c]">Fashion</p>
            <p className="mb-1 cursor-pointer hover:text-[#051d4c]">Rimless</p>
            <p className="mb-1 cursor-pointer hover:text-[#051d4c]">
              Night Vision
            </p>
            <p className="mb-1 cursor-pointer hover:text-[#051d4c]">Luxury</p>
          </div>
        </>
      )}
    </>
  );
}

export default Sidebar;
