import React from 'react'
import Male2 from "../../assets/male-glasses/2.jpg";
function Male() {
  return (
    <>
<div className="mt-10 mx-5 md:mx-0 shadow-xl rounded-l-2xl">
        <div className="bg-[#051D4C] rounded-t-2xl md:rounded-tr-none">
          <div className="flex justify-between items-center px-5 md:px-10 lg:px-20 py-5 text-white text-1xl md:text-2xl">
            <div>Male Glasses</div>
            <div className="flex justify-between items-center space-x-8">
              <p>See All</p>
              <svg
                className="w-7 h-7 md:w-11 md:h-11"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 px-10 py-12">
          <div className="space-y-3">
            <div className="">
              <img
                className="object-contain aspect-square w-full"
                src={Male2}
                alt="anti-blue light glasses"
              />
            </div>
            <div className="text-1xl">
              <p className=" mb-3">TECH stylish sophisticated sunglasses</p>
              <p className="font-bold">$14</p>
            </div>
          </div>
          <div className="space-y-3">
            <div className="">
              <img
                className="object-contain aspect-square w-full"
                src={Male2}
                alt="anti-blue light glasses"
              />
            </div>
            <div className="text-1xl">
              <p className=" mb-3">Classic men squared polarized sunglasses</p>
              <p className="font-bold">$22</p>
            </div>
          </div>
          <div className="space-y-3">
            <div className="">
              <img
                className="object-contain aspect-square w-full"
                src={Male2}
                alt="anti-blue light glasses"
              />
            </div>
            <div className="text-1xl">
              <p className="mb-3">Classic designer sunshades for men</p>
              <p className="font-bold">$12</p>
            </div>
          </div>
          <div className="space-y-3">
            <div className="">
              <img
                className="object-contain aspect-square w-full"
                src={Male2}
                alt="anti-blue light glasses"
              />
            </div>
            <div className="text-1xl">
              <p className="mb-3">TECH stylish sophisticated sunglasses</p>
              <p className="font-bold">$18</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Male