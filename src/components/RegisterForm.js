import React, { useState } from "react";

// react router
import { Link, useNavigate } from "react-router-dom";

// toast notification
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// spinners
import { BeatLoader } from "react-spinners";

// firebase configuration
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase-config";

// firebase auth configuration
import { useAuth } from "../context/AuthContext";

// app global state
import { useAppState } from "../context/StateContext";

// react icons
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

function RegisterForm() {
  const { newUser, setNewUser } = useAppState();

  // destructuring variables in the newUser state
  const {
    fname,
    lname,
    email,
    password,
    confirmPassword,
    phoneNumber1,
    phoneNumber2,
  } = newUser;

  const { register } = useAuth();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const navigate = useNavigate();

  // handle input field change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  // handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    // check if passwords match
    if (password !== confirmPassword) {
      const passwordMismatch = () => toast.error("Passwords do not match");
      passwordMismatch();
      return;
    }
    try {
      setLoading(true);

      // call the register function
      await register(email, password);
      try {
        // add this user to the users collection on the firestore database
        await addDoc(collection(db, "users"), {
          fname,
          lname,
          email,
          password,
          phoneNumber1,
          phoneNumber2,
        });
      } catch (e) {
        console.error("Error adding document: ", e);
      }
      const accountSuccess = () =>

        toast.success("Your account has been created successfully");
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
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4">
                <input
                  name="fname"
                  value={fname}
                  type="text"
                  placeholder="First Name"
                  className="border-2 border-black-600  p-2 rounded mb-3"
                  onChange={handleChange}
                  required
                />
                <input
                  name="lname"
                  value={lname}
                  type="text"
                  placeholder="Last Name"
                  className="border-2 border-black-600 p-2 rounded mb-3"
                  onChange={handleChange}
                  required
                />
              </div>
              <input
                name="email"
                value={email}
                type="text"
                placeholder="Email Address"
                className="border-2 border-black-600 w-full p-2 rounded mb-3"
                onChange={handleChange}
                required
              />
              <div className="grid grid-cols-2 gap-4">
                <div className="w-full relative">
                  <input
                    name="password"
                    value={password}
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    className="relative border-2 border-black-600 p-2 rounded mb-3 w-full"
                    onChange={handleChange}
                    required
                  />
                  <span
                    className="absolute right-2 top-4 cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword && <AiOutlineEyeInvisible />}
                    {!showPassword && <AiOutlineEye />}
                  </span>
                </div>
                <div className="w-full relative">
                  <input
                    name="confirmPassword"
                    value={confirmPassword}
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm Password"
                    className="relative border-2 border-black-600 p-2 rounded mb-3 w-full"
                    onChange={handleChange}
                    required
                  />
                  <span
                    className="absolute right-2 top-4 cursor-pointer"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword && <AiOutlineEyeInvisible />}
                    {!showConfirmPassword && <AiOutlineEye />}
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <input
                  name="phoneNumber1"
                  value={phoneNumber1}
                  type="text"
                  placeholder="Phone Number 1"
                  className="border-2 border-black-600 p-2 rounded mb-3"
                  onChange={handleChange}
                  required
                />

                <input
                  name="phoneNumber2"
                  value={phoneNumber2}
                  type="text"
                  placeholder="Phone Number 2 (Optional)"
                  className="border-2 border-black-600 p-2 rounded mb-3"
                  onChange={handleChange}
                />
              </div>
              <div className="text-center mb-3 w-full">
                <button
                  type="submit"
                  disabled={loading}
                  className="text-center px-4 py-2 rounded bg-[#051d4c] text-white text-md hover:opacity-75 w-full"
                >
                  {loading ? <BeatLoader /> : "Create Account"}
                </button>
              </div>
            </form>
            <div className="signup text-center">
              <p>
                Have an account already?
                <span className="ml-2">
                  <Link to="/login">
                    <span className="underline text-[#051d4c]">Login</span>
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
