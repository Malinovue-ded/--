/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import styles from "./Header.module.css";
import logo from "./logo1.png";
import lupa from "./lupa.png";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>ЧЕ новости</h1>
      <div className={styles.txt}>Войти</div>
      <img src={logo} className={styles.img} />
      <img src={lupa} className={styles.img1} />
      <div className={styles.search}></div>
    </header>
  );
};

export default Header;
