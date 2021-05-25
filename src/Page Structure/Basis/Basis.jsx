import UpHeaderContainer from 'src/Page Structure/Basis/Up Header/UpHeaderContainer';
import LeftHeaderContainer from 'src/Page Structure/Basis/Left Header/LeftHeaderContainer';
import ArrowDownContainer from 'src/Page Structure/ArrowDownContainer';
import VideoSectionContainer from 'src/Page Structure/Basis/Video Section/VideoSectionContainer';

const Basis = () => {

  return (
      <>
        {/* <section className={classes.video_and_menu}> */}
          <VideoSectionContainer/>
          {/* <div className={classes.overlay}></div> */}
        {/* </section> */}
        <UpHeaderContainer/>
        <LeftHeaderContainer/>
        <ArrowDownContainer/>
      </>
  );
};


export default Basis;
