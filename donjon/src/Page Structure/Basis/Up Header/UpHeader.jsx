import React from "react";
import classes from "./UpHeader.module.css";
import Navigation from "./Navigation/Navigation";

const UpHeader = () => {
  return (
      <div className={classes.header}>
        <Navigation/>
      </div>
  );
};

export default UpHeader;