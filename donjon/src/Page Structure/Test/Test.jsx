import React from "react";
import classes from "./Test.module.css";

const Test = () => {


  return (
      <div className={classes.fab}>
            <span className={classes.fab_action_button}>
                <i className={classes.fab_action_button__icon}></i>
            </span>
        <ul className={classes.fab_buttons}>
          <li className={classes.fab_buttons__item}>
            <a href="#" className={classes.fab_buttons__link} data-tooltip="Facebook">
              <i className={classes.icon_material + ' ' + classes.icon_material_fb}></i>
            </a>
          </li>
          <li className={classes.fab_buttons__item}>
            <a href="#" className={classes.fab_buttons__link} data-tooltip="Twitter">
              <i className={classes.icon_material + ' ' + classes.icon_material_tw}></i>
            </a>
          </li>
          <li className={classes.fab_buttons__item}>
            <a href="#" className={classes.fab_buttons__link} data-tooltip="Linkedin">
              <i className={classes.icon_material + ' ' + classes.icon_material_li}></i>
            </a>
          </li>
          <li className={classes.fab_buttons__item}>
            <a href="#" className={classes.fab_buttons__link} data-tooltip="Google+">
              <i className={classes.icon_material + ' ' + classes.icon_material_gp}></i>
            </a>
          </li>
        </ul>
      </div>
  )
}

export default Test;