import React from "react";
import classes from "./OurHistory.module.css";

const OurHistory = () => {
  return (
      <section className={classes.our_history}>
        <div className={classes.history_column}>
          <div className={classes.history_row}>
            <text>"Донжон" – это комплекс, выполненный в неповторимом
              средневековом стиле времён европейского средневековья,
              когда каждый феодал заботился о комфорте и надёжности
              для себя и своей семьи.
            </text>
          </div>
          <div className={classes.history_row}>2</div>
        </div>
        <div className={classes.history_column}>
          <div className={classes.history_row}>3</div>
          <div className={classes.history_row}>
            <text>Ну а самое защищённое место в замке – башня, называлась
              «донжон», и именно там и жил феодал со своими близкими,
              так как понимал, что укромнее места во всём замке не сыщешь.
            </text>
          </div>
        </div>
        <div className={classes.history_column}>
          <div className={classes.history_row}>
            <text>Именно поэтому, вдохновившись духом средневековья, мы решили
              открыть замечательное место, которое будет нести ценности и
              идеалы того времени, совмещенные с инновациями и комфортом
              нашего времени.
            </text>
          </div>
          <div className={classes.history_row}>6</div>
        </div>
        <div className={classes.history_column}>
          <div className={classes.history_row}>7</div>
          <div className={classes.history_row}>
            <text>Под одной крышей мы собрали всё, чтобы ваш отдых
              состоялся как душой, так и телом.
            </text>
          </div>
        </div>
      </section>
  );
};

export default OurHistory;