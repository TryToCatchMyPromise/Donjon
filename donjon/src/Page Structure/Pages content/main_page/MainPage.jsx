import React from "react";
import classes from "./MainPage.module.css";
import ImageTransfer from "./Image Transfer/ImageTransfer";
import AboutUs from "./AboutUs/AboutUs";
import AboutUsOld from "./About UsOld/AboutUsOld";
import Infographics from "./AboutUs/ Infographics/Infographics";

const MainPage = () => {
  return (
      <div>
        <ImageTransfer/>
        <AboutUs/>
        {/*<AboutUsOld/>*/}

      </div>
  );
};

export default MainPage;