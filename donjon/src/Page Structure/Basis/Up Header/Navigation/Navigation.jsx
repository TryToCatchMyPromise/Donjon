import React from "react";
import classes from "./Navigation.module.css";

const Navigation = () => {
  return (
      <nav>
        <div className={classes.nav_item}><a href="/main">Главная</a></div>
        <div className={classes.nav_item}><a href="/main">Гостиница</a></div>
        <div className={classes.nav_item}><a href="/main">Ресторан</a></div>
        <div className={classes.nav_item}><a href="/main">Услуги</a></div>
        <div className={classes.nav_item}><a href="/main">Контакты</a></div>
      </nav>
  );
};

export default Navigation;