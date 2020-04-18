import React from "react";
import classes from "./AboutUs.module.css";
import Infographics from "./ Infographics/Infographics";
import History from "./History/History";

const AboutUs = () => {
  return (
      <div className={classes.wrapper}>
        <div className={classes.overlay}>
          <div className={classes.data_container}>
            <History/>
            <div className={classes.separating_line_container}>
              <div className={classes.separating_line}></div>
            </div>
            <Infographics/>
          </div>
        </div>
      </div>
  );
};

export default AboutUs;