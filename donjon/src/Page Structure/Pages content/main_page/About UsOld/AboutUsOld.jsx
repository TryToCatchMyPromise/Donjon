import React from "react";
import classes from "./AboutUsOld.module.css";

const AboutUsOld = () => {
  return (
      <section className={classes.about_us_block}>
        <div className={classes.about_us_column + ' ' + classes.about_us_left}>
          <div className={classes.about_us_items + ' ' + classes.about_us_left_item}>Этот блок выезжает слева</div>
        </div>
        <div className={classes.about_us_column + ' ' + classes.about_us_right}>
          <div className={classes.about_us_items + ' ' + classes.about_us_right_item}>Этот блок выезжает справа</div>
        </div>
        <div className={classes.about_us_column + ' ' + classes.about_us_left}>
          <div className={classes.about_us_items + ' ' + classes.about_us_left_item}>Этот блок выезжает слева</div>
        </div>
        <div className={classes.about_us_column + ' ' + classes.about_us_right}>
          <div className={classes.about_us_items + ' ' + classes.about_us_right_item}>Этот блок выезжает справа</div>
        </div>
        <div className={classes.about_us_column + ' ' + classes.about_us_left}>
          <div className={classes.about_us_items + ' ' + classes.about_us_left_item}>Этот блок выезжает слева</div>
        </div>
        <div className={classes.about_us_column + ' ' + classes.about_us_right}>
          <div className={classes.about_us_items + ' ' + classes.about_us_right_item}>Этот блок выезжает справа</div>
        </div>
      </section>
  );
};

export default AboutUsOld;