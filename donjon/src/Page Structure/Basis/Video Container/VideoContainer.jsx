import React from "react";
import classes from "./VideoContainer.module.css";

const VideoContainer = () => {
  return (
      <div className={classes.video_container}>
        {/*<video className={classes.main_video} src="GOPR1121.MP4" type="video/mp4">*/}
        {/*</video>*/}
        <div className={classes.overlay}></div>
        <div className={classes.main_video}></div>
      </div>
  );
};

export default VideoContainer;