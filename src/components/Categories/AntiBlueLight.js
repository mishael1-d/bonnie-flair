import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Antiblue1 from "../../assets/anti-blue-light/1.jpg";
import Antiblue2 from "../../assets/anti-blue-light/2.jpg";
import Antiblue3 from "../../assets/anti-blue-light/3.jpg";

function AntiBlueLight() {
  return (
    <>
      <div className="mt-10 mx-5 md:mx-0 shadow-xl rounded-l-2xl">
        <div className="rounded-t-2xl md:rounded-tr-none bg-[#051D4C]">
          <div className="px-5 md:px-10 lg:px-20 flex justify-between items-center py-5 text-1xl md:text-2xl text-white">
            <p className='flex flex-wrap'>Anti-blue light glasses</p>
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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 px-5 py-6">
          <div className="text-left">
            <img
              className="object-contain aspect-square w-full"
              src={Antiblue1}
              alt="anti-blue light glasses"
            />
            <div className="ml-7">
              <p className="mb-3 flex flex-wrap">Anti-blue light blocking Computer glasses</p>
              <p className="font-bold">$14</p>
            </div>
          </div>
          <div className="text-left">
            <img
              className="object-contain aspect-square w-full"
              src={Antiblue2}
              alt="anti-blue light glasses"
            />
            <div className="ml-7">
              <p className="mb-3">Anti-blue light blocking Computer glasses</p>
              <p className="font-bold">$22</p>
            </div>
          </div>
          <div className="">
            <img
              className="object-contain aspect-square w-full"
              src={Antiblue3}
              alt="anti-blue light glasses"
            />
            <div className="ml-7">
              <p className=" mb-3">Anti-blue light blocking Computer glasses</p>
              <p className="font-bold">$12</p>
            </div>
          </div>
          <div className="">
            <img
              className="object-contain aspect-square w-full"
              src={Antiblue2}
              alt="anti-blue light glasses"
            />
            <div className="ml-7">
              <p className=" mb-3">Anti-blue light blocking Computer glasses</p>
              <p className="font-bold">$18</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AntiBlueLight