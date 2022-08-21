import React from 'react'

import { Outlet } from 'react-router-dom';

// toast notification
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import SideNav from '../components/Admin/SideNav';
// import Content from '../components/Admin/Content';
// import SideNav from './SideNav';

//product removed notification
// const delNotify = () => toast.error("Product has been removed from cart");

// product added to cart toast notification
// const susNotify = () => toast.success("Product has been added to cart successfully");

function AdminLayout() {
  return (
    <div className="relative -mt-10" >
    <ToastContainer/>
    <div className="flex relative" style={{height: "569px"}}>
      <div className=" basis-1/5 grid mr-4 shadow-md relative bg-[#051d4c] text-white fixed t-0 b-0">
       <SideNav/>
      </div>
      <div className=" basis-4/5 grid sticky rounded relative right-0">
        <Outlet/>
      </div>
    </div>
  </div>
  )
}

export default AdminLayout