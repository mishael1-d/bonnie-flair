import React, { useState } from "react";
import { Link } from "react-router-dom";

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
            <ul className="flex basis-3/4 w-full flex-col items-center ml-auto lg:flex-row list-none">
              <li className="nav-item basis-3/5">
                <form className="flex items-center">
                  <label htmlFor="voice-search" className="sr-only">
                    Search
                  </label>
                  <div className="relative w-full">
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
                      className="w- border text-[#000] text-base rounded-lg pl-10 p-3"
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
              <li className="nav-item basis-1/5">
                <button
                  type="submit"
                  className="flex items-center space-x-2 uppercase py-3 px-4 ml-5 font-medium border text-base rounded-lg"
                >
                  <svg
                    className="w-10 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Account</span>
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </button>
              </li>
              <Link to='/cart'>
              <li className="nav-item basis-1/5 cursor-pointer">
                <p className="px-3 py-2 flex items-center text-base hover:opacity-75">
                  <svg
                    className="w-8 h-10"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                  </svg>
                  <span>Cart</span>
                </p>
              </li>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
