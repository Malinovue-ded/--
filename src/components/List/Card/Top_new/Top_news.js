import React from "react";
import styles from "../../Card/Card.module.css";

const Top_news = () => {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.Card}>
        <h1 className={styles.TextFoto}>
          Вышла новая модель айфона 13. Сколько будет стоить новый телефон ?
          Какая в нем характеристика ?
        </h1>
        <p className={styles.TimeFoto}>08:36 </p>
      </div>
    </div>
  );
};

export default React.memo(Top_news);
