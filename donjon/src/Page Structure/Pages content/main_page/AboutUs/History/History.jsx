import React from "react";
import classes from "./History.module.css"

const History = () => {
  return (
      <div className={classes.wrapper}>
        <div className={classes.container}>
          <div className={classes.h1}>О нас</div>
          <div className={classes.grid_container}>
            <div className={classes.grid_item + ' ' + classes.text1}>
              "Донжон" – это комплекс,<br/> выполненный в неповторимом<br/>
              средневековом стиле времён<br/> европейского средневековья,<br/>
              когда каждый феодал заботился о<br/> комфорте и надёжности
              для себя<br/> и своей семьи.
            </div>
            <div className={classes.grid_item + ' ' + classes.castle}></div>
            <div className={classes.grid_item + ' ' + classes.arrow1}></div>
            <div className={classes.grid_item + ' ' + classes.arrow2}></div>
            <div className={classes.grid_item + ' ' + classes.text2}>
              Ну а самое защищённое место в<br/> замке – башня, называлась<br/>
              «донжон», и именно там и жил<br/> феодал со своими близкими,
              так<br/> как понимал, что укромнее места<br/> во всём замке не сыщешь.
            </div>
            <div className={classes.grid_item + ' ' + classes.man_and_castle}></div>
            <div className={classes.grid_item + ' ' + classes.text3}>
              Именно поэтому, вдохновившись<br/> духом средневековья, мы решили<br/>
              открыть замечательное место,<br/> которое будет нести ценности и<br/>
              идеалы того времени,<br/> совмещенные с инновациями и<br/> комфортом
              нашего времени.
            </div>
            <div className={classes.grid_item + ' ' + classes.knight_on_the_horse}></div>
            <div className={classes.grid_item + ' ' + classes.arrow3}></div>
            <div className={classes.grid_item}>10</div>
            <div className={classes.grid_item + ' ' + classes.text4}>
              Под одной крышей мы собрали<br/> всё, чтобы ваш отдых
              состоялся<br/> как душой, так и телом.
            </div>
            <div className={classes.grid_item + ' ' + classes.middle_age_party}></div>

          </div>
        </div>
      </div>
      // <section className={classes.our_history}>
      //   <div className={classes.history_column}>
      //     <div className={classes.history_row}>
      //       <text>"Донжон" – это комплекс, выполненный в неповторимом
      //         средневековом стиле времён европейского средневековья,
      //         когда каждый феодал заботился о комфорте и надёжности
      //         для себя и своей семьи.
      //       </text>
      //     </div>
      //     <div className={classes.history_row}>2</div>
      //   </div>
      //   <div className={classes.history_column}>
      //     <div className={classes.history_row}>3</div>
      //     <div className={classes.history_row}>
      //       <text>Ну а самое защищённое место в замке – башня, называлась
      //         «донжон», и именно там и жил феодал со своими близкими,
      //         так как понимал, что укромнее места во всём замке не сыщешь.
      //       </text>
      //     </div>
      //   </div>
      //   <div className={classes.history_column}>
      //     <div className={classes.history_row}>
      //       <text>Именно поэтому, вдохновившись духом средневековья, мы решили
      //         открыть замечательное место, которое будет нести ценности и
      //         идеалы того времени, совмещенные с инновациями и комфортом
      //         нашего времени.
      //       </text>
      //     </div>
      //     <div className={classes.history_row}>6</div>
      //   </div>
      //   <div className={classes.history_column}>
      //     <div className={classes.history_row}>7</div>
      //     <div className={classes.history_row}>
      //       <text>Под одной крышей мы собрали всё, чтобы ваш отдых
      //         состоялся как душой, так и телом.
      //       </text>
      //     </div>
      //   </div>
      // </section>
  );
};

export default History;