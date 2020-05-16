import React from "react";
import {connect} from "react-redux";
import VideoSectionSwitchContainer from "./VideoSectionSwitchContainer";

let mapStateToProps = (state) => {
  return {
    videoSection: state.videoSection,
  }
};

let mapDispatchToProps = (dispatch) => {
  return {

  }
};

const VideoSectionContainer = connect(mapStateToProps, mapDispatchToProps)(VideoSectionSwitchContainer);

export default VideoSectionContainer;
