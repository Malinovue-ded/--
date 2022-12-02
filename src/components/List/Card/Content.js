import React from "react";
import styles from "../Card/Card.module.css";
import NewsCard from "./NewsCard/NewsCard";
import Newsbotton from "./News_Botton/Newsbotton";
import Topnews from "./Top_new/Top_news";

const Card = () => {
  return (
    <div className={styles.Wrapper}>
      <Topnews />
      <div className={styles.Textnew}>
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </div>
      <div className={styles.Ads}></div>
      <div className={styles.bottonNews}>
        <Newsbotton />
        <Newsbotton />
        <Newsbotton />
        <Newsbotton />
        <Newsbotton />
        <Newsbotton />
        <Newsbotton />
        <Newsbotton />
        <Newsbotton />
        <Newsbotton />
        <Newsbotton />
        <Newsbotton />
        <Newsbotton />
        <Newsbotton />
        <Newsbotton />
        <Newsbotton />
        <Newsbotton />
        <Newsbotton />
        <Newsbotton />
        <Newsbotton />
        <Newsbotton />
        <Newsbotton />
        <Newsbotton />
        <Newsbotton />
        <Newsbotton />
        <Newsbotton />
        <Newsbotton />
        <Newsbotton />
        <Newsbotton />
        <Newsbotton />
        <Newsbotton />
        <Newsbotton />
        <Newsbotton />
        <Newsbotton />
        <Newsbotton />
        <Newsbotton />
        <Newsbotton />
        <Newsbotton />
        <Newsbotton />
        <Newsbotton />
        <Newsbotton />
        <Newsbotton />
        <Newsbotton />
        <Newsbotton />
      </div>
    </div>
  );
};

export default React.memo(Card);
