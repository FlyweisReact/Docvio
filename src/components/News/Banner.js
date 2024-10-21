/** @format */

import React from "react";
import styles from "../../css/modules/news.module.css";
import { go_down_img } from "../../asset";
import { HashLink } from "react-router-hash-link";

const Banner = ({ data }) => {
  return (
    <div className={styles.news_article_banner}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h1 className={styles.heading}>{data.heading}</h1>
        {data.hashLink ? (
          <HashLink to={data.hashLink}>
            <img src={go_down_img} alt="" className={styles.go_down} />
          </HashLink>
        ) : (
          <img src={go_down_img} alt="" className={styles.go_down} />
        )}
        <p className={styles.date}>{data.date} </p>
      </div>
    </div>
  );
};

export default Banner;
