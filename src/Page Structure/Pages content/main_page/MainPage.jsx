import React from "react";
import classes from "src/Page Structure/Pages content/main_page/MainPage.module.css";
import ImageTransfer from "src/Page Structure/Pages content/main_page/Image Transfer/ImageTransfer";
import AboutUs from "src/Page Structure/Pages content/main_page/AboutUs/AboutUs";
import Infographics from "src/Page Structure/Pages content/main_page/AboutUs/ Infographics/Infographics";
import ImageTransferContainer from "src/Page Structure/Pages content/main_page/Image Transfer/ImageTransferContainer";

const MainPage = () => {
  return (
      <div>
        <ImageTransferContainer/>
        <AboutUs/>
      </div>
  );
};

export default MainPage;
