import classes from 'src/Page Structure/Footer/Footer.module.css'

const Footer = ({contacts}) => {
  return (
    <div id='end' className={classes.container}>
      <div className={classes.castle} />
      <div className={classes.grid_container}>
        <div className={classes.subgrid}>
          <div className={`${classes.item} ${classes.logo}`} />
          <div className={`${classes.item} ${classes.social_icon} ${classes.si1}`}></div>
          <div className={`${classes.item} ${classes.social_icon} ${classes.si2}`}></div>
          <div className={`${classes.item} ${classes.location_icon}`}></div>
          <div className={classes.item}>Калуга, Семеново городище 6</div>
        </div>

        <div className={classes.subgrid}>
          <div className={`${classes.item} ${classes.name}`}>Гостиница</div>
          <div className={`${classes.item} ${classes.phone_icon} ${classes.pi1}`}></div>
          {/* <div className={classes.item}>+7 (4842) 56-57-56</di v> */}
          <div className={`${classes.item} ${contacts.hotel.phone}`} />
          <div className={`${classes.item} ${classes.message_icon} ${classes.mi1}`}></div>
          <div className={classes.item}>{contacts.hotel.email}</div>
        </div>

        <div className={classes.subgrid}>
          <div className={`${classes.item} ${classes.name}`}>Ресторан</div>
          <div className={`${classes.item} ${classes.phone_icon} ${classes.pi2}`}></div>
          <div className={classes.item}>+{contacts.restaurant.phone}</div>
          <div className={`${classes.item} ${classes.message_icon} ${classes.mi2}`}></div>
          <div className={classes.item}>{contacts.restaurant.email}</div>
        </div>
        <div className={classes.subgrid}>
          <div className={`${classes.item} ${classes.name}`}>Услуги</div>
          <div className={`${classes.item} ${classes.phone_icon} ${classes.pi3}`}></div>
          <div className={classes.item}>+{contacts.services.phone}</div>
          <div className={`${classes.item} ${classes.message_icon} ${classes.mi3}`}></div>
          <div className={classes.item}>{contacts.services.email}</div>
        </div>
      </div>
    </div>
  )
}

export default Footer
