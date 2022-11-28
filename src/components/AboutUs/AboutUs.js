/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Container from "../anyPage/Container/Container";
import styles from "./AboutUs.module.css";

const AboutUs = () => {
  return (
    <section className={styles.Back}>
      <Container maxWidth={1567}>
        <div className={styles.AboutUs}>
          <h1 className={styles.Title}>О КОМПАНИИ</h1>
          <p className={styles.Text}>
            Многие думают, что Lorem Ipsum - взятый с потолка псевдо-латинский
            набор слов, но это не совсем так. Его корни уходят в один фрагмент
            классической латыни 45 года н.э., то есть более двух тысячелетий
            назад. Ричард МакКлинток, профессор латыни из колледжа
            Hampden-Sydney, штат Вирджиния, взял одно из самых странных слов в
            Lorem Ipsum, "consectetur", и занялся его поисками в классической
            латинской
          </p>
        </div>
      </Container>
    </section>
  );
};

export default React.memo(AboutUs);
