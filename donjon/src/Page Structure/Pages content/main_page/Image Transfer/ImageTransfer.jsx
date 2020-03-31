import React from "react";
import classes from "./ImageTransfer.module.css";
console.log(classes);

const ImageTransfer = () => {
  return (
      <section className={classes.image_transfer}>
        <div className={classes.image_transfer_flex}>
          <div id="firstImage" className={classes.image_transfer_items + ' ' + classes.firstImage}>
            <div className={classes.image_transfer_item_name}>Ресторан</div>
          </div>
          <div id="secondImage" className={classes.image_transfer_items + ' ' + classes.secondImage}>
            <div className={classes.image_transfer_item_name}>Гостиница</div>
          </div>
          <div id="thirdImage" className={classes.image_transfer_items}>
            <div className={classes.image_transfer_item_name}>Услуги</div>
          </div>
        </div>
      </section>
  );
};

export default ImageTransfer;