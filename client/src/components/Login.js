import React, { useState } from "react";

// react router
import { Link, useNavigate } from "react-router-dom";

//toast notification
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// spinners
import { BeatLoader } from "react-spinners";

// firebase auth
import { useAuth } from "../context/AuthContext";

// global app state in context API
import { useAppState } from "../context/StateContext";

// react icons
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

function LoginForm() {
  const { user, setUser } = useAppState();
  const { email, password } = user;
  const { login } = useAuth();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  //handle change in input field
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  // handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await login(email, password);
      const accountSuccess = () => toast.success("Login successfully");
      accountSuccess();
      navigate("/");
    } catch (error) {
      const accountFailed = () => toast.error(error.message);
      accountFailed();
    }
    setLoading(false);
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
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="border-2 border-black-600 w-full p-2 rounded mb-3 relative"
                name="password"
                value={password}
                onChange={handleChange}
              />
              <span
                className="absolute right-2 top-4 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword && <AiOutlineEyeInvisible />}
                {!showPassword && <AiOutlineEye />}
              </span>
            </div>
            <Link to="/forgot-password">
              <p className="text-center mb-3 underline text-[#051d4c]">
                Forgot password?
              </p>
            </Link>
            <div className="text-center mb-3">
              <button
                type="submit"
                disabled={loading}
                className="text-center px-4 py-2 rounded bg-[#051d4c] text-white text-md hover:opacity-75"
              >
                {loading ? <BeatLoader /> : "Login"}
              </button>
            </div>
          </form>
          <div className="signup text-center">
            <p>
              Don't have an account yet?
              <span className="ml-2">
                <Link to="/register">
                  <span className="underline text-[#051d4c]">
                    Create account
                  </span>
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
