import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { FaInbox } from "react-icons/fa";

function Modal({ handleClick }) {
  return (
    <>
      <div className="h-screen grid md:hidden fixed top-0 left-0 z-50 w-3/4 bg-white shadow-lg text-base border-2">
        <div className="flex items-center justify-start px-5 border-b-2 ">
          <span className="cursor-pointer" onClick={handleClick}>
            <AiOutlineClose />
          </span>
          <Link to="/">
            <div className="ml-6 font-['Montserrat']">
              <p className="font-normal">Bonnie's</p>{" "}
              <p className="tracking-[.5em] font-bold">Flair</p>
            </div>
          </Link>
        </div>

        <div className="p-5 border-b-2">
          <Link to="/login">
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
          </Link>
          <div className="flex justify-start items-center pt-5 font-normal">
            <span className="w-4 mr-4">
              <FaInbox />
            </span>
            <p className="font-['Poppins']">Orders</p>
          </div>
        </div>

        <div className="p-5 border-b-2">
          <div className="flex justify-between items-center">
            <p className="uppercase font-bold text-[#051D4C]">Our Categories</p>
            <Link to="/shop">
              <p className="font-semibold">See all</p>
            </Link>
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
