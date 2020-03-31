import React from "react";
import classes from "./ScrollTop.module.css";

const ScrollTop = () => {
  return (
      <div className={classes.scrollTop}>
        <div className={classes.scrollTopArrow}></div>
      </div>
  );
};

export default ScrollTop;