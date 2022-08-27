import React from "react";
import { Link } from "react-router-dom";
import {AiOutlineClose} from 'react-icons/ai'

function Modal({ handleClick }) {
  return (
    <>
      <div className="h-screen grid md:hidden fixed top-0 left-0 z-50 w-3/4 bg-white shadow-lg text-base border-2">
        <div className="flex items-center justify-start px-5 border-b-2 ">
          <span className="cursor-pointer" onClick={handleClick}>

          <AiOutlineClose/>
          </span>
          <Link to="/">
            <div className="ml-6 font-['Montserrat']">
              <p className="font-normal">Bonnie's</p>{" "}
              <p className="tracking-[.5em] font-bold">Flair</p>
            </div>
          </Link>
        </div>

        <div className="p-5 border-b-2">
          <div className="flex justify-between items-center">
            <p className="uppercase font-bold text-[#051D4C]">my account</p>
            <svg
              className="w-2 h-4"
              viewBox="0 0 9 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 13.5432V0.978508C0 0.108488 1.0519 -0.327205 1.66709 0.287981L7.94941 6.5703C8.33076 6.95165 8.33076 7.57001 7.94941 7.95136L1.66709 14.2337C1.0519 14.8489 0 14.4132 0 13.5432Z"
                fill="#051D4C"
              />
            </svg>
          </div>
          <div className="flex justify-start items-center pt-5 font-normal">
            <svg
              className="w-5 mr-4"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24.8779 9.01367L22.4072 1.60156C22.0898 0.644531 21.1963 0 20.1855 0H13.2812V9.375H24.9365C24.917 9.25293 24.917 9.13086 24.8779 9.01367ZM11.7188 0H4.81445C3.80371 0 2.91016 0.644531 2.59277 1.60156L0.12207 9.01367C0.0830078 9.13086 0.0830078 9.25293 0.0634766 9.375H11.7188V0ZM0 10.9375V22.6562C0 23.9502 1.0498 25 2.34375 25H22.6562C23.9502 25 25 23.9502 25 22.6562V10.9375H0Z"
                fill="black"
              />
            </svg>
            <p className="font-['Poppins']">Orders</p>
          </div>
        </div>

        <div className="p-5 border-b-2">
          <div className="flex justify-between items-center">
            <p className="uppercase font-bold text-[#051D4C]">Our Categories</p>
            <p className="font-semibold">See all</p>
          </div>
          <div className="pt-5 font-normal font-['Poppins']">
            <p>Male</p>
            <p>Female</p>
            <p>Kids</p>
            <p>Unisex</p>
            <p>Anti-blue light</p>
            <p>Rimless</p>
            <p>Night Vision</p>
            <p>Luxury</p>
            <p>Fashion</p>
          </div>
        </div>

        <div className="p-5 font-['Poppins']">
          <p>Contact Us</p>
        </div>
      </div>
    </>
  );
}
export default Modal;
