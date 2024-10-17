/** @format */

import React from "react";
import styles from "../../css/modules/home.module.css";
import { consult_1, consult_2, consult_3 } from "../../asset";

const Consultation = () => {
  return (
    <div className={styles.book_consultation}>
      <h4 className={styles.headline}>Book a Consultation with DocVio</h4>

      <div className={styles.cards}>
        <div className={styles.item}>
          <img src={consult_1} alt="" />
          <p className={styles.title}>
            1. Download the <br /> DocVio App
          </p>
        </div>
        <div className={styles.item}>
          <img src={consult_2} alt="" />
          <p className={styles.title}>
            2. Book your <br /> Appointment
          </p>
        </div>
        <div className={styles.item}>
          <img src={consult_3} alt="" />
          <p className={styles.title}>
            3. Get medical consult, <br /> advice & prescriptions
          </p>
        </div>
      </div>
    </div>
  );
};

export default Consultation;
