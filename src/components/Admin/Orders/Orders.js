import React from "react";
import Tables from "./Tables";

const Orders = () => {
  return (
    <div className="mr-4 rounded p-4 bg-zinc-50">
      <div className="flex justify-between items-center">
        <div className="flex items-end">
          <h3 className="font-medium text-xl mr-3 m-0">Orders</h3>
          <p className="text-sm text-gray-500">35 results found</p>
        </div>
        <input className="text-white px-5 py-2 rounded"/>
      </div>
      <div className="mt-4">
        <ul className="flex justify-between w-2/6 text-sm">
          <li className="text-[#051d4c] border-b-2 border-b-[#051d4c] cursor-pointer">
            All Orders
          </li>
          <li className="cursor-pointer">Completed</li>
          <li className="cursor-pointer">Pending</li>
          <li className="cursor-pointer">Cancelled</li>
        </ul>
      </div>
      <div   className="mt-2">
        <Tables/>
      </div>
    </div>
  );
};

export default Orders;
