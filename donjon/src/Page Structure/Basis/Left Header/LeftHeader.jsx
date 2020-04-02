import React from "react";
import classes from "./LeftHeader.module.css";

const LeftHeader = () => {
  return (
      <div className={classes.flex_container}>
        <div className={classes.circle}></div>
        <div className={classes.line}></div>
        <div className={classes.circle}></div>
        <div className={classes.line}></div>
        <div className={classes.circle}></div>
        <div className={classes.line}></div>
        <div className={classes.circle}></div>
      </div>
  );
};

export default LeftHeader;