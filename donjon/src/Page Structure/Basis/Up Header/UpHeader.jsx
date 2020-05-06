import React, {useEffect, useLayoutEffect, useRef, useState} from "react";
import classes from "./UpHeader.module.css";
import Navigation from "./Navigation/Navigation";
import {Component} from "react";

const UpHeader = () => {

  const myRef = React.createRef();

  const [navOpen, setNavOpen] = useState(false);
  const [headerFixed, checkHeaderFixed] = useState(true);

  let headerWidth;
  useEffect(() => {
    function ccc() {
      if (myRef && myRef.current) {
        headerWidth = myRef.current.clientWidth;
        (headerWidth > 270) ? checkHeaderFixed(false) : checkHeaderFixed(true);
      }
    }

    ccc();
    window.addEventListener('resize', ccc);
  })

  const [headerScrollDown, setHeaderScrollDown] = useState(false);
  const [globalHeaderYoffset, setGlobalHeaderYoffset] = useState(0);
  const [windowWidth, setWindowWidth] = useState(true);

  useEffect(() => {
    if (window.clientWidth > 1100) {
      setWindowWidth(true);

      console.log(window.pageYOffset);

      function scrollHeader() {
        if (myRef && myRef.current) {
          if (window.pageYOffset <= globalHeaderYoffset && headerScrollDown === true) { //scroll up, header == false
            setHeaderScrollDown(false);
          } else if (window.pageYOffset > globalHeaderYoffset && headerScrollDown === false) { //scroll down, header == true
            setHeaderScrollDown(true);
          }
          setGlobalHeaderYoffset(window.pageYOffset);
        }
      }

      window.addEventListener("scroll", function () {
        scrollHeader();
      });

      window.removeEventListener("scroll", function () {
        scrollHeader();
      });

    } else {
      setWindowWidth(false);
      // return null;
    }
  })

  const navLinks = [
    {
      text: 'Главная',
      path: '/',
    },
    {
      text: 'Гостиница',
      path: '/hotel',
    },
    {
      text: 'Ресторан',
      path: '/restaurant',
    },
    {
      text: 'Услуги',
      path: '/services',
    },
    {
      text: 'Контакты',
      path: '/contacts',
    },
  ]

  return (
      <>
        <div className={classes.close_button} onClick={() => {
          setNavOpen(!navOpen)
        }}>
          <div className={classes.btn_stick + ' ' + (navOpen ? classes.btn_stick_active : '')}></div>
          <div className={classes.btn_stick + ' ' + (navOpen ? classes.btn_stick_active : '')}></div>
        </div>
        <div ref={myRef} className={classes.header + ' ' +
        (navOpen ?
            (headerFixed ? classes.header_active_fixed : classes.header_active) :
            (headerFixed ? classes.header_fixed_unactive : ''))
        + ' ' + (windowWidth ? (headerScrollDown ? classes.header_on_scroll_down : classes.header_on_scroll_up) : '')
        }>
          <div className={classes.logo_container}>
            <div className={classes.logo}></div>
          </div>
          <Navigation navLinks={navLinks}/>
          <div className={classes.btn_container}>
            <div className={classes.btn}>Оставить заявку</div>
          </div>
        </div>
      </>
  );
};

export default UpHeader;