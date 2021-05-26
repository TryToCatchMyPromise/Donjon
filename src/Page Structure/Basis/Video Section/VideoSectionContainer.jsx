import {connect} from 'react-redux'
import VideoSectionSwitchContainer from 'src/Page Structure/Basis/Video Section/VideoSectionSwitchContainer'

const mapStateToProps = (state) => {
  return {
    videoSection: state.videoSection
  }
}

const mapDispatchToProps = () => {
  return {}
}

const VideoSectionContainer = connect(mapStateToProps, mapDispatchToProps)(VideoSectionSwitchContainer)

export default VideoSectionContainer
