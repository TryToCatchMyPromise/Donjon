import React, {useState} from "react";
import classes from "./Navigation.module.css";

const Navigation = () => {

  const [ navOpen, setNavOpen ] = useState(0)
  const [ hoverIndex, setHoverIndex ] = useState(-1)


  return (
      <nav className={ navOpen ? 'active' : '' }>






        <div className={classes.nav_item + navOpen ? 'active' : '' }><a href="/">Главная</a></div>
        <div className={classes.nav_item}><a href="/">Гостиница</a></div>
        <div className={classes.nav_item}><a href="/">Ресторан</a></div>
        <div className={classes.nav_item}><a href="/">Услуги</a></div>
        <div className={classes.nav_item}><a href="/">Контакты</a></div>
      </nav>
  );
};

export default Navigation;