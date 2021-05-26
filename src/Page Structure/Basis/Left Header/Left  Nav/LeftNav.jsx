import classes from 'src/Page Structure/Basis/Left Header/Left  Nav/LeftNav.module.css'
import {NavHashLink as Link} from 'react-router-hash-link'

const LeftNav = ({section}) => {
  return (
    <div className={classes.wrapper}>
      {/* <div className={classes.menu_container}> */}
      <div className={classes.nav_container}>
        {section.map((s, index, array) => {
          if (index !== array.length - 1) {
            return (
              <>
                <Link smooth to={s.hash}>
                  <div className={classes.circle}>
                    <div className={classes.section}>{s.text}</div>
                  </div>
                </Link>
                <div className={classes.line} />
              </>
            )
          }
          return (
            <Link key={s.hash} smooth to={s.hash}>
              <div className={classes.circle}>
                <div className={classes.section}>{s.text}</div>
              </div>
            </Link>
          )
        })}
        {/* <div className={classes.circle}></div> */}
        {/* <div className={classes.line}></div> */}
        {/* <div className={classes.circle}></div> */}
        {/* <div className={classes.line}></div> */}
        {/* <div className={classes.circle}></div> */}
        {/* <div className={classes.line}></div> */}
        {/* <div className={classes.circle}></div> */}
      </div>
      {/* </div> */}
    </div>
  )
}

export default LeftNav
