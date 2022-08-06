import React from "react";
import Female1 from "../../assets/female-glasses/1.jpg";
import Female2 from "../../assets/female-glasses/2.jpg";
import Female3 from "../../assets/female-glasses/3.jpg";
import Female4 from "../../assets/female-glasses/4.jpg";

function Female() {
  return (
    <>
      <div className="mt-10 shadow-xl rounded-l-2xl ml-1">
        <div className="rounded-tl-2xl bg-[#051D4C]">
          <div className="px-20 flex justify-between items-center py-5 text-white text-xl cursor-pointer">
            <div>Female Glasses</div>
            <div className="flex justify-between items-center space-x-9">
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
        <div className="flex justify-between px-20 py-12">
          <div className="text-left">
            <div className="h-50 w-60 mb-4">
              <img
                className="w-full"
                src={Female1}
                alt="anti-blue light glasses"
              />
            </div>
            <div className="">
              <div className="w-60 text-1xl">
                <p className=" mb-3">Classic designer sunshade for ladies</p>
                <p className="font-bold">$14</p>
              </div>
            </div>
          </div>
          <div className="text-left">
            <div className="h-50 w-60 mb-4">
              <img
                className="w-full"
                src={Female2}
                alt="anti-blue light glasses"
              />
            </div>
            <div className="w-60 text-1xl">
              <p className="mb-3">Cut trimmed lens with temples sunglasses</p>
              <p className="font-bold">$22</p>
            </div>
          </div>
          <div className="text-left">
            <div className="h-50 w-60 mb-4">
              <img
                className="w-full"
                src={Female3}
                alt="anti-blue light glasses"
              />
            </div>
            <div className="">
              <div className="w-60 text-1xl">
                <p className=" mb-3">Classic designer sunshade for ladies</p>
                <p className="font-bold">$12</p>
              </div>
            </div>
          </div>
          <div className="text-left">
            <div className="h-50 w-60 mb-4">
              <img
                className="w-full"
                src={Female4}
                alt="anti-blue light glasses"
              />
            </div>
            <div className="">
              <div className="w-60 text-1xl">
                <p className="mb-3">Cut trimmed lens with temples sunglasses</p>
                <p className="font-bold">$18</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Female;
