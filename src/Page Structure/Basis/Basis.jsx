import React from "react";
import VideoSection from "src/Page Structure/Basis/Video Section/VideoSection";
import UpHeader from "src/Page Structure/Basis/Up Header/UpHeader";
import UpHeaderContainer from "src/Page Structure/Basis/Up Header/UpHeaderContainer";
import ScrollTop from "src/Page Structure/Basis/Left Header/ScrollTop/ScrollTop";
import ImageTransfer from "src/Page Structure/Pages content/main_page/Image Transfer/ImageTransfer";
import AboutUs from "src/Page Structure/Pages content/main_page/AboutUs/AboutUs";
import classes from "src/Page Structure/Basis/Basis.module.css";
import LeftHeaderContainer from "src/Page Structure/Basis/Left Header/LeftHeaderContainer";
import ArrowDown from "src/Page Structure/ArrowDown";
import ArrowDownContainer from "src/Page Structure/ArrowDownContainer";
import VideoSectionContainer from "src/Page Structure/Basis/Video Section/VideoSectionContainer";

const Basis = (props) => {

  return (
      <>
        {/*<section className={classes.video_and_menu}>*/}
          <VideoSectionContainer/>
          {/*<div className={classes.overlay}></div>*/}
        {/*</section>*/}
        <UpHeaderContainer/>
        <LeftHeaderContainer/>
        <ArrowDownContainer/>
      </>
  );
};


export default Basis;
