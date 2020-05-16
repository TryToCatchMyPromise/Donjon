import React from "react";
import classes from "./LeftHeader.module.css";
import ScrollTop from "./ScrollTop/ScrollTop";
import LeftNav from "./Left  Nav/LeftNav";
import LeftNavContainer from "./Left  Nav/LeftNavContainer";

const LeftHeader = () => {
  return (
      <div className={classes.left_header}>
        <div className={classes.left_nav}>
          <LeftNavContainer/>
        </div>
        {/*<LeftNav className={classes.left_nav}/>*/}
        <div className={classes.scrolltop}>
          <ScrollTop/>
        </div>

      </div>
  );
};

export default LeftHeader;