import React, { useReducer } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import PaymentStatus from "./pages/PaymentStatus";
import ProductDetails from "./pages/ProductDetails";
import Register from "./pages/Register";
import Shop from "./pages/Shop";

const AppContext = React.createContext(); // TODO: Replace with redux

function App() {
  useReducer()


  //Global States
  const globalState = {

  }

  return <AppContext value={globalState}>
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/about" element={<About/>}/>
        <Route exact path="/shop" element={<Shop/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/register" element={<Register/>}/>
        {/* TODO: Add catrgory route here */}
        <Route exact path="/shop/:category/:productId" element={<ProductDetails/>}/>
        {/* TODO: Create protected routing for cart, paymentStatus route */}
        <Route exact path="/cart" element={<Cart/>}/>
        <Route exact path="/payment-status?" element={<PaymentStatus/>}/>
      </Routes>
    </Router>
  </AppContext>;
}

export default App;
