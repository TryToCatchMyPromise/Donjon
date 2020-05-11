import React from "react";
import classes from "./VideoContainer.module.css";
import im from "../../../files/main/beforeVideo.jpg";
import vid from "../../../files/my_video.mp4";

const VideoContainer = () => {
  return (
      <div className={classes.video_container}>
        <video className={classes.main_video} src={vid} type="video/mp4" autoPlay={true} loop={true} muted={true} poster={im}></video>
        {/*<img src={im}  alt = 'logo'></img>*/}
        <div className={classes.overlay}></div>
      </div>
  );
};

export default VideoContainer;