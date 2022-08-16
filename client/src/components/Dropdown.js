import React, { useState, useEffect, useRef } from "react";
import { BiUser } from "react-icons/bi";
import { BsCaretDown } from "react-icons/bs";
import { FaInbox } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
function Dropdown() {
  const [showDropdown, setShowDropdown] = useState(false);
  const { currentUser, logout } = useAuth();
  const handleClick = () => {
    setShowDropdown(!showDropdown);
  };

  const ref = useRef(null);
  useOnClickOutside(ref, () => setShowDropdown(false));

  const handleLogout = () => {
    logout();
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="flex justify-center">
      <div className="dropdown relative">
        {!currentUser ? (
          <button
            onClick={handleClick}
            className="ml-5 border px-4 py-3 bg-white font-medium text-lg rounded-lg shadow-sm hover:text-blue-900 hover:border-blue-900 focus:shadow-md focus:outline-none focus:ring-0 active:shadow-md transition duration-150 ease-in-out flex items-center whitespace-nowrap"
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
        ) : (
          <button
            onClick={handleClick}
            className="ml-5 border px-4 py-3 bg-white font-medium text-lg rounded-lg shadow-sm hover:text-blue-900 hover:border-blue-900 focus:shadow-md focus:outline-none focus:ring-0 active:shadow-md transition duration-150 ease-in-out flex items-center whitespace-nowrap"
            type="button"
            aria-expanded="false"
          >
            <span>
              <BiUser />
            </span>
            <span className="mx-2">Hi</span>
            <span>
              <BsCaretDown />
            </span>
          </button>
        )}
        {showDropdown && (
          <ul
            className=" min-w-max absolute bg-white text-lg z-50 float-left py-2 list-none text-left rounded-lg  shadow-lg mt-1 m-0 bg-clip-padding border-none absolute right-0"
            aria-labelledby="dropdownMenuButton1"
            ref={ref}
          >
            {!currentUser ? (
              <>
                <li className="p-6 border-b">
                  <Link to="/login">
                    <button
                      className="
                        rounded
                        text-md
                        text-white
                        uppercase
                        py-2
                        px-4
                        block
                        w-full
                        whitespace-nowrap
                        bg-[#051D4C]
                        "
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
                    <p>My Account</p>
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
              </>
            ) : (
              <>
                <li className="p-6 border-b">
                  <button
                    className="
                        rounded
                        text-md
                        text-white
                        uppercase
                        py-2
                        px-4
                        block
                        w-full
                        whitespace-nowrap
                        bg-[#051D4C]
                        "
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </li>
                <li onClick={() => setShowDropdown(false)}>
                  <div className="flex items-center text-1xl py-2 px-4 w-full whitespace-nowrap bg-transparent hover:bg-gray-100">
                    <span className="mr-2">
                      <BiUser />
                    </span>
                    <p>My Account</p>
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
              </>
            )}
          </ul>
        )}
      </div>
    </div>
  );
}

function useOnClickOutside(ref, handler) {
  useEffect(() => {
    const listener = (e) => {
      if (!ref.current || ref.current.contains(e.target)) {
        return;
      }
      handler(e);
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
}

export default Dropdown;
