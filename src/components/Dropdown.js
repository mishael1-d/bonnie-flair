import React, { useState, useEffect, useRef } from "react";

//react-icons
import { BiUser } from "react-icons/bi";
import { BsCaretDown } from "react-icons/bs";
import { FaInbox } from "react-icons/fa";

//react router
import { Link } from "react-router-dom";

function Dropdown() {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleClick = () => {
    setShowDropdown(!showDropdown);
  };

  const ref = useRef(null);
  useEffect(() => listenForOnClickOutside(ref, setShowDropdown), [ref]);

  return (
    <>
      <div className="hidden md:flex justify-center" ref={ref}>
        <div className="relative">
          <button
            onClick={handleClick}
            className="
                        border
                        border-black
                        px-3
                        lg:px-4
                        py-3
                        bg-white
                        font-medium
                        text-base 
                        lg:text-xl
                        rounded-lg
                        shadow-sm
                        hover:text-blue-900 hover:border-blue-900 focus:shadow-md focus:outline-none focus:ring-0
                        active:shadow-md
                        transition
                        duration-150
                        ease-in-out
                        flex
                        items-center
                        "
            type="button"
            aria-expanded="false"
          >
            <span>
              <BiUser />
            </span>
            <span className="mx-2">Account</span>
            <span>
              <BsCaretDown />
            </span>
          </button>
          {showDropdown && (
            <ul
              className="
                        absolute
                        bg-white
                        text-lg
                        z-50
                        pt-2 pb-5
                        list-none
                        text-left
                        rounded-lg
                        shadow-lg
                        mt-2
                        border-t
                        "
              aria-labelledby="dropdownMenuButton1"
            >
              <li className="p-6 border-b">
                <Link to="/login">
                  <button
                    className="rounded text-md text-white uppercase py-2 px-4 block w-full whitespace-nowrap bg-[#051D4C]"
                    onClick={() => setShowDropdown(false)}
                  >
                    Sign in
                  </button>
                </Link>
              </li>
              <li onClick={() => setShowDropdown(false)}>
                <div className="flex items-center text-1xl py-2 px-4 w-full whitespace-nowrap bg-transparent hover:bg-gray-100">
                  <span className="mr-2">
                    <BiUser />
                  </span>
                  <Link to="/my-account">
                    <p>My Account</p>
                  </Link>
                </div>
              </li>
              <li onClick={() => setShowDropdown(false)}>
                <div className="flex items-center text-1xl py-2 px-4 w-full whitespace-nowrap bg-transparent hover:bg-gray-100">
                  <span className="mr-2">
                    <FaInbox />
                  </span>
                  <p>My Orders</p>
                </div>
              </li>
            </ul>
          )}
        </div>
      </div>
      <span className="mr-1 sm:mr-2 md:hidden w-10 h-10 flex items-center">
        <BiUser />
      </span>
    </>
  );
}

// onOutsideClick functionality
function listenForOnClickOutside(ref, setShowDropdown) {
  return () => {
    if (!ref.current) return;
    [`click`, `touchstart`].forEach((type) => {
      document.addEventListener(`click`, (evt) => {
        if (ref.current.contains(evt.target)) return;
        setShowDropdown(false);
      });
    });
  };
}

export default Dropdown;
