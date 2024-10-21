/** @format */

import React from "react";
import styles from "../../css/modules/privacy.module.css";

const PrivacyContent = ({ data = [] }) => {
  return (
    <div className={styles.privacy_container} id="privacy">
      {data.map((item, index) => (
        <div className={styles.Item} key={`privacy${index}`}>
          {item.heading && (
            <h4 className={styles.headline}> {item.heading} </h4>
          )}

          <div className={styles.content}>
            {item.subHeading && (
              <p className={styles.sub_heading}>{item.subHeading}</p>
            )}
            {item.lists?.length > 0 && (
              <ul>
                {item.lists.map((list, index) => (
                  <li key={`list${index}`}> {list} </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PrivacyContent;
