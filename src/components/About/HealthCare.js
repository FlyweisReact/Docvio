/** @format */

import React from "react";
import styles from "../../css/modules/about.module.css";

const HealthCare = () => {
  return (
    <div className={styles.health_care_container}>
      <div className={styles.health_care_content}>
        <h2 className={styles.headline}>Quality Healthcare for all</h2>
        <p className={styles.sub_headline}>
          The Hon’ble Prime Minster of India, laid down a vision for the country
          to tackle the biggest challenge that modern day India faces, Quality
          Healthcare for all.Ayushman Bharat was a revolutionary step in
          ensuring the availability of healthcare toall, and Docvoi Institute of
          Medical Sciences is a proud believerand follower of that vision.
          Docvoi currently caters to a huge geographical area starting from
          Yamunotri at the China Border to Dehradun, being the only major
          tertiary care centre for the entire population in this stretch. We
          have been accumulating the largest number of patients under Ayushman
          Bharat amongst the private entities in the state by providing them
          statthe art healthcare services.
        </p>
        <h2 className={styles.headline}>Our Values</h2>
        <div className={styles.key_points_container}>
          <p className={styles.key_points}>
            <span>Efficiency: </span>
            Patient service lies at the heart of our work. We strive to ensure
            that our medical knowledge and resources are optimally utilized to
            serve our patients in the most efficient manner.
          </p>
          <p className={styles.key_points}>
            <span>Excellence: </span>
            This is the ultimate aim of all our efforts. We endeavor to ensure
            that all aspects of our systems reflect this value and our services
            surpass your expectations.
          </p>
          <p className={styles.key_points}>
            <span>Trust: </span>
            Your health and safety is our topmost priority. We trust our
            exceptional caregivers to take care of you and your loved ones and
            their ability to provide them the highest standards of medical care
          </p>
          <p className={styles.key_points}>
            <span>Compassion: </span>
            People who come to us can expect staff members who will treat you
            with respect, dignity and compassion and will walk an extra mile to
            ensure that you receive the care you deserve.
          </p>
          <p className={styles.key_points}>
            <span>Consistency: </span>
            We take great measures to make sure that highest level of patient
            care and satisfaction is met at every stage, every time. We believe
            that only through consistency, we can retain our patient’s trust and
            fulfill our goals.
          </p>
          <p className={styles.key_points}>
            <span>Accountability: </span>
            Ethics and accountability are integral part of our culture. We take
            pride in our accomplishments and take full responsibility for our
            shortcomings so that we can serve you better.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HealthCare;
