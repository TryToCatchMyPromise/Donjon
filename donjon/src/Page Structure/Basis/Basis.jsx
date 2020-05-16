import React from "react";
import VideoSection from "./Video Section/VideoSection";
import UpHeader from "./Up Header/UpHeader";
import UpHeaderContainer from "./Up Header/UpHeaderContainer";
import ScrollTop from "./Left Header/ScrollTop/ScrollTop";
import ImageTransfer from "../Pages content/main_page/Image Transfer/ImageTransfer";
import AboutUs from "../Pages content/main_page/AboutUs/AboutUs";
import classes from "./Basis.module.css";
import LeftHeaderContainer from "./Left Header/LeftHeaderContainer";
import ArrowDown from "../ArrowDown";
import ArrowDownContainer from "../ArrowDownContainer";
import VideoSectionContainer from "./Video Section/VideoSectionContainer";

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