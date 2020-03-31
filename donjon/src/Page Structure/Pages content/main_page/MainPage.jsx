import React from "react";
import classes from "./MainPage.module.css";
import ImageTransfer from "./Image Transfer/ImageTransfer";
import OurHistory from "./Our History/OurHistory";
import AboutUs from "./About Us/AboutUs";
import OurFeatures from "./Our Features/OurFeatures";

const MainPage = () => {
  return (
      <div>
        <ImageTransfer/>
        <OurHistory/>
        <AboutUs/>
        <OurFeatures/>
      </div>
  );
};

export default MainPage;