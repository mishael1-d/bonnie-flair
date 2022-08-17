import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../App";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "../context/AuthContext";

function LoginForm() {
  const { user, setUser } = useContext(AppContext);
  const { email, password } = user;
  const { login } = useAuth();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      const accountSuccess = () => toast.success("Login successfully");
      accountSuccess();
    } catch (error) {
      const accountFailed = () => toast.error(error.message);
      accountFailed();
    }
  };

  return (
    <div>
      <ToastContainer />
      <div className="bg-[#051d4c] -mt-10 px-20 py-16 text-center text-white z-0">
        <h3 className="font-semibold text-3xl">Welcome Back!!</h3>
        <p>Please enter your details to continue</p>
      </div>
      <div className="form-container shadow-xl w-2/6 flex justify-center align-center m-auto relative -top-10 z-50 bg-white rounded">
        <div className="p-10">
          <div className="logo-image">
            <img src="" alt="" />
          </div>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Email Adddress"
              className="border-2 border-black-600 w-full p-2 rounded mb-3"
              name="email"
              value={email}
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="Password"
              className="border-2 border-black-600 w-full p-2 rounded mb-3"
              name="password"
              value={password}
              onChange={handleChange}
            />
            <Link to="/forgot-password">
              <p className="text-center mb-3 underline">Forgot password?</p>
            </Link>
            <div className="text-center mb-3">
              <button
                type="submit"
                className="text-center px-4 py-2 rounded bg-[#051d4c] text-white text-md hover:opacity-75"
              >
                Login
              </button>
            </div>
          </form>
          <div className="signup text-center">
            <p>
              Don't have an account yet?
              <span>
                <Link to="/register">
                  <span className="underline">Create account</span>
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
