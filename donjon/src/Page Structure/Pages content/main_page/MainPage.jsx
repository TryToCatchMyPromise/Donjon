import React from "react";
import classes from "./MainPage.module.css";
import ImageTransfer from "./Image Transfer/ImageTransfer";
import AboutUs from "./AboutUs/AboutUs";
import Infographics from "./AboutUs/ Infographics/Infographics";

const MainPage = () => {
  return (
      <div>
        <ImageTransfer/>
        <AboutUs/>
      </div>
  );
};

export default MainPage;