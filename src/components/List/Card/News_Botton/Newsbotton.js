import React from "react";
import style from "../News_Botton/Newsbotton.module.css";

const Newsbotton = () => {
  return (
    <div>
      <div className={style.Block}>
        <p>Что занимает больше всего места в памяти смартфона</p>
      </div>
      <div className={style.BlockTime}>
        <p>08:36</p>
      </div>
    </div>
  );
};

export default React.memo(Newsbotton);
