import React, {useLayoutEffect, useState} from "react";
import classes from "./ScrollTop.module.css";

function up() {
  document.body.style.opacity = "0.5";
  let t;
  let length = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
  if (length > 0) {
    window.scrollBy(0, -20);
    t = setTimeout(up, 5);
  } else {
    document.body.style.opacity = "1";
    clearTimeout(t);
  }
}

// window.addEventListener("mousemove", scrollTopClick);
// window.addEventListener("scroll", scrollTopClickScroll);


const ScrollTop = () => {

  // const headerRef = React.createRef();

// const [isMobile, setIsMobile] = useState(true);
// const [headerWidth, setHeaderWidth] = useState(0);
// const [navOpen, setNavOpen] = useState(false);

  // const [headerScrollDown, setHeaderScrollDown] = useState(false);
  // const [globalHeaderYoffset, setGlobalHeaderYoffset] = useState(0);

// const isBrowser = typeof window !== `undefined` //for SSR

  // useLayoutEffect(() => {
    // let lastMouseEventX;

    // function scrollTopClick(event) {
      // let clickElem = document.querySelector(".scrollTop");
      // console.log(event);
      // lastMouseEventX = event.clientX;
      // let afterVideoBlock = document.querySelector(".image-transfer");
      // if (lastMouseEventX <= 70 &&  afterVideoBlock.getBoundingClientRect().top <= 0){
      //   clickElem.classList.add('scrollTopOnmousemove');
      // }
      // else {
      //   clickElem.classList.remove('scrollTopOnmousemove');
      // }
      // alert('1');
    // }

    // function scrollTopClickScroll() {
      // let clickElem = document.querySelector(".scrollTop");
      // let afterVideoBlock = document.querySelector(".image-transfer");
      // if (lastMouseEventX <= 70 && afterVideoBlock.getBoundingClientRect().top <= 0){
      //   clickElem.classList.add('scrollTopOnmousemove');
      // }
      // else {
      //   clickElem.classList.remove('scrollTopOnmousemove');
      // }
      // alert('2');
    // }

    // function arrowScroll() {
    //   scrollTopClick();
    //   scrollTopClickScroll();
    // }


    // window.addEventListener("mousemove", arrowScroll);
    // window.addEventListener("scroll", arrowScroll);
    // return () => {
    //   window.removeEventListener("scroll", arrowScroll);
    // }
  // })
const [isTop, setIsTop] = useState(true);

  function checkIfTop() {
    (window.pageYOffset < 400) ? setIsTop(true) : setIsTop(false);
  }

  useLayoutEffect(() => {
    window.addEventListener("scroll", checkIfTop);
    return () => {
      window.removeEventListener("scroll", checkIfTop);
    }
  })


  return (
      <div className={classes.scrollTop_container}>
        <div onClick={up} className={classes.scrollTop + ' ' + (isTop ? classes.disabled : '')}>
          <div className={classes.scrollTopArrow}>
            <div className={classes.stick + ' ' + classes.stck1}></div>
            <div className={classes.stick + ' ' + classes.stck2}></div>
          </div>
        </div>
      </div>

  );
};

export default ScrollTop;