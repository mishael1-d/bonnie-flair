import React, { useState } from "react";

// react-router
import { Link } from "react-router-dom";

// dropdown component
import Dropdown from "./Dropdown";

// react icons
import { BsCart, BsSearch } from "react-icons/bs";

function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <div className="sticky top-0 bg-white z-50">
      <nav className="mb-10 shadow-lg h-20">
        <div className="flex items-center px-20 py-2">
          <div className="basis-1/4">
            <div className=" font-bold text-justify inline-block py-2 whitespace-nowrap">
              <Link to="/">
                <p className="font-['Montserrat'] font-normal">Bonnie's</p>{" "}
                <p className="font-['Montserrat'] tracking-[.5em]">Flair</p>
              </Link>
            </div>
            <button
              className="cursor-pointer text-1xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex basis-4/4 w-full flex-col items-center ml-auto lg:flex-row list-none">
              <li className="nav-item basis-3/5">
                <form className="flex items-center">
                  <label htmlFor="voice-search" className="sr-only">
                    Search
                  </label>
                  <div className="relative w-full">
                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                      <BsSearch />
                    </div>
                    <input
                      type="text"
                      className="w-full border text-[#000] text-base rounded-lg pl-10 p-3"
                      placeholder="Search Products, Brands, Categories"
                      required=""
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex uppercase items-center py-3 px-4 ml-5 text-base font-medium text-white bg-[#051D4C] rounded-lg hover:bg-blue-900"
                  >
                    Search
                  </button>
                </form>
              </li>
              <li className="nav-item basis-2/5">
                <Dropdown />
              </li>
              <li className="nav-item cursor-pointer ml-auto">
                <Link to="/cart">
                  <div className="flex items-center">
                    <span className="mr-2">
                      <BsCart />
                    </span>
                    <span>Cart</span>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
