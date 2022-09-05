import React, { useState, useEffect } from "react";
import { BeatLoader } from "react-spinners";
import Sidebar from "../components/Sidebar";
import Showcase from "../components/Showcase";
import AntiBlueLight from "../components/Categories/AntiBlueLight";
import Female from "../components/Categories/Female";
import Male from "../components/Categories/Male";
import Footer from "../components/Footer";
import Searchbar from "../components/Searchbar";
function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  });
  return (
    <div>
      {loading ? (
        <div className="loading-container">
          <BeatLoader />
        </div>
      ) : (
        <>
          <Searchbar />
          <div className="flex justify-between text-justify lg:space-x-8 text-1xl md:ml-1">
            <Sidebar direction="left" />
            <Showcase />
            <Sidebar direction="right" />
          </div>
          <AntiBlueLight />
          <Female />
          <Male />
          <Footer />
        </>
      )}
    </div>
  );
}

export default Home;
