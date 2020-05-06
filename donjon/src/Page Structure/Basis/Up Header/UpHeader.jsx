import React, {useEffect, useLayoutEffect, useRef, useState} from "react";
import classes from "./UpHeader.module.css";
import Navigation from "./Navigation/Navigation";

const UpHeader = () => {

  const headerRef = React.createRef();

  const [isMobile, setIsMobile] = useState(true);
  const [headerWidth, setHeaderWidth] = useState(0);
  const [navOpen, setNavOpen] = useState(false);

  const [headerScrollDown, setHeaderScrollDown] = useState(false);
  const [globalHeaderYoffset, setGlobalHeaderYoffset] = useState(0);

  useLayoutEffect(() => {
    function changeVersion() {
      if (headerRef && headerRef.current) {
        setHeaderWidth(headerRef.current.clientWidth);
              headerWidth > 1100 ? setIsMobile(false) : setIsMobile(true);
              if (!isMobile) {
                setNavOpen(false);
              }
      }
    }
    changeVersion();
    window.addEventListener('resize', changeVersion);
    return () => {
      window.removeEventListener('resize', changeVersion);
    }
  })

  // const isBrowser = typeof window !== `undefined` //for SSR

  useLayoutEffect(() => {
    function scrollHeader() {
      //   if (!isBrowser) return { y: 0 }
      if (!isMobile) {
        console.log(isMobile);
          if (window.pageYOffset <= globalHeaderYoffset && headerScrollDown === true) { //scroll up, header == false
            setHeaderScrollDown(false);
          } else if (window.pageYOffset > globalHeaderYoffset && headerScrollDown === false) { //scroll down, header == true
            setHeaderScrollDown(true);
          }
          setGlobalHeaderYoffset(window.pageYOffset);
      }
    }
    window.addEventListener("scroll", scrollHeader);
    return () => {
      window.removeEventListener("scroll", scrollHeader);
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
        <div ref = {headerRef} className={classes.header + ' ' +
        (navOpen ? classes.header_active : classes.header_unactive)
        + ' ' + (isMobile ? '' : (headerScrollDown ? classes.header_on_scroll_down : classes.header_on_scroll_up))
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