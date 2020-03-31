import React from "react";
import VideoContainer from "./Video Container/VideoContainer";
import UpHeader from "./Up Header/UpHeader";
import UpHeaderContainer from "./Up Header/UpHeaderContainer";
import ScrollTop from "./ScrollTop/ScrollTop";
import ImageTransfer from "../Pages content/main_page/Image Transfer/ImageTransfer";
import OurHistory from "../Pages content/main_page/Our History/OurHistory";
import classes from "./Basis.module.css";

const Basis = (props) => {

  return (
      <div className='main-block'>
        <section className={classes.video_and_menu}>
          <VideoContainer/>
          <UpHeaderContainer/>
          <div className={classes.overlay}></div>
          <ScrollTop/>
        </section>
      </div>
  );
};


export default Basis;