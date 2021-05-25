import React from "react";
import {connect} from "react-redux";
import VideoSectionSwitchContainer from "src/Page Structure/Basis/Video Section/VideoSectionSwitchContainer";

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
