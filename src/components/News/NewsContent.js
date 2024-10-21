/** @format */

import React from "react";
import styles from "../../css/modules/news.module.css";

const NewsContent = ({ data }) => {
  return (
    <div className={styles.news_content} id="news">
      {data.map((item, index) => (
        <div className={styles.item} key={`new_post_${index}`}>
          {item.heading && <h1 className={styles.heading}>{item.heading}</h1>}

          <div className={styles.content}>
            {item.description && (
              <p className={styles.description}>{item.description}</p>
            )}
            {item.lists?.length > 0 && (
              <ul>
                {item.lists.map((listItem, listIndex) => (
                  <li key={`list_item_${listIndex}`}>{listItem}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsContent;
