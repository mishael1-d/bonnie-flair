import React from "react";
import Sidebar from "../components/Sidebar";
import Showcase from "../components/Showcase";
import AntiBlueLight from "../components/Categories/AntiBlueLight";
import Female from "../components/Categories/Female";
import Male from "../components/Categories/Male";
import Footer from "../components/Footer";
import Searchbar from "../components/Searchbar";
function Home() {
  return (
    <div className="">
      <Searchbar />
      <div className="flex justify-between text-justify md:space-x-4 lg:space-x-8 text-1xl md:ml-1">
        <Sidebar direction="left" />
        <Showcase />
        <Sidebar direction="right" />
      </div>
      <AntiBlueLight />
      <Female />
      <Male />
      <Footer />
    </div>
  );
}

export default Home;
