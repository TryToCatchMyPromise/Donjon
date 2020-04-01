import React from "react";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
      <section className={classes.contacts_block}>
        <section className={classes.phones_and_emails}>
          <div className={classes.section_name}>
            <span>Контакты</span>
          </div>
          <div className={classes.phones_and_emails_container}>
            <div className={classes.phones}>
              <div className={classes.phones_item}>+7(4842)22-49-96</div>
              <div className={classes.phones_item}>+7(4842)56-57-56</div>
              <div className={classes.phones_item}>+7(4842)56-57-56</div>
            </div>
            <div className={classes.emails}>
              <div className={classes.emails_item}>restaurant@donjon-kaluga.ru</div>
              <div className={classes.emails_item}>hotel@donjon-kaluga.ru</div>
              <div className={classes.emails_item}>office@donjon-kaluga.ru</div>
              <div className={classes.emails_item}>service@donjon-kaluga.ru</div>
              <div className={classes.emails_item}>marketing@donjon-kaluga.ru</div>
            </div>
          </div>
        </section>
        <section className={classes.map}>
          <div className={classes.map_container}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1157.7991334064989!2d36.
        23992447095961!3d54.52294599842155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!
        1s0x4134ba2f856547e7%3A0x48f629b1801e7241!2z0JPQvtGB0YLQuNC90LjRhtCwICLQlNC-0L3QttC-0L0i!5e0!3m2!
        1sru!2sru!4v1577049217130!5m2!1sru!2sru"
                    allowFullScreen="allowfullscreen"></iframe>
          </div>
          <div className={classes.map_info}></div>
        </section>
      </section>
  );
};

export default Footer;