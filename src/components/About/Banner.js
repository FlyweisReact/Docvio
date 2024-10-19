/** @format */

import React from "react";
import styles from "../../css/modules/about.module.css";
import { go_down_img } from "../../asset";
import { HashLink } from "react-router-hash-link";

const Banner = ({ heading, subHeading, description, hashLink }) => {
  return (
    <div className={styles.banner}>
      <div className={styles.content}>
        {heading && (
          <h1
            className={styles.heading}
            dangerouslySetInnerHTML={{ __html: heading }}
          />
        )}
        {subHeading && <h4 className={styles.sub_heading}>{subHeading}</h4>}
        {description && <p className={styles.description}>{description}</p>}
        {hashLink ? (
          <HashLink to={hashLink}>
            <img src={go_down_img} alt="" className={styles.go_down} />
          </HashLink>
        ) : (
          <img src={go_down_img} alt="" className={styles.go_down} />
        )}
      </div>

      <div className={styles.blank}></div>
    </div>
  );
};

export default Banner;
