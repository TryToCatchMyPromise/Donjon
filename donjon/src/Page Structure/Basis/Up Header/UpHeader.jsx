import React, {useEffect, useLayoutEffect, useRef, useState} from "react";
import classes from "./UpHeader.module.css";
import Navigation from "./Navigation/Navigation";

// function solve(n) {
//   // Your code here
//   debugger;
//   let moneyArray = [10, 20, 500, 100, 200, 50];
//   let moneyArraySorted = moneyArray.sort( (a, b) => b - a );
//   if((n % moneyArraySorted[0]) !== 0){
//     return -1;
//   }
//   let myReducer = moneyArraySorted.reduce((acc, cur, ind) => {
//     if (cur > acc.restMoney) {
//       return acc;
//     }
//     let curCount = Math.floor(acc.restMoney/cur);
//     acc.count += curCount;
//     acc.restMoney = acc.restMoney - curCount*cur;
//     return acc;
//   }, {restMoney: n, count: 0});
//   console.log(myReducer.count);
//   return myReducer.count;
// }

// function digital_root(n) {
//   n.split('').reduce( (acc, cur, ind) => {
//     acc+=cur;
//     return acc;
//   } ,0)
// }

// debugger;
// let findOdd = (A) => {
//   let [...isUniq] = new Set(A);
//   let a = isUniq.reduce((acc, cur) => {
//     let compareCount = A.reduce((acc2, cur2) => {
//       if (cur === cur2) {
//         acc2++;
//       }
//       return acc2;
//     }, 0);
//     if (compareCount % 2) {
//       acc.result = cur;
//     }
//     return acc;
//   }, {result: 0})
//   return a.result;
// }
// debugger;
// const findOdd = A => A.find(x => A.filter(v => x === v).length % 2);
//
//
// console.log(findOdd([1,1,1, 3, 3]));

// let str = "Hello_my_friend";
// let separators = ["-", "_"];
// let arr = str.split(new RegExp(separators));
// console.log(arr);

// const delimiter = "abcd_wxyz-ghi";
// const separators = ['_', '-'];
// console.log(separators.join('|'));
//
// const result = delimiter.split(new RegExp(separators.join('|'), 'g'));
// console.log(result);


// debugger;
// let toCamelCase = (str) => {
//   if (str.length < 1) {return ""}
//   let arr = str.split(/[-_]/);
//   let result = arr.reduce((acc, cur, index) => {
//     if (!cur){return acc;}
//     if (cur[0].toUpperCase() !== cur[0] && index !==0) {
//       cur = cur[0].toUpperCase() + cur.slice(1);
//     }
//     return acc+cur;
//   }, "")
//   console.log(result);
// }
//
// toCamelCase("super-test-sobaka");
// toCamelCase("Vobla_test-ogurez");
// toCamelCase("---to-my-oooooold-friend");


// let str = "sss";
// console.log(str[0].toUpperCase());


//   A.reduce( (acc, cur, ind) => {
//
//     if (acc.isUniq.includes(cur)){
//       return acc;
//     }
//     else {
//       acc.isUniq.push(cur);
//       if (ind === 1){
//         [acc.leftNum, ...acc.newArr] = A;
//       }
//       else{
//         [acc.leftNum, ...acc.newArr] = acc.newArr;
//       }
//       acc.newArr.reduce( (accum, current, index) => {
//         if (acc.leftNum === current){
//
//         }
//       } , 0)
//     }
//
//
//
//
//   } , {isUniq: [], leftNum: 0, newArr: [], result: 0})
// }


console.log(a) // undefinded
var a = 6;
// console.log(b) // error, так как es6 запрещает доступ к b перед инициализацией ReferenceError: Cannot access 'b' before initialization
let b = 6;  // должна стоять ; так как error Была сделана попытка вызвать значение как функцию

// let a = 5; // error, так как нельзя второй раз объявить Parsing error: Identifier 'a' has already been declared
(function() {
  let a = 6;
  console.log(a) //6
  if(a>=6) {
    let a = 10;
    console.log(a); //10
  }
  console.log(a); //6
})();

// const country = {
//   values: ['rus', 'by', 'vg', 'us'],
//   [Symbol.iterator]() {
//     let i =1;
//     return {
//       next: () => {
//         let value = this.values[i-1];
//         value = `${i}.`+ value;
//         i++;
//         return {
//           done: i > this.values.length+1,
//           value,
//
//         }
//       }
//     }
//   }
// }
//
// for (let item of country){
//   console.log(item);
// }

// let arr = [1, 43, [2, 56, [16, "hello"]]];
// console.log(arr.flat(Infinity));
//
// let result = (someInput) => {
//   // code with someInput
//   return someInput ?? "Функция вернула null || undefined. Доработай её"
// }
// console.log(result(14));
// console.log(result(null));

const arr = [1, 2, 3, 5, 8, 13];

for (var i = 0 ; i < arr.length; i++){
  (function(j){
    setTimeout(() => {
      console.log(`${arr[j]}`)
    }, 1500)
  })(i)
}


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
        } else if (window.pageYOffset > globalHeaderYoffset && headerScrollDown === false && window.pageYOffset > 300) { //scroll down, header == true
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
        <div ref={headerRef} className={classes.header + ' ' +
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