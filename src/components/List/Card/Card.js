import React from "react";
import styles from "./Card.module.css";
import product from "../product.png";

const Card = () => {
  return (
    <div className={styles.Wrapper}>
      <img src={product} className={styles.Module} alt="PNG" />
      <div className={styles.Module}>
        <a className={styles.Price}>30 000₽</a>
        <p className={styles.Id}>137389473</p>
        <h3 className={styles.Name}>Название запчасти Название запчасти</h3>
        <p className={styles.Desc}>
          Многие думают, что Lorem Ipsum - взятый с потолка псевдо-латинский
          набор слов, но это не совсем так. Его корни уходят в один
        </p>
      </div>
    </div>
  );
};

export default React.memo(Card);
