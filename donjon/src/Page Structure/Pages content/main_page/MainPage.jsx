import React from "react";
import classes from "./MainPage.module.css";
import ImageTransfer from "./Image Transfer/ImageTransfer";
import AboutUs from "./AboutUs/AboutUs";
import Infographics from "./AboutUs/ Infographics/Infographics";
import ImageTransferContainer from "./Image Transfer/ImageTransferContainer";

const MainPage = () => {
  return (
      <div>
        <ImageTransferContainer/>
        <AboutUs/>
      </div>
  );
};

export default MainPage;