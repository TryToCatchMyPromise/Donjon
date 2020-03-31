import React from "react";
import classes from "./OurFeatures.module.css";

const OurFeatures = () => {
  return (
      <section className="our-features-block">
        <section className="our-features-container">
          <div className="first-first our-features-item">
            <div className='our-features-icon'></div>
            <div>Экология</div>
          </div>
          <div className="first-second our-features-item">
            <div className='our-features-icon'></div>
            <div>Вид</div>
          </div>
          <div className="first-third our-features-item">
            <div className='our-features-icon'></div>
            <div>Средневековая атмосфера</div>
          </div>
          <div className="second-first our-features-item">
            <div className='our-features-icon'></div>
            <div>Соотношение цены и качества</div>
          </div>
          <div className="second-second our-features-item">
            <div className='our-features-icon'></div>
            <div>Расположение</div>
          </div>
          <div className="second-third our-features-item">
            <div className='our-features-icon'></div>
            <div>Персонал</div>
          </div>
          <div className="third-first our-features-item">
            <div className='our-features-icon'></div>
            <div>Эксклюзивные блюда</div>
          </div>
          <div className="third-second our-features-item">
            <div className='our-features-icon'></div>
            <div>Бесшовный Wi-Fi</div>
          </div>
          <div className="third-third our-features-item">
            <div className='our-features-icon'></div>
            <div>Комплекс услуг в одном месте</div>
          </div>
        </section>

      </section>
  );
};

export default OurFeatures;