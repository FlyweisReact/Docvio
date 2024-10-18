/** @format */

import React from "react";
import styles from "../../css/modules/home.module.css";
import { constants } from "../../constant/data";

const OurTeam = () => {
  return (
    <div className={styles.our_team}>
      <h2 className={styles.heading}>Our Team</h2>
      <p className={styles.description}>
        “ If you have any health worries or questions, start by reaching out to
        one of our friendly and knowledgeable health professionals. ”
      </p>
      <div className={styles.cards}>
        {constants.ourTeam.map((item, index) => (
          <div className={styles.item} key={`team${index}`}>
            <div className={styles.thumbnail_container}>
              <img src={item.img} alt="" className={styles.thumbnail} />
            </div>
            <div className={styles.content}>
              <p className={styles.title}> {item.name} </p>
              <p
                className={styles.designation}
                dangerouslySetInnerHTML={{ __html: item.designation }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
