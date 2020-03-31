import React from "react";
import classes from "./VideoContainer.module.css";

const VideoContainer = () => {
  return (
      <div className={classes.video_container}>
        <video className={classes.main_video} playsinline='' autoPlay="" loop="" muted="" poster="">
          <source src="../../../../src/files/my_video.mp4" type="video/mp4"/>
        </video>
      </div>
  );
};

export default VideoContainer;