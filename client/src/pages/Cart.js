import React, { useState, useEffect } from "react";
import { BeatLoader } from "react-spinners";


import CartPage from "../components/Cart/Cart";
import Footer from "../components/Footer/Footer";

function Cart() {
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  });
  return (
    <>
      {loading ? (
        <div className="loading-container">
          <BeatLoader />
        </div>
      ) : (
        <>
          <CartPage />
          <Footer />
        </>
      )}
    </>
  );
}

export default Cart;
