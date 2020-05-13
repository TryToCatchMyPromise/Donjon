import React from "react";
import { NavHashLink as Link } from 'react-router-hash-link';
import classes from "./ArrowDown.module.css";

const ArrowDown = () => {
  return (
      <div className={classes.global_container}>
        <Link smooth to="/#image_transfer"


              className={classes.link}>
        <div className={classes.arrow_container}>

            <div className={classes.arrow}>
              <div className={classes.stick + ' ' + classes.stck1}></div>
              <div className={classes.stick + ' ' + classes.stck2}></div>
            </div>



        </div>
        </Link>
      </div>

  )
}

export default ArrowDown;