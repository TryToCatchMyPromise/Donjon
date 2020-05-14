import React, {useState} from "react";
import classes from "./Navigation.module.css";
import {NavLink} from "react-router-dom";

const Navigation = () => {

  const [ navOpen, setNavOpen ] = useState(0)
  const [ hoverIndex, setHoverIndex ] = useState(-1)


  return (
      <nav className={ navOpen ? 'active' : '' }>

        <div className={classes.nav_item + navOpen ? 'active' : '' }>
          <NavLink to="/main">Главная</NavLink>
        </div>

        <div className={classes.nav_item}>
          <NavLink to="/hotel">Гостиница</NavLink>
        </div>
        <div className={classes.nav_item}>
          <NavLink to="/restaurant">Ресторан</NavLink>
        </div>
        <div className={classes.nav_item}>
          <NavLink to="/services">Услуги</NavLink>
        </div>
        <div className={classes.nav_item}>
          <NavLink to="/contacts">Контакты</NavLink>
        </div>

      </nav>
  );
};

export default Navigation;