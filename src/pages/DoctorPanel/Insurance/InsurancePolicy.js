/** @format */

import React, { useState } from "react";
import styles from "../../../css/modules/Doctor/policy.module.css";

const PendingInsurance = ({ title, status }) => {
  return (
    <div className={styles.appointment_box}>
      <div className={styles.header}>
        <p className={styles.title}> {title} </p>
        <div
          className={`${styles.inactive} ${
            status === "recieved" ? styles.recieved : ""
          } `}
        ></div>
      </div>

      <div className={styles.blank} />

      <div className={styles.content}>
        <div className={styles.input_container}>
          <p className={styles.title}>Appointment ID</p>
          <p className={`${styles.title} ${styles.faded}`}>135</p>
        </div>
        <div className={styles.input_container}>
          <p className={styles.title}>Gender</p>
          <p className={`${styles.title} ${styles.faded}`}>Male</p>
        </div>
        <div className={styles.input_container}>
          <p className={styles.title}>Age</p>
          <p className={`${styles.title} ${styles.faded}`}>26</p>
        </div>
        <div className={styles.input_container}>
          <p className={styles.title}>Mobile Number</p>
          <p className={`${styles.title} ${styles.faded}`}>1245789630</p>
        </div>
        <div className={styles.input_container}>
          <p className={styles.title}>Appointment Date</p>
          <p className={`${styles.title} ${styles.faded}`}>4-7-2024</p>
        </div>
        <div className={styles.input_container}>
          <p className={styles.title}>Appointment Time</p>
          <p className={`${styles.title} ${styles.faded}`}>11:20</p>
        </div>
        <div className={styles.input_container}>
          <p className={styles.title}>Appointment Type</p>
          <p className={`${styles.title} ${styles.faded}`}>General Visit</p>
        </div>
        <div className={styles.input_container}>
          <p className={styles.title}>Appointment Status</p>
          <p className={`${styles.title} ${styles.faded}`}>Visited</p>
        </div>
        <div className={styles.input_container}>
          <p className={styles.title}>Total Amount</p>
          <p className={`${styles.title} ${styles.faded}`}>$85</p>
        </div>
        <div className={styles.input_container}>
          <p className={styles.title}>Insurance Policy</p>
          <p className={`${styles.title} ${styles.faded}`}>$70</p>
        </div>
        <div className={styles.input_container}>
          <p className={styles.title}>Insurance Provider</p>
          <p className={`${styles.title} ${styles.faded}`}>Lorem ipsum</p>
        </div>
      </div>
      <div className={styles.blank} />
      <div className={styles.content}>
        <div className={styles.input_container}>
          <p className={styles.title}>Pending Payment</p>
          <p className={styles.title}>$29</p>
        </div>
      </div>
    </div>
  );
};

const InsurancePolicy = () => {
  const [type, setType] = useState("Pending");
  return (
    <section className={styles.page_container}>
      <div className={styles.filter_btn}>
        <button
          className={type === "Pending" ? styles.active : ""}
          onClick={() => setType("Pending")}
        >
          Pending
        </button>
        <button
          className={type === "Recieved" ? styles.active : ""}
          onClick={() => setType("Recieved")}
        >
          Recieved
        </button>
      </div>

      {type === "Pending" && (
        <div className={styles.flex_container}>
          <PendingInsurance title={"Carla Lubin"} status={"pending"} />
          <PendingInsurance title={"Divya Tiwari"} status={"pending"} />
          <PendingInsurance title={"Carla Lubin"} status={"pending"} />
          <PendingInsurance title={"Divya Tiwari"} status={"pending"} />
        </div>
      )}
      {type === "Recieved" && (
        <div className={styles.flex_container}>
          <PendingInsurance title={"Carla Lubin"} status={"recieved"} />
          <PendingInsurance title={"Divya Tiwari"} status={"recieved"} />
          <PendingInsurance title={"Carla Lubin"} status={"recieved"} />
          <PendingInsurance title={"Divya Tiwari"} status={"recieved"} />
        </div>
      )}
    </section>
  );
};

export default InsurancePolicy;
