//-------------------------------------------------------------------------------------------------//
//                                      Header animation
//-------------------------------------------------------------------------------------------------//

let globalHeaderYoffset = 0;
let isHeaderAnimated = false;
window.addEventListener("scroll", function() {
  scrollHeader();
});

function scrollHeader() {
  let header = document.getElementsByClassName("header")[0];
  if (pageYOffset <= globalHeaderYoffset && !isHeaderAnimated) { //scroll up, header == true
  }
  if (pageYOffset <= globalHeaderYoffset && isHeaderAnimated){ //scroll up, header == false
    header.classList.remove("headerOnScrollDown");
    isHeaderAnimated = false;
  }
  if (pageYOffset > globalHeaderYoffset && !isHeaderAnimated) { //scroll down, header == true
    header.classList.add("headerOnScrollDown");
    isHeaderAnimated = true;
  }
  if (pageYOffset > globalHeaderYoffset && isHeaderAnimated) { //scroll down, header == false
  }
  globalHeaderYoffset = pageYOffset;
}

// function scrollHeaderByPosition() {
//   let header = document.getElementsByClassName("header")[0];
//   if ()
// }



//-------------------------------------------------------------------------------------------------//
//                                    About us block animation
//-------------------------------------------------------------------------------------------------//

window.addEventListener("scroll", function() {
  aboutUsBlockLeftRight();
  aboutUsBlockRightLeft();
});



// function aboutUsBlockLeftRight(){
// let block = document.getElementsByClassName('about-us-items')[0];
// let currentBlockPosition = block.getBoundingClientRect().top;
// if (currentBlockPosition <= 700) {
//     // block.addClass("about-us-left-show");
//     block.classList.add("about-us-left-show");
//     // alert('Hello');
//   }
// else {
//   block.classList.remove("about-us-left-show");
// }
// }

function aboutUsBlockLeftRight(){
  let block = document.getElementsByClassName('about-us-left-item');
  Object.keys(block).forEach((elem) => {
    let currentBlockPosition = block[elem].getBoundingClientRect().top;
    if (currentBlockPosition <= 700) {
      // block.addClass("about-us-left-show");
      block[elem].classList.add("about-us-left-show");
      // alert('Hello');
    }
    else {
      block[elem].classList.remove("about-us-left-show");
    }
  });
}

function aboutUsBlockRightLeft(){
  let block = document.getElementsByClassName('about-us-right-item');
  Object.keys(block).forEach((elem) => {
    let currentBlockPosition = block[elem].getBoundingClientRect().top;
    if (currentBlockPosition <= 700) {
      // block.addClass("about-us-left-show");
      block[elem].classList.add("about-us-right-show");
      // alert('Hello');
    }
    else {
      block[elem].classList.remove("about-us-right-show");
    }
  });
}

// function aboutUsBlockLeftRight(){
//   let block = document.getElementsByClassName('about-us-items')[0];
//   let currentBlockPosition;
//   return () => {
//     currentBlockPosition = block.getBoundingClientRect().top;
//     if (currentBlockPosition <= 700) {
//       // block.addClass("about-us-left-show");
//       block.classList.add("about-us-left-show");
//       alert('Hello');
//     }
//   }
// }

//-------------------------------------------------------------------------------------------------//
//                                      Left button to scroll UP!
//-------------------------------------------------------------------------------------------------//



// window.addEventListener("mousemove", function(event){
//   let clickElem = document.querySelector(".scrollTop");
//   let afterVideoBlock = document.querySelector(".image-transfer");
// if (event.clientX <= 70 &&  afterVideoBlock.getBoundingClientRect().top <= 0){
//   clickElem.classList.add('scrollTopOnmousemove');
// }
// else {
//   clickElem.classList.remove('scrollTopOnmousemove');
// }
// });
let lastMouseEventX;
function scrollTopClick(event) {
  let clickElem = document.querySelector(".scrollTop");
  lastMouseEventX = event.clientX;
  let afterVideoBlock = document.querySelector(".image-transfer");
  if (lastMouseEventX <= 70 &&  afterVideoBlock.getBoundingClientRect().top <= 0){
    clickElem.classList.add('scrollTopOnmousemove');
  }
  else {
    clickElem.classList.remove('scrollTopOnmousemove');
  }
}

function scrollTopClickScroll(){
  let clickElem = document.querySelector(".scrollTop");
  let afterVideoBlock = document.querySelector(".image-transfer");
  if (lastMouseEventX <= 70 && afterVideoBlock.getBoundingClientRect().top <= 0){
    clickElem.classList.add('scrollTopOnmousemove');
  }
  else {
    clickElem.classList.remove('scrollTopOnmousemove');
  }
}

// let clickElem = document.querySelector(".scrollTop");
// clickElem.addEventListener("click", (elem) => {
//   document.body.style.opacity = "0.5";
//   let bodyToDocElem = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
//     if (bodyToDocElem > 0){
//       window.scrollBy(0, -bodyToDocElem);
//     }
//   document.body.style.opacity = "1";
// });

function up(){

  document.body.style.opacity = "0.5";
  let t;
  let length = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
  if (length > 0){
    window.scrollBy(0, -20);
    t = setTimeout(up, 5);
  }
  else {
    document.body.style.opacity = "1";
    clearTimeout(t);
  }
}

let clickElem = document.querySelector(".scrollTop");
clickElem.addEventListener("click", (elem) => {

  up();

  // let bodyToDocElem = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
  // if (bodyToDocElem !==0){
  //   window.scrollBy(0, -20);
  //   bodyToDocElem = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
  // }



});

window.addEventListener("mousemove", scrollTopClick);
window.addEventListener("scroll", scrollTopClickScroll);

//-------------------------------------------------------------------------------------------------//
//                                      Our-features hover
//-------------------------------------------------------------------------------------------------//


// let ourFeatureElem = document.querySelectorAll(".our-features-item")[0];
// ourFeatureElem.addEventListener("mouseover", () => ourFeatureElem.classList.add("our-features-item-onhover"));
// ourFeatureElem.addEventListener("mouseout", () => ourFeatureElem.classList.remove("our-features-item-onhover"));

let ourFeatureElem = document.querySelectorAll(".our-features-item");
ourFeatureElem.forEach((elem) => {
  elem.addEventListener("mouseover", () => {
    ourFeatureElem.forEach((element) => {
      if (elem !== element){
        element.classList.add("op");
      }
    })
  });
  elem.addEventListener("mouseout", () => {
    ourFeatureElem.forEach((element) => {
      if (elem !== element){
        element.classList.remove('op');
      }
    })
  });
});
// for (let elem of ourFeatureElem){
//   elem.addEventListener("click", () => this.classList.add("our-features-item-onhover"));
//   elem.addEventListener("mouseout", () => this.classList.remove("our-features-item-onhover"));
// }



// let myProm = new Promise(function (resolve,reject) {
//   let ourFeatureElem = document.querySelectorAll(".our-features-item");
//   alert("this is " + ourFeatureElem);
//   resolve(ourFeatureElem);
// });
//
// myProm.then(ourFeatureElem => {
//   alert(ourFeatureElem);
//   for (let elem of ourFeatureElem){
//     ourFeatureElem.addEventListener("mouseover", () => ourFeatureElem.classList.add("our-features-item-onhover"));
//     ourFeatureElem.addEventListener("mouseout", () => ourFeatureElem.classList.remove("our-features-item-onhover"));
//   }
// });
