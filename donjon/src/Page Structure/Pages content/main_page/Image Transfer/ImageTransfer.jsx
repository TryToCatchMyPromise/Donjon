import React from "react";
import classes from "./ImageTransfer.module.css";

console.log(classes);

const ImageTransfer = () => {
  return (
      <div className={classes.image_flex_container}>

        <div className={classes.image_items + ' ' + classes.secondImage}>
          <div className={classes.overlay}></div>
          <div className={classes.data_container}>
            <div className={classes.name}>Гостиница</div>
            <div className={classes.monogram}></div>
            <div className={classes.text}>Очень длинный текст про гостиницу и то,<br/> как там круто жить</div>
            <div className={classes.phone}>+7 (4842) 56-57-56</div>
            <div className={classes.new_btn}>Подробнее</div>
          </div>
        </div>

        <div className={classes.image_items + ' ' + classes.firstImage}>
          <div className={classes.overlay}></div>
          <div className={classes.data_container}>
            <div className={classes.name}>Ресторан</div>
            <div className={classes.monogram}></div>
            <div className={classes.text}>Очень длинный текст про ресторан и то,<br/> как там круто есть, пить, танцевать.<br/> Всем советуем!</div>
            <div className={classes.phone}>+7 (4842) 22-49-96</div>
            <div className={classes.new_btn}>Подробнее</div>
          </div>

        </div>
        <div className={classes.image_items + ' ' + classes.thirdImage}>
          <div className={classes.overlay}></div>
          <div className={classes.data_container}>
            <div className={classes.name}>Услуги</div>
            <div className={classes.monogram}></div>
            <div className={classes.text}>Очень длинный текст про услуги и то, как<br/> там круто отдыхать</div>
            <div className={classes.phone}>+7 (4842) 56-57-56</div>
            <div className={classes.new_btn}>Подробнее</div>
          </div>

        </div>
      </div>
  );
};

export default ImageTransfer;