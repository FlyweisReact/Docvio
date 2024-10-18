/** @format */

import React from "react";
import styles from "../../css/modules/home.module.css";
import { constants } from "../../constant/data";

const HealthBlogs = () => {
  return (
    <div className={styles.health_blogs}>
      <h2 className={styles.headline}>Expert Health Advise For Your Life</h2>
      <p className={styles.sub_headline}>Latest news & Blogs</p>

      <div className={styles.blog_card}>
        {constants.healthBlogs.map((item) => (
          <div className={styles.item} key={item.id}>
            <div className={styles.img_container}>
              <img src={item.img} alt="" className={styles.thumbnail} />
            </div>
            <div className={styles.content}>
              <p className={styles.date}> {item.date} </p>
              <p className={styles.title}>{item.title}</p>
              <a className={styles.read_more} href="/">
                Read more
              </a>
            </div>
          </div>
        ))}
      </div>

      <button className={styles.read_more_btn}>Read more</button>

      <div className={styles.blank_div}></div>
    </div>
  );
};

export default HealthBlogs;
