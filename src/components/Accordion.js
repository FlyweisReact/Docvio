/** @format */

import React, { useState } from "react";
import styles from "../css/modules/faq.module.css";
import { motion } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";

const Accordion = ({ data }) => {
  const [id, setId] = useState(null);

  const selectHandler = (itemId) => {
    if (id === itemId) {
      setId(null);
    } else {
      setId(itemId);
    }
  };

  return data.map((item, index) => (
    <div
      className={styles.custom_accordion}
      key={`faq-accordion-index${index}`}
      id="faq"
    >
      <div className={styles.container}>
        <div
          className={styles.accordion_head}
          onClick={() => selectHandler(item.id)}
        >
          <h5> {item.title} </h5>
          <IoIosArrowDown
            className={id === item.id ? styles.rotate_arrow : ""}
          />
        </div>

        <motion.div
          className={`${styles.accordion_body} ${
            id === item.id ? "open" : "closed"
          } `}
          initial={{
            opacity: 0,
            height: 0,
            display: "none",
          }}
          animate={{
            opacity: id === item.id ? 1 : 0,
            height: id === item.id ? "auto" : 0,
            display: id === item.id ? "block" : "none",
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          exit={{
            opacity: 0,
            height: 0,
            display: "none",
          }}
        >
          <p>{item.description}</p>
        </motion.div>
      </div>
    </div>
  ));
};

export default Accordion;
