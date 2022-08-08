import React from "react";
import { Link } from "react-router-dom";

function RegisterForm() {
  return (
    <div>
      <div>
        <div className="bg-[#051d4c] -mt-10 px-20 py-16 text-center text-white z-0">
          <h3 className="font-semibold text-3xl">New User!!</h3>
          <p>Please enter your details to create an account</p>
        </div>
        <div className="form-container shadow-xl w-2/5 flex justify-center align-center m-auto relative -top-10 z-50 bg-white rounded">
          <div className="p-10">
            <div className="logo-image">
              <img src="" alt="" />
            </div>
            <form>
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="border-2 border-black-600  p-2 rounded mb-3"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="border-2 border-black-600 p-2 rounded mb-3"
                />
              </div>
              <input
                type="text"
                placeholder="Email Address"
                className="border-2 border-black-600 w-full p-2 rounded mb-3"
              />
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="password"
                  placeholder="Password"
                  className="border-2 border-black-600 p-2 rounded mb-3"
                />
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="border-2 border-black-600 p-2 rounded mb-3"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">

              <input
                type="text"
                placeholder="Phone Number 1"
                className="border-2 border-black-600 p-2 rounded mb-3"
              />

              <input
                type="text"
                placeholder="Phone Number 2"
                className="border-2 border-black-600 p-2 rounded mb-3"
              />
              </div>
              <div className="grid grid-cols-2 gap-4">

              <input
                type="text"
                placeholder="City"
                className="border-2 border-black-600 p-2 rounded mb-3"
              />

              <input
                type="text"
                placeholder="State"
                className="border-2 border-black-600 p-2 rounded mb-3"
              />
              </div>
              <div className="text-center mb-3 w-full">
                <button className="text-center px-4 py-2 rounded bg-[#051d4c] text-white text-md hover:opacity-75 w-full">
                  Create Account
                </button>
              </div>
            </form>
            <div className="signup text-center">
              <p>
                Have an account already?
                <span>
                  <Link to="/login">
                    <p className="underline">Login</p>
                  </Link>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterForm;
