import React from "react";
import { Link } from "react-router-dom";
import Background from "../assets/background/bg.png";
function Showcase() {
  return (
    <>
      <div className="flex text-2xl justify-between items-center relative basis-2/4 bg-[#051D4C] shadow-xl rounded-xl">
        <div className="uppercase ml-8 text-white font-bold w-10">
          Latest Transparent Glasses
        </div>
        <img
          className="w-60 h-50 absolute left-56 scale-50"
          src={Background}
          alt="hands up with glasses"
        />
        <Link to='/shop'>
        <div className="absolute bottom-0 right-0">
          <button className="text-xl bg-white text-black px-4 py-3 uppercase font-semibold rounded-br-xl">
            Shop Now
          </button>
        </div>
        </Link>
      </div>
    </>
  );
}

export default Showcase;
