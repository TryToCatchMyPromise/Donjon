import React from "react";
import classes from "./LeftNav.module.css";
import { NavHashLink as Link } from 'react-router-hash-link';
// import {Link} from 'react-scroll';

// const sectionNames = ["Начало", "Разделы", "История", "Инфографика", "Конец"];

const sectionNames = [
  {
    text: 'Начало',
    hash: '#start',
  },
  {
    text: 'Разделы',
    hash: '#image_transfer',
  },
  {
    text: 'История',
    hash: '#history',
  },
  {
    text: 'Инфографика',
    hash: '#infographics',
  },
  {
    text: 'Конец',
    hash: '#end',
  },
]

const LeftNav = (props) => {
  debugger;
  return (
      <div className={classes.wrapper}>
        {/*<div className={classes.menu_container}>*/}
          <div className={classes.nav_container}>
            {props.section.map(
                (s, index, array) => {
                  // debugger;
                  if (index !== array.length - 1) {
                    return (
                        <>
                        <Link smooth to={s.hash}>
                          <div className={classes.circle}>

                            <div className={classes.section}>

                                {s.text}

                            </div>

                          </div>
                        </Link>
                          <div className={classes.line}></div>

                        </>
                    )
                  } else {
                    return (
                        <Link smooth to={s.hash}>
                        <div className={classes.circle}>
                          <div className={classes.section}>{s.text}</div>
                        </div>
                        </Link>
                    )

                  }
                }
            )}
            {/*<div className={classes.circle}></div>*/}
            {/*<div className={classes.line}></div>*/}
            {/*<div className={classes.circle}></div>*/}
            {/*<div className={classes.line}></div>*/}
            {/*<div className={classes.circle}></div>*/}
            {/*<div className={classes.line}></div>*/}
            {/*<div className={classes.circle}></div>*/}
          </div>
        {/*</div>*/}

      </div>

  )
}

export default LeftNav;