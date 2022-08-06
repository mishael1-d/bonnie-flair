import React from "react";
import Antiblue1 from "../../assets/anti-blue-light/1.jpg";
import Antiblue2 from "../../assets/anti-blue-light/2.jpg";
import Antiblue3 from "../../assets/anti-blue-light/3.jpg";

function AntiBlueLight() {
  return (
    <>
      <div className="mt-10 shadow-xl rounded-l-2xl ml-1">
        <div className="rounded-tl-2xl bg-[#051D4C] text-base">
          <div className="px-20 flex justify-between items-center py-5 text-white text-xl">
            <p>Anti-blue light glasses</p>
            <div className="flex justify-between items-center space-x-5 cursor-pointer">
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
        <div className="flex justify-between px-14 py-6 space-x-4">
          <div className="text-left">
            <img
              className="h-72 w-72"
              src={Antiblue1}
              alt="anti-blue light glasses"
            />
            <div className="ml-7 text-1xl">
              <p className="mb-3">Anti-blue light blocking Computer glasses</p>
              <p className="font-bold">$14</p>
            </div>
          </div>
          <div className="text-left">
            <img
              className="h-72 w-72"
              src={Antiblue2}
              alt="anti-blue light glasses"
            />
            <div className="ml-7 text-1xl">
              <p className="mb-3">Anti-blue light blocking Computer glasses</p>
              <p className="font-bold">$22</p>
            </div>
          </div>
          <div className="text-left">
            <img
              className="h-72 w-72"
              src={Antiblue3}
              alt="anti-blue light glasses"
            />
            <div className="ml-7 text-1xl">
              <p className=" mb-3">Anti-blue light blocking Computer glasses</p>
              <p className="font-bold">$12</p>
            </div>
          </div>
          <div className="text-left">
            <img
              className="h-72 w-72"
              src={Antiblue2}
              alt="anti-blue light glasses"
            />
            <div className="ml-7 text-1xl">
              <p className=" mb-3">Anti-blue light blocking Computer glasses</p>
              <p className="font-bold">$18</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AntiBlueLight;
