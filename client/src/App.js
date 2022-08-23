import React from "react";

// React router component
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Context import
import StateProvider from "./context/StateContext";
import AuthProvider from "./context/AuthContext";

//Stylesheet
import "./App.css";

// Pages
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import PaymentStatus from "./pages/PaymentStatus";
import ProductDetails from "./pages/ProductDetails";
import Register from "./pages/Register";
import Shop from "./pages/Shop";
import ForgotPassword from "./pages/ForgotPassword";
import ProtectedRoute from "./ProtectedRoutes";
import LoginRoute from "./ProtectedRoutes/LoginRoute";

function App() {
  return (
    <StateProvider>
      <div>
        <Router>
          <AuthProvider>
            <Navbar />
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/shop" element={<Shop />} />
              <Route
                exact
                path="/login"
                element={
                  <LoginRoute>
                    <Login />
                  </LoginRoute>
                }
              />
              <Route exact path="/register" element={<Register />} />
              {/* TODO: Add catrgory route here */}
              <Route
                exact
                path="/shop/:category/:productId"
                element={<ProductDetails />}
              />
              {/* TODO: Create protected routing for cart, paymentStatus route */}
              <Route
                exact
                path="/cart"
                element={
                  <ProtectedRoute>
                    <Cart />
                  </ProtectedRoute>
                }
              />
              <Route
                exact
                path="/payment-status?"
                element={<PaymentStatus />}
              />
              <Route
                exact
                path="/forgot-password"
                element={<ForgotPassword />}
              />
            </Routes>
          </AuthProvider>
        </Router>
      </div>
    </StateProvider>
  );
}

export default App;
