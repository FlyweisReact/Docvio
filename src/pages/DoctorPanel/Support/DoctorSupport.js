/** @format */

import React, { useState } from "react";
import styles from "../../../css/modules/Doctor/support.module.css";
import {
  active_call,
  active_chat,
  attachment_icon,
  call_icon,
  callGif,
  chat_icon,
  emoji_icon,
  light_faq,
  mic_icon,
  question_icon,
} from "../../../asset";
import { constants } from "../../../constant/data";

const lists = [
  {
    icon: light_faq,
    activeIcon: question_icon,
    title: "FAQ",
  },
  {
    icon: chat_icon,
    activeIcon: active_chat,
    title: "Chat Us",
  },
  {
    icon: call_icon,
    activeIcon: active_call,
    title: "Call Us",
  },
];

const Faqs = () => {
  return (
    <div className={styles.faq_container}>
      {constants.supportFaq.map((item, index) => (
        <div className={styles.item} key={index}>
          <h2 className={styles.heading}> {item.heading} </h2>
          <p className={styles.description}>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

const Chat = () => {
  return (
    <div className={styles.chat_us}>
      <div className={styles.flex_item}>
        <div className={`${styles.item} ${styles.sender}`}>
          Lorem Ipsum is simply dummy text
        </div>
        <div className={`${styles.item} ${styles.sender}`}>
          Lorem Ipsum is simply dummy text
        </div>
        <div className={`${styles.item} ${styles.reciver} `}>
          Lorem Ipsum is simply dummy text
        </div>
        <div className={`${styles.item} ${styles.reciver} `}>
          Lorem Ipsum is simply dummy text
        </div>
        <div className={`${styles.item} ${styles.reciver} `}>
          Lorem Ipsum is simply dummy text
        </div>
        <div className={`${styles.item} ${styles.sender}`}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </div>
        <div className={`${styles.item} ${styles.reciver}`}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </div>
        <div className={`${styles.item} ${styles.sender}`}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </div>
        <div className={`${styles.item} ${styles.reciver}`}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </div>
        <div className={`${styles.item} ${styles.sender}`}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </div>
        <div className={`${styles.item} ${styles.reciver}`}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </div>
      </div>

      <div className={styles.message_container}>
        <div className={styles.input_box}>
          <input type="text" placeholder="Type your massage..." />
          <div className={styles.icons}>
            <div className={styles.attachment_container}>
              <img src={attachment_icon} alt="" />
            </div>

            <div className={styles.attachment_container}>
              <img src={emoji_icon} alt="" />
            </div>

            <img src={mic_icon} alt="" />
          </div>
        </div>
        <button className={styles.send_btn}>Send</button>
      </div>
    </div>
  );
};

const CallUs = () => {
  return (
    <div className={styles.call_us_container}>
      <div className={styles.call_us}>
        <img src={callGif} alt="" />
        <p className={styles.title}>Start a Call Now</p>
      </div>
    </div>
  );
};

const DoctorSupport = () => {
  const [type, setType] = useState("FAQ");
  return (
    <section className={styles.page_container}>
      <div className={styles.filters_btn}>
        {lists.map((item, index) => (
          <button
            onClick={() => setType(item.title)}
            className={item.title === type ? styles.active : ""}
            key={`button${index}`}
          >
            <img
              src={item.title === type ? item.activeIcon : item.icon}
              alt=""
            />
            <span> {item.title} </span>
          </button>
        ))}
      </div>

      {type === "FAQ" && <Faqs />}
      {type === "Chat Us" && <Chat />}
      {type === "Call Us" && <CallUs />}
    </section>
  );
};

export default DoctorSupport;
