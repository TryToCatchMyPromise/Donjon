import React from "react";
import classes from "./Navigation.module.css";

const Navigation = () => {
  return (
      <nav>
        <div className={classes.nav_item}><a href="/main">Главная</a></div>
        <div className={classes.nav_item}><a href="#about-us">О нас</a></div>
        <div className={classes.nav_item} id="test"><a target="_blank" href="http://google.com">Наши особенности</a></div>
        <div className={classes.nav_item}><a target="_blank" href="http://google.com">Контакты</a></div>
      </nav>
  );
};

export default Navigation;