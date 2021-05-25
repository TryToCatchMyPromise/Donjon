import React from "react";
import classes from "src/Page Structure/Pages content/main_page/AboutUs/History/History.module.css"

const History = () => {
  return (
      <div className={classes.wrapper}>
        <div className={classes.container}>
          <div className={classes.h1}>О нас</div>

          <div className={classes.grid_container}>
            <div className={classes.grid_item}>
              <div className={classes.flex_item + ' ' + classes.text1}>
                "Донжон" – это комплекс,<br/> выполненный в неповторимом<br/>
                средневековом стиле времён<br/> европейского средневековья,<br/>
                когда каждый феодал заботился о<br/> комфорте и надёжности
                для себя<br/> и своей семьи.
              </div>
              <div className={classes.flex_item}>
                <div className={classes.castle}></div>
              </div>
              <div className={classes.flex_item}>
                <div className={classes.arrow1}></div>
              </div>
            </div>
            <div  className={classes.grid_item}>
              <div className={classes.flex_item}>
                <div className={classes.arrow2}></div>
              </div>
              <div className={classes.flex_item + ' ' + classes.text2}>
                Ну а самое защищённое место в<br/> замке – башня, называлась<br/>
                «Донжон», и именно там и жил<br/> феодал со своими близкими,
                так<br/> как понимал, что укромнее места<br/> во всём замке не сыщешь.
              </div>
              <div className={classes.flex_item}>
                <div className={classes.man_and_castle}></div>
              </div>
            </div>
            <div className={classes.grid_item}>
              <div className={classes.flex_item + ' ' + classes.text3}>
                Именно поэтому, вдохновившись<br/> духом средневековья, мы решили<br/>
                открыть замечательное место,<br/> которое будет нести ценности и<br/>
                идеалы того времени,<br/> совмещенные с инновациями и<br/> комфортом
                нашего времени.
              </div>
              <div className={classes.flex_item}>
                <div className={classes.knight_on_the_horse}></div>
              </div>
              <div className={classes.flex_item}>
                <div className={classes.arrow3}></div>
              </div>
            </div>
            <div className={classes.grid_item}>
              <div className={classes.flex_item}> </div>
              <div className={classes.flex_item + ' ' + classes.text4}>
                Под одной крышей мы собрали<br/> всё, чтобы ваш отдых
                состоялся<br/> как душой, так и телом.
              </div>
              <div className={classes.flex_item}>
                <div className={classes.middle_age_party}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default History;
