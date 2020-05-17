import React from "react";
import classes from "./ImageTransfer.module.css";
import {NavLink} from "react-router-dom";


const ImageTransfer = (props) => {
  // debugger;
  return (
      <div id={"image_transfer"}>
        <div className={classes.image_flex_container}>

          <div className={classes.image_items + ' ' + classes.secondImage}>
            <div className={classes.overlay}></div>
            <div className={classes.data_container}>
              <div className={classes.name}>Гостиница</div>
              <div className={classes.monogram}></div>
              <div className={classes.text_overlay}>Ваши кони устали, и сил уже нет?
                Гостиница на 13 номеров послужит отличным пристанищем для путников со всех уголков света
              </div>
              <div className={classes.phone}>+{props.contacts.hotel.phone}</div>
              <NavLink to="/hotel"  className={classes.btn_link}>
                <div className={classes.button}>Подробнее</div>
              </NavLink>
            </div>
            <div className={classes.text}>Ваши кони устали, и сил уже нет?
              Гостиница на 13 номеров послужит отличным пристанищем для путников со всех уголков света
            </div>
          </div>

          <div className={classes.image_items + ' ' + classes.firstImage}>
            <div className={classes.overlay}></div>
            <div className={classes.data_container}>
              <div className={classes.name}>Ресторан</div>
              <div className={classes.monogram}></div>
              <div className={classes.text_overlay}>Вы голодны, а доставка слона из
                Индии вам не по карману? Искушать яств местных и заморских
                смогут позволить себе люди из всех сословий любого достатка в залах
                нашего ресторана
              </div>
              <div className={classes.phone}>+{props.contacts.restaurant.phone}</div>
              <NavLink to="/restaurant"  className={classes.btn_link}>
                <div className={classes.button}>Подробнее</div>
              </NavLink>
            </div>
            <div className={classes.text}>Вы голодны, а доставка слона из
              Индии вам не по карману? Искушать яств местных и заморских
              смогут позволить себе люди из всех сословий любого достатка в залах
              нашего ресторана
            </div>
          </div>

          <div className={classes.image_items + ' ' + classes.thirdImage}>
            <div className={classes.overlay}></div>
            <div className={classes.data_container}>
              <div className={classes.name}>Услуги</div>
              <div className={classes.monogram}></div>
              <div className={classes.text_overlay}>Совершить омовения в бассейне, закалить тела горячим паром в сауне
                и развить боевые навыки в тренажёрном зале
                сможет дружная компания из любого ордена!</div>
              <div className={classes.phone}>+{props.contacts.services.phone}</div>
              <NavLink to="/services"  className={classes.btn_link}>
                <div className={classes.button}>Подробнее</div>
              </NavLink>
            </div>
            <div className={classes.text}>Совершить омовения в бассейне, закалить тела горячим паром в сауне
              и развить боевые навыки в тренажёрном зале
              сможет дружная компания из любого ордена!
            </div>
          </div>
        </div>
      </div>

  );
};

export default ImageTransfer;