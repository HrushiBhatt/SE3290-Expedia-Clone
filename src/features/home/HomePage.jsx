import React from "react";
import Hero from "./components/Hero";
import MainInputBox from "./components/MainInputBox";
import HelpBoxes from "./components/HelpBoxes";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <MainInputBox />
      <HelpBoxes />
    </div>
  );
};

export default HomePage;
