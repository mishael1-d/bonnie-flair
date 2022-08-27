import React, { useState } from "react";

//firebase auth
// import { useAuth } from "../context/AuthContext";

// toast notification
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
//   const { recovery } = useAuth();

  //handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
    //   await recovery(email);
      const success = () =>
        toast.success("Password reset link has been sent successfully");
      success();
    } catch (error) {
      const accountFailed = () => toast.error(error.message);
      accountFailed();
    }
  };

  return (
    <div>
      <ToastContainer />
      <div className="bg-[#051d4c] -mt-10 px-20 py-16 text-center text-white z-0">
        <h3 className="font-semibold text-3xl">Forgot your password?</h3>
        <p>Please enter your email address to continue</p>
      </div>
      <div className="form-container shadow-xl w-2/6 flex justify-center align-center m-auto relative -top-10 z-50 bg-white rounded">
        <div className="p-10 w-full">
          <div className="logo-image">
            <img src="" alt="" />
          </div>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email Adddress"
              className="border-2 border-black-600 w-full p-2 rounded mb-3"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <div className="text-center mb-3">
              <button
                type="submit"
                className="text-center px-4 py-2 rounded bg-[#051d4c] text-white text-md hover:opacity-75"
              >
                Reset Password
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
