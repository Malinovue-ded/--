import React from "react";
import styles from "./Footer.module.css";
import vk from "./Footer.img/vk.png";
import tg from "./Footer.img/tg.png";
import Youtube from "./Footer.img/yut.png";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.txt}>Связаться с нами</div>
      <div className={styles.txt1}>О нас</div>
      <img src={vk} alt="VK" className={styles.img} />
      <img src={tg} alt="Telegram" className={styles.img1} />
      <img src={Youtube} alr="Youtube" className={styles.img2} />
    </footer>
  );
};

export default Footer;
