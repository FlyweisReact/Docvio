/** @format */

import React from "react";
import styles from "../../../css/modules/Doctor/earning.module.css";
import { avatar } from "../../../asset";

const DoctorEarning = () => {
  return (
    <section className={styles.page_container}>
      <div className={styles.header}>
        <div className={styles.btns}>
          <button className={styles.active}>Daily</button>
          <button>Weekly</button>
          <button>Monthly</button>
        </div>

        <h4 className={styles.earning}>
          Total Earning: <span className={styles.income}>$4500</span>
        </h4>
      </div>

      <div className={styles.cards}>
        <div className={styles.item}>
          <img src={avatar} alt="" />
          <div className={styles.content}>
            <div className={styles.title_container}>
                <p className={styles.title}>Maren Lubin</p>
                <p className={styles.income}>$99</p>
            </div>

            <p className={styles.description}>ID: 125</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorEarning;
