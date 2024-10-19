/** @format */

import React from "react";
import styles from "../../css/modules/faq.module.css";

const FaqIntro = ({ heading, description }) => {
  return (
    <div className={styles.faq_container}>
      {heading && <h1 className={styles.heading}> {heading} </h1>}
      {description && (
        <p
          className={styles.description}
          dangerouslySetInnerHTML={{ __html: description }}
        />
      )}
    </div>
  );
};

export default FaqIntro;
