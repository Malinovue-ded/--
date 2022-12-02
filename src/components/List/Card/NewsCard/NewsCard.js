import React from "react";
import styles from "../NewsCard/Newcard.module.css";

const NewsCard = () => {
  return (
    <>
      <div>
        <div className={styles.Block}>
          <p>Что занимает больше всего места в памяти смартфона</p>
        </div>
        <div className={styles.BlockTime}>
          <p>08:36</p>
        </div>
      </div>
    </>
  );
};

export default React.memo(NewsCard);
