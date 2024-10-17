/** @format */

import React from "react";
import Banner from "../../components/Home/Banner";
import styles from "../../css/modules/home.module.css";
import Consultation from "../../components/Home/Consultation";
import Empower from "../../components/Home/Empower";
import { waveImg } from "../../asset";

const Index = () => {
  return (
    <section className="home-page-container">
      <Banner />
      <Consultation />
      <Empower />

      {/* <div className={styles.specialist}>
        <img src={waveImg} alt="" className={styles.above_wave} />
        <div className={styles.content}></div>
      </div> */}
    </section>
  );
};

export default Index;
