import React from "react";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
      <div className={classes.container}>
        <div className={classes.castle}></div>
        {/*<div className={classes.grid_container}>*/}
        {/*  <div className={classes.item + ' ' + classes.logo}></div>*/}
        {/*  <div className={classes.item + ' ' + classes.name}>Гостиница</div>*/}
        {/*  <div className={classes.item + ' ' + classes.name}>Ресторан</div>*/}
        {/*  <div className={classes.item + ' ' + classes.name}>Услуги</div>*/}
        {/*  <div className={classes.item}>+7 (4842) 56-57-56</div>*/}
        {/*  <div className={classes.item}>+7 (4842) 22-49-96</div>*/}
        {/*  <div className={classes.item}>+7 (4842) 56-57-56</div>*/}
        {/*  <div className={classes.item}>Калуга, ул. Семеново городище 6</div>*/}
        {/*  <div className={classes.item}>hotel@donjon-kaluga.ru</div>*/}
        {/*  <div className={classes.item}>restaurant@donjon-kaluga.ru</div>*/}
        {/*  <div className={classes.item}>services@donjon-kaluga.ru</div>*/}
        {/*  <div className={classes.item + ' ' + classes.message_icon + ' ' + classes.mi1}></div>*/}
        {/*  <div className={classes.item + ' ' + classes.message_icon + ' ' + classes.mi2}></div>*/}
        {/*  <div className={classes.item + ' ' + classes.message_icon + ' ' + classes.mi3}></div>*/}
        {/*  <div className={classes.item + ' ' + classes.phone_icon + ' ' + classes.pi1}></div>*/}
        {/*  <div className={classes.item + ' ' + classes.phone_icon + ' ' + classes.pi2}></div>*/}
        {/*  <div className={classes.item + ' ' + classes.phone_icon + ' ' + classes.pi3}></div>*/}
        {/*  <div className={classes.item + ' ' + classes.location_icon}></div>*/}
        {/*  <div className={classes.item + ' ' + classes.social_icon + ' ' + classes.si1}></div>*/}
        {/*  <div className={classes.item + ' ' + classes.social_icon + ' ' + classes.si2}></div>*/}
        {/*</div>*/}

        <div className={classes.grid_container}>

          <div className={classes.subgrid}>
            <div className={classes.item + ' ' + classes.logo}></div>
            <div className={classes.item + ' ' + classes.social_icon + ' ' + classes.si1}></div>
            <div className={classes.item + ' ' + classes.social_icon + ' ' + classes.si2}></div>
            <div className={classes.item + ' ' + classes.location_icon}></div>
            <div className={classes.item}>Калуга, Семеново городище 6</div>
          </div>

          <div className={classes.subgrid}>
            <div className={classes.item + ' ' + classes.name}>Гостиница</div>
            <div className={classes.item + ' ' + classes.phone_icon + ' ' + classes.pi1}></div>
            <div className={classes.item}>+7 (4842) 56-57-56</div>
            <div className={classes.item + ' ' + classes.message_icon + ' ' + classes.mi1}></div>
            <div className={classes.item}>hotel@donjon-kaluga.ru</div>
          </div>

          <div className={classes.subgrid}>
            <div className={classes.item + ' ' + classes.name}>Ресторан</div>
            <div className={classes.item + ' ' + classes.phone_icon + ' ' + classes.pi2}></div>
            <div className={classes.item}>+7 (4842) 22-49-96</div>
            <div className={classes.item + ' ' + classes.message_icon + ' ' + classes.mi2}></div>
            <div className={classes.item}>restaurant@donjon-kaluga.ru</div>

          </div>
          <div className={classes.subgrid}>
            <div className={classes.item + ' ' + classes.name}>Услуги</div>
            <div className={classes.item + ' ' + classes.phone_icon + ' ' + classes.pi3}></div>
            <div className={classes.item}>+7 (4842) 56-57-56</div>
            <div className={classes.item + ' ' + classes.message_icon + ' ' + classes.mi3}></div>
            <div className={classes.item}>services@donjon-kaluga.ru</div>

          </div>















        </div>
      </div>
  );
};

export default Footer;