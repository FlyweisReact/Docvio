/** @format */

import React from "react";
import styles from "../../../css/modules/Doctor/appointments.module.css";
import { edit_icon, star_icon } from "../../../asset/index";

const AppointmentBox = () => {
  return (
    <div className={styles.appointment_box}>
      <div className={styles.header}>
        <p className={styles.title}>Riyadh Khan</p>
        <img src={edit_icon} alt="" className={styles.edit_icon} />
      </div>

      <div className={styles.blank} />

      <div className={styles.content}>
        <div className={styles.input_container}>
          <p className={styles.title}>Appointment ID:</p>
          <p className={styles.title}>135</p>
        </div>
        <div className={styles.input_container}>
          <p className={styles.title}>Gender:</p>
          <p className={styles.title}>Male</p>
        </div>
        <div className={styles.input_container}>
          <p className={styles.title}>Age:</p>
          <p className={styles.title}>26</p>
        </div>
        <div className={styles.input_container}>
          <p className={styles.title}>Mobile Number:</p>
          <p className={styles.title}>1245789630</p>
        </div>
        <div className={styles.input_container}>
          <p className={styles.title}>Appointment Date:</p>
          <p className={styles.title}>4-7-2024</p>
        </div>
        <div className={styles.input_container}>
          <p className={styles.title}>Appointment Time:</p>
          <p className={styles.title}>11:20</p>
        </div>
        <div className={styles.input_container}>
          <p className={styles.title}>Appointment Type:</p>
          <p className={styles.title}>General Visit</p>
        </div>
        <div className={styles.input_container}>
          <p className={styles.title}>Appointment Status:</p>
          <p className={styles.title}>Visited</p>
        </div>
      </div>
    </div>
  );
};

const DoctorAppointments = () => {
  return (
    <section className={styles.page_container}>
      <div className={styles.filter_container}>
        <button>
          <img src={star_icon} alt="" />
          Search by Name
        </button>
        <button>Search by ID</button>
      </div>

      <div className={styles.flex_container}>
        <AppointmentBox />
        <AppointmentBox />
        <AppointmentBox />
        <AppointmentBox />
        <AppointmentBox />
        <AppointmentBox />
        <AppointmentBox />
        <AppointmentBox />
      </div>
    </section>
  );
};

export default DoctorAppointments;
