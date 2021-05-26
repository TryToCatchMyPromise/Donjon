import classes from 'src/Page Structure/Basis/Video Section/VideoSection.module.css'
import im from 'src/files/main/beforeVideo.jpg'
// import vid from "../../../files/main/beforeVideo.jpg";
// import vid from "../../../files/my_video.mp4";

// let divRef = createRef();

const VideoSection = ({vid}) => {
  // useLayoutEffect(() => {
  //   window.addEventListener('resize', vhSetting);
  //   return () => {
  //     window.removeEventListener("resize", vhSetting);
  //   }
  // })

  // useEffect(() => {
  //   vhSetting();
  // })
  return (
    <div className={classes.video_container} id='start'>
      <video className={classes.main_video} src={vid} type='video/mp4' autoPlay loop muted poster={im} />
      {/* <img src={im}  alt = 'logo'></img> */}
      <div className={classes.overlay} />
    </div>
  )
}

export default VideoSection
