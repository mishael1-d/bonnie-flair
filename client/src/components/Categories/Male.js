import React from "react";
import Male2 from "../../assets/male-glasses/2.jpg";
function Male() {
  return (
    <>
      <div className="mt-10 shadow-xl rounded-l-2xl ml-1">
        <div className="bg-[#051D4C] rounded-tl-2xl">
          <div className="flex justify-between items-center px-20 py-5 text-white text-xl cursor-pointer">
            <div>Male Glasses</div>
            <div className="flex justify-between items-center space-x-8">
              <p>See All</p>
              <svg
                className="w-11 h-11"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex justify-between px-14 py-12 space-x-4">
          <div className="text-left">
            <div className="h-50 w-60 mb-4">
              <img
                className="w-full"
                src={Male2}
                alt="anti-blue light glasses"
              />
            </div>
            <div className="w-60 text-1xl">
              <p className=" mb-3">TECH stylish sophisticated sunglasses</p>
              <p className="font-bold">$14</p>
            </div>
          </div>
          <div className="text-left">
            <div className="h-50 w-60 mb-4">
              <img
                className="w-full"
                src={Male2}
                alt="anti-blue light glasses"
              />
            </div>
            <div className="w-60 text-1xl">
              <p className=" mb-3">Classic men squared polarized sunglasses</p>
              <p className="font-bold">$22</p>
            </div>
          </div>
          <div className="text-left">
            <div className="h-50 w-60 mb-4">
              <img
                className="w-full"
                src={Male2}
                alt="anti-blue light glasses"
              />
            </div>
            <div className="w-60 text-1xl">
              <p className="mb-3">Classic designer sunshades for men</p>
              <p className="font-bold">$12</p>
            </div>
          </div>
          <div className="text-left">
            <div className="h-50 w-60 mb-4">
              <img
                className="w-full"
                src={Male2}
                alt="anti-blue light glasses"
              />
            </div>
            <div className="w-60 text-1xl">
              <p className="mb-3">TECH stylish sophisticated sunglasses</p>
              <p className="font-bold">$18</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Male;
