import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Showcase from "../components/Showcase/Showcase";
import AntiBlueLight from "../components/Categories/AntiBlueLight";
import Female from "../components/Categories/Female";
import Male from "../components/Categories/Male";
import Footer from "../components/Footer/Footer";
function Home() {
  return (
    <div>
      <div className="flex justify-between text-justify space-x-8 text-1xl ml-1">
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
