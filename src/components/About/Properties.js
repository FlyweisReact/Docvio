/** @format */

import React from "react";
import styles from "../../css/modules/about.module.css";
import { constants } from "../../constant/data";

const Properties = () => {
  return (
    <div className={styles.properties}>
      {constants.hospitalProperties.map((item, index) => (
        <div className={styles.item} key={`hospitalProperties${index}`}>
          <div className={styles.img_container}>
            <img src={item.img} alt="" className={styles.thumbnail} />
          </div>
          <p className={styles.title}> {item.title} </p>
        </div>
      ))}
    </div>
  );
};

export default Properties;
