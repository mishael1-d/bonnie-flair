import React from "react";
import {Link} from 'react-router-dom'
import { useAppState } from "../../../context/StateContext";
import { BsArrowRight, BsPeople } from "react-icons/bs";
import { AiOutlineInbox } from "react-icons/ai";
import Chart from "./Chart";
const Home = () => {
  const { switchTab } = useAppState();

  return (
    <div className="flex flex-col h-full mr-4">
      <div className="grid grid-cols-3 gap-4 h-2/5 my-4">
        <div className="bg-green-600 rounded-xl p-5 text-white relative">
          <AiOutlineInbox />
          <h3>Total Orders</h3>
          <h1 className="text-3xl font-medium">800</h1>
          <p>Increased by 80%</p>
          <button
            className="absolute bottom-4 right-5 flex items-center bg-white text-black p-1 rounded"
            onClick={() => switchTab("orders")}
          >
            <Link to="orders">

            <span>View</span>
            <span>
              <BsArrowRight />
            </span>
            </Link>
          </button>
        </div>
        <div className="bg-blue-600 rounded-xl p-5 text-white relative">
          <BsPeople />
          <h3>Total Customers</h3>
          <h1 className="text-3xl font-medium">1000</h1>
          <p>Increased by 30%</p>
          <button
            className="absolute bottom-4 right-5 flex items-center bg-white text-black p-1 rounded"
            onClick={() => switchTab("customers")}
          >
            <span>View</span>
            <span>
              <BsArrowRight />
            </span>
          </button>
        </div>
        <div className="bg-purple-600 rounded-xl p-5 text-white relative">
          <BsPeople />
          <h3>Total Products</h3>
          <h1 className="text-3xl font-medium">400</h1>
          <p>Increased by 25%</p>
          <button
            className="absolute bottom-4 right-5 flex items-center bg-white text-black p-1 rounded"
            onClick={() => switchTab("products")}
          >
            <span>View</span>
            <span>
              <BsArrowRight />
            </span>
          </button>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 h-3/4">
        <div
          className="bg-white shadow-xl col-span-2 rounded-t-xl p-5 cursor-pointer"
          onClick={() => switchTab("analytics")}
        >
          <Chart />
        </div>
        <div className="shadow-xl rounded-t-xl p-5">
          <h3>
            Summary <em>(Last 30 days)</em>
          </h3>
          <hr className="mt-2" />
          <ul className="mt-4 space-y-5">
            <li className="flex justify-between">
              <span>Total Products</span>
              <span className="text-blue-700">600</span>
            </li>
            <li className="flex justify-between">
              <span>Total Revenue</span>
              <span className="text-green-500">$60000</span>
            </li>
            <li className="flex justify-between">
              <span>Total Cost</span>
              <span className="text-yellow-400">$45000</span>
            </li>
            <li className="flex justify-between">
              <span>Total Profit</span>
              <span className="text-red-500">$15000</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
