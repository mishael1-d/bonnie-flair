import React, { useState, useEffect } from "react";

// react icons
import { BeatLoader } from "react-spinners";

// react components
import CartPage from "../components/Cart";
import Footer from "../components/Footer";

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
