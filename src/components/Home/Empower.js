/** @format */

import React from "react";
import styles from "../../css/modules/home.module.css";
import { empowerImg } from "../../asset";

const Empower = () => {
  return (
    <div className={styles.empower_health}>
      <div className={styles.container}>
        <img src={empowerImg} alt="" className={styles.thumbnail} />
        <div className={styles.content}>
          <h1 className={styles.headline}>Empowering Your Health</h1>
          <p className={styles.description}>
            At our medical clinic, we believe in providing exceptional,
            personalized healthcare that empowers our patients to take an active
            role in their own well-being
          </p>
        </div>
      </div>
    </div>
  );
};

export default Empower;
