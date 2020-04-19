import React from "react";
import classes from "./Infographics.module.css";

const Infographics = () => {
  return (
      <div className={classes.grid_container}>
        <div className={classes.grid_element}>
          <div className={classes.icon_container}>
            <div className={classes.text}></div>
            <div className={classes.icon + ' ' + classes.icon_knight}></div>
          </div>
          <div className={classes.icon_name}>Средневековая <br/>атмосфера</div>
        </div>
        <div className={classes.grid_element}>
          <div className={classes.icon_container}>
            <div className={classes.text}></div>
            <div className={classes.icon + ' ' + classes.icon_map}></div>
          </div>
          <div className={classes.icon_name}>Удобное расположение <br/>недалеко от центра</div>
        </div>
        <div className={classes.grid_element}>
          <div className={classes.icon_container}>
            <div className={classes.text}></div>
            <div className={classes.icon + ' ' + classes.icon_dish}></div>
          </div>
          <div className={classes.icon_name}>Эксклюзивные <br/>блюда</div>
        </div>
        <div className={classes.grid_element}>
          <div className={classes.icon_container}>
            <div className={classes.text}></div>
            <div className={classes.icon + ' ' + classes.icon_view}></div>
          </div>
          <div className={classes.icon_name}>Красивый вид <br/>экология</div>
        </div>
        <div className={classes.grid_element}>
          <div className={classes.icon_container}>
            <div className={classes.text}></div>
            <div className={classes.icon + ' ' + classes.icon_complex}></div>
          </div>
          <div className={classes.icon_name}>Комплекс услуг <br/>в одном месте</div>
        </div>
      </div>
  );
};

export default Infographics;