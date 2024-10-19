/** @format */

import React from "react";
import styles from "../../css/modules/about.module.css";
import { founder_pic } from "../../asset";

const About = () => {
  return (
    <div className={styles.about_us} id="about-us-content">
      <div className={styles.content}>
        <h4 className={styles.headline}>From the CEO's desk</h4>
        <p className={styles.description}>
          Our sincere efforts in the field of Higher Education over the past 3
          decades have paid off in the form of a very successful Alumni Network
          and a rich culture promoting Academic Excellence at Docvoi. Docvoi
          Institute of Medical Sciences has been established with the same
          vision, carrying the same sincerity towards Medical Education,
          promising the best equipment and the best environment for budding
          doctors to flourish and deliver competent professionals capable of
          handling challenges at the Global Level. The Institution is fully
          equipped with state of the art medical infrastructure and will be
          setting benchmarks in the field of quality medical education in the
          decades to come.
        </p>

        <div className={styles.founder}>
          <p className={styles.founder_name}>Prof. Lorem ipsum</p>
          <p className={styles.position}>Founder President</p>
          <p className={styles.position}>DocVoi</p>
        </div>
      </div>
      <img src={founder_pic} alt="" className={styles.founder_pic} />
    </div>
  );
};

export default About;
