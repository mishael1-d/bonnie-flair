import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import PaymentStatus from "./pages/PaymentStatus";
import ProductDetails from "./pages/ProductDetails";
import Register from "./pages/Register";
import Shop from "./pages/Shop";

export const AppContext = React.createContext(); // TODO: Replace with redux

function App() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [newUser, setNewUser] = useState({
    fname:'',
    lname:'',
    email:'',
    password:'',
    confirmPassword:'',
    phoneNumber1:'',
    phoneNumber2:'',
  })
  const [isLoggedIn, setIsLoggedIn] = useState({})

  //Global States
  const globalState = {
    user,
    setUser,
    newUser,
    setNewUser,
    isLoggedIn,
    setIsLoggedIn
  };

  return (
    <AppContext.Provider value={globalState}>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/shop" element={<Shop />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          {/* TODO: Add catrgory route here */}
          <Route
            exact
            path="/shop/:category/:productId"
            element={<ProductDetails />}
          />
          {/* TODO: Create protected routing for cart, paymentStatus route */}
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/payment-status?" element={<PaymentStatus />} />
        </Routes>
      </Router>
    </AppContext.Provider>
  );
}

export default App;
