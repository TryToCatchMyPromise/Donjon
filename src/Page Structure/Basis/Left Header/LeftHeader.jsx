import classes from "src/Page Structure/Basis/Left Header/LeftHeader.module.css";
import ScrollTop from "src/Page Structure/Basis/Left Header/ScrollTop/ScrollTop";
import LeftNav from "src/Page Structure/Basis/Left Header/Left  Nav/LeftNav";
import LeftNavContainer from "src/Page Structure/Basis/Left Header/Left  Nav/LeftNavContainer";

const LeftHeader = () => {
  return (
      <div className={classes.left_header}>
        <div className={classes.left_nav}>
          <LeftNavContainer/>
        </div>
        {/* <LeftNav className={classes.left_nav}/> */}
        <div className={classes.scrolltop}>
          <ScrollTop/>
        </div>

      </div>
  );
};

export default LeftHeader;
