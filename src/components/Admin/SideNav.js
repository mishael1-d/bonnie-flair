import React from "react";

import { Link } from "react-router-dom";
import { useAppState } from "../../context/StateContext";
import { AiOutlineHome, AiOutlineInbox, AiOutlineTags } from "react-icons/ai";
import { BiLogOut, BiUser } from "react-icons/bi";
import { BsPeople } from "react-icons/bs";
import { TbDeviceAnalytics } from "react-icons/tb";

function SideNav() {
  const { activeTab, switchTab } = useAppState();
  return (
    <div className="h-full w-full">
      <div className="text-center my-0 mx-auto flex flex-col justify-center items-center px-8 py-5">
        <span className="font-xl">
          <BiUser />
        </span>
        <h3>ADMIN</h3>
      </div>
      <hr className="w-full" />
      <ul className="mt-5 list-none px-8 py-5 w-full">
        <Link to='/admin'>

        <li
          className={
            activeTab === "home"
              ? "flex items-center mb-3 cursor-pointer bg-white p-2 text-black rounded"
              : "flex items-center mb-3 cursor-pointer bg-0 hover:bg-white p-2 hover:text-black rounded"
          }
          onClick={() => switchTab("home")}
        >
          <span className="mr-3">
            <AiOutlineHome />
          </span>
          <span>Home</span>
        </li>
        </Link>
        <Link to="orders">
          <li
            className={
              activeTab === "orders"
                ? "flex items-center mb-3 cursor-pointer bg-white p-2 text-black rounded"
                : "flex items-center mb-3 cursor-pointer bg-0 hover:bg-white p-2 hover:text-black rounded"
            }
            onClick={() => switchTab("orders")}
          >
            <span className="mr-3">
              <AiOutlineInbox />
            </span>
            <span>Orders</span>
          </li>
        </Link>
        <li
          className={
            activeTab === "customers"
              ? "flex items-center mb-3 cursor-pointer bg-white p-2 text-black rounded"
              : "flex items-center mb-3 cursor-pointer bg-0 hover:bg-white p-2 hover:text-black rounded"
          }
          onClick={() => switchTab("customers")}
        >
          <span className="mr-3">
            <BsPeople />
          </span>
          <span>Customers</span>
        </li>
        <li
          className={
            activeTab === "products"
              ? "flex items-center mb-3 cursor-pointer bg-white p-2 text-black rounded"
              : "flex items-center mb-3 cursor-pointer bg-0 hover:bg-white p-2 hover:text-black rounded"
          }
          onClick={() => switchTab("products")}
        >
          <span className="mr-3">
            <AiOutlineTags />
          </span>
          <span>Products</span>
        </li>
        <li
          className={
            activeTab === "analytics"
              ? "flex items-center mb-3 cursor-pointer bg-white p-2 text-black rounded"
              : "flex items-center mb-3 cursor-pointer bg-0 hover:bg-white p-2 hover:text-black rounded"
          }
          onClick={() => switchTab("analytics")}
        >
          <span className="mr-3">
            <TbDeviceAnalytics />
          </span>
          <span>Analytics</span>
        </li>
      </ul>
      <button className="absolute bottom-0 flex items-center justify-center bg-white text-black w-full py-4 opacity-80 hover:opacity-90">
        <span className="mr-3">
          <BiLogOut />
        </span>
        <p>Logout</p>
      </button>
    </div>
  );
}

export default SideNav;
