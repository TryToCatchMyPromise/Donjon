import React from "react";
import classes from "./LeftNav.module.css";

const sectionNames = ["Начало", "Разделы", "История", "Инфографика", "Конец"];
const LeftNav = () => {
  return (
      <div className={classes.wrapper}>
        {/*<div className={classes.menu_container}>*/}
          <div className={classes.nav_container}>
            {sectionNames.map(
                (s, index, array) => {
                  if (index !== array.length - 1) {
                    return (
                        <>
                          <div className={classes.circle}>
                            <div className={classes.section}>{s}</div>
                          </div>
                          <div className={classes.line}></div>
                        </>
                    )
                  } else {
                    return (
                        <div className={classes.circle}>
                          <div className={classes.section}>{s}</div>
                        </div>
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