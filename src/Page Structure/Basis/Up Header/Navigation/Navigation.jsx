import classes from 'src/Page Structure/Basis/Up Header/Navigation/Navigation.module.css'
import {NavLink} from 'react-router-dom'

const Navigation = () => {
  return (
    <nav>
      <NavLink to='/'>
        <div className={classes.nav_item}>Главная</div>
      </NavLink>
      <NavLink to='/hotel'>
        <div className={classes.nav_item}>Гостиница</div>
      </NavLink>
      <NavLink to='/restaurant'>
        <div className={classes.nav_item}>Ресторан</div>
      </NavLink>
      <NavLink to='/services'>
        <div className={classes.nav_item}>Услуги</div>
      </NavLink>
      <NavLink to='/contacts'>
        <div className={classes.nav_item}>Контакты</div>
      </NavLink>
    </nav>
  )
}

export default Navigation
