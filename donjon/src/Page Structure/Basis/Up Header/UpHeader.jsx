import React from "react";
import classes from "./UpHeader.module.css";
import Navigation from "./Navigation/Navigation";

const UpHeader = () => {
  return (
      <div className={classes.header}>
        <div className={classes.logo}></div>
        <Navigation/>
        <div className={classes.btn_container}>
          <div className={classes.btn}>Оставить заявку</div>
        </div>
      </div>
  );
};

export default UpHeader;