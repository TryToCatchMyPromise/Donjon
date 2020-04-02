import React from "react";
import classes from "./ImageTransfer.module.css";
console.log(classes);

const ImageTransfer = () => {
  return (
      <section className={classes.image_transfer}>
        <div className={classes.image_transfer_flex}>
          <div className={classes.image_transfer_items + ' ' + classes.firstImage}>
            <div className={classes.image_transfer_item_name}>Ресторан</div>
          </div>
          <div className={classes.image_transfer_items + ' ' + classes.secondImage}>
            <div className={classes.image_transfer_item_name}>Гостиница</div>
          </div>
          <div className={classes.image_transfer_items + ' ' + classes.thirdImage}>
            <div className={classes.image_transfer_item_name}>Услуги</div>
          </div>
        </div>
      </section>
  );
};

export default ImageTransfer;