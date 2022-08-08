import React from "react";
import { Link } from "react-router-dom";

function LoginForm() {
  return (
    <div>
      <div className="bg-[#051d4c] -mt-10 px-20 py-16 text-center text-white z-0">
        <h3 className="font-semibold text-3xl">Welcome Back!!</h3>
        <p>Please enter your details to continue</p>
      </div>
      <div className="form-container shadow-xl w-2/6 flex justify-center align-center m-auto relative -top-10 z-50 bg-white rounded">
        <div className="p-10">
          <div className="logo-image">
            <img src="" alt="" />
          </div>
          <form>
            <input type="text" placeholder="Email Adddress" className="border-2 border-black-600 w-full p-2 rounded mb-3"/>
            <input type="password" placeholder="Password" className="border-2 border-black-600 w-full p-2 rounded mb-3"/>
            <p className="text-center mb-3">Forgot password?</p>
            <div className="text-center mb-3">
            <button className="text-center px-4 py-2 rounded bg-[#051d4c] text-white text-md hover:opacity-75">Login</button>
            </div>
          </form>
          <div className="signup text-center">
            <p>
              Don't have an account yet?
              <span>
                <Link to="/register">
                  <p className="underline">Create account</p>
                </Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
