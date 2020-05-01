import React from "react";
import classes from "./UpHeader.module.css";
import Navigation from "./Navigation/Navigation";

const UpHeader = () => {

  // let globalHeaderYoffset = 0;
  // let isHeaderAnimated = false;
  // window.addEventListener("scroll", function() {
  //   scrollHeader();
  // });
  //
  // function scrollHeader() {
  //   let header = document.getElementsByClassName("header")[0];
  //   if (window.pageYOffset <= globalHeaderYoffset && !isHeaderAnimated) { //scroll up, header == true
  //   }
  //   if (window.pageYOffset <= globalHeaderYoffset && isHeaderAnimated){ //scroll up, header == false
  //     header.classList.remove("headerOnScrollDown");
  //     isHeaderAnimated = false;
  //   }
  //   if (window.pageYOffset > globalHeaderYoffset && !isHeaderAnimated) { //scroll down, header == true
  //     header.classList.add("headerOnScrollDown");
  //     isHeaderAnimated = true;
  //   }
  //   if (window.pageYOffset > globalHeaderYoffset && isHeaderAnimated) { //scroll down, header == false
  //   }
  //   globalHeaderYoffset = window.pageYOffset;
  // }


  return (
      <div className={classes.header} onScroll={}>
        <div className={classes.logo_container}>
          <div className={classes.logo}></div>
        </div>
        <Navigation/>
        <div className={classes.btn_container}>
          <div className={classes.btn}>Оставить заявку</div>
        </div>
      </div>
  );
};

export default UpHeader;