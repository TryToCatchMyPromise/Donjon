import React from "react";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
      <section className="contacts-block">
        <section className="phones-and-emails">
          <div className="section-name">
            <span>Контакты</span>
          </div>
          <div className='phones-and-emails-container'>
            <div className='phones'>
              <div className='phones-item'>+7(4842)22-49-96</div>
              <div className='phones-item'>+7(4842)56-57-56</div>
              <div className='phones-item'>+7(4842)56-57-56</div>
            </div>
            <div className='emails'>
              <div className='emails-item'>restaurant@donjon-kaluga.ru</div>
              <div className='emails-item'>hotel@donjon-kaluga.ru</div>
              <div className='emails-item'>office@donjon-kaluga.ru</div>
              <div className='emails-item'>service@donjon-kaluga.ru</div>
              <div className='emails-item'>marketing@donjon-kaluga.ru</div>
            </div>
          </div>
        </section>
        <section className="map">
          <div className="map-container">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1157.7991334064989!2d36.
        23992447095961!3d54.52294599842155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!
        1s0x4134ba2f856547e7%3A0x48f629b1801e7241!2z0JPQvtGB0YLQuNC90LjRhtCwICLQlNC-0L3QttC-0L0i!5e0!3m2!
        1sru!2sru!4v1577049217130!5m2!1sru!2sru"
                    allowFullScreen="allowfullscreen"></iframe>
          </div>
          <div className="map-info"></div>
        </section>
      </section>
  );
};

export default Footer;