import {NavHashLink as Link} from 'react-router-hash-link'
import classes from 'src/Page Structure/ArrowDown.module.css'

const ArrowDown = ({hash}) => {
  return (
    <div className={classes.global_container}>
      <Link smooth to={`#${hash}`} className={classes.link}>
        <div className={classes.arrow_container}>
          <div className={classes.arrow}>
            <div className={`${classes.stick} ${classes.stck1}`} />
            <div className={`${classes.stick} ${classes.stck2}`} />
          </div>
        </div>
      </Link>
    </div>
  )
}

export default ArrowDown
