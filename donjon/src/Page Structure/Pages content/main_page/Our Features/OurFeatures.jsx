import React from "react";
import classes from "./OurFeatures.module.css";

const OurFeatures = () => {
  return (
      <section className={classes.our_features_block}>
        <section className={classes.our_features_container}>
          <div className={classes.first_first + ' ' + classes.our_features_item}>
            <div className={classes.our_features_icon}></div>
            <div>Экология</div>
          </div>
          <div className={classes.first_second + ' ' + classes.our_features_item}>
            <div className={classes.our_features_icon}></div>
            <div>Вид</div>
          </div>
          <div className={classes.first_third + ' ' + classes.our_features_item}>
            <div className={classes.our_features_icon}></div>
            <div>Средневековая атмосфера</div>
          </div>
          <div className={classes.second_first + ' ' + classes.our_features_item}>
            <div className={classes.our_features_icon}></div>
            <div>Соотношение цены и качества</div>
          </div>
          <div className={classes.second_second + ' ' + classes.our_features_item}>
            <div className={classes.our_features_icon}></div>
            <div>Расположение</div>
          </div>
          <div className={classes.second_third + ' ' + classes.our_features_item}>
            <div className={classes.our_features_icon}></div>
            <div>Персонал</div>
          </div>
          <div className={classes.third_first + ' ' + classes.our_features_item}>
            <div className={classes.our_features_icon}></div>
            <div>Эксклюзивные блюда</div>
          </div>
          <div className={classes.third_second + ' ' + classes.our_features_item}>
            <div className={classes.our_features_icon}></div>
            <div>Бесшовный Wi-Fi</div>
          </div>
          <div className={classes.third_third + ' ' + classes.our_features_item}>
            <div className={classes.our_features_icon}></div>
            <div>Комплекс услуг в одном месте</div>
          </div>
        </section>
      </section>
  );
};

export default OurFeatures;