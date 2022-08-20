import React, { useState } from "react";
import Dropdown from "../Dropdown";
import Mobilenavbar from "./Mobilenavbar";

function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);

    const handleClick = () => {
      setNavbarOpen(!navbarOpen);
    }
  return (
    <div>
      <nav className="shadow-3xl mb-0 sm:mb-10 h-20">
        <div className="flex items-center px-5 md:px-10 lg:px-20 py-2">
          <div className="flex items-center basis-1/4">
            <div onClick={handleClick} className="">
                  <button
                    className="mr-6 cursor-pointer text-xl border border-solid border-transparent rounded bg-transparent block md:hidden outline-none focus:outline-none"
                    type="button"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
                  </button>
            </div>
            <div className=" font-bold text-justify inline-block py-2 whitespace-nowrap">
              <div>
                <p className="font-['Montserrat'] font-normal">Bonnie's</p>{" "}
                <p className="font-['Montserrat'] tracking-[.5em]">Flair</p>
              </div>
            </div>
            
          </div>
          <ul className="flex basis-3/4 w-full justify-end items-center space-x-3 ml-auto list-none">
            <li className="nav-item">
              <form className="hidden sm:flex items-center space-x-3">
                <div className="relative">
                  <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <svg
                      aria-hidden="true"
                      className="w-6 h-6 text-gray-500 dark:text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <input
                    type="text"
                    className="border border-black text-[#A9B0B9] text-base lg:text-xl rounded-lg pl-10 p-3"
                    placeholder="Search Products, Brands, Categories"
                    required=""
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex uppercase items-center py-3 px-4 text-base lg:text-xl font-medium text-white bg-[#051D4C] rounded-lg hover:bg-blue-900"
                >
                  Search
                </button>
              </form>
            </li>
            <li className="nav-item">
              <Dropdown />
            </li>
            <li className="nav-item flex items-center text-base lg:text-xl  hover:opacity-75">
              <svg className="w-6 h-6 mr-2" viewBox="0 0 56 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M51.345 29.4257L55.941 9.11318C56.2728 7.64658 55.163 6.25 53.6657 6.25H15.4786L14.5874 1.87402C14.3654 0.783301 13.4099 0 12.3014 0H2.33333C1.04465 0 0 1.04932 0 2.34375V3.90625C0 5.20068 1.04465 6.25 2.33333 6.25H9.12752L15.9572 39.7886C14.3233 40.7324 13.2222 42.5021 13.2222 44.5312C13.2222 47.5516 15.6598 50 18.6667 50C21.6736 50 24.1111 47.5516 24.1111 44.5312C24.1111 43.0006 23.4843 41.6177 22.4755 40.625H42.8578C41.849 41.6177 41.2222 43.0006 41.2222 44.5312C41.2222 47.5516 43.6598 50 46.6667 50C49.6736 50 52.1111 47.5516 52.1111 44.5312C52.1111 42.366 50.8581 40.4949 49.0409 39.6089L49.5773 37.2382C49.9091 35.7716 48.7993 34.375 47.302 34.375H21.2058L20.5695 31.25H49.0697C50.1592 31.25 51.1036 30.4928 51.345 29.4257Z" fill="black"/>
              </svg>
              <span className="hidden md:flex">Cart</span>
            </li>
          </ul>
          {navbarOpen && <Mobilenavbar handleClick={handleClick} /> }
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
