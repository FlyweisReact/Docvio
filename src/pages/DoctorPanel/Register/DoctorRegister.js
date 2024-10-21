/** @format */

import React from "react";
import styles from "../../../css/modules/Doctor/login.module.css";
import {
  coloredLogo,
  doctor_login_img,
  flag_icon,
  mail_icon,
  mobile_icon,
  password_icon,
  user_icon,
} from "../../../asset";
import { Link } from "react-router-dom";

const DoctorRegister = () => {
  return (
    <section className={styles.doctor_login_page}>
      <div className={styles.left_section}>
        <img src={doctor_login_img} alt="" className={styles.thumbnail} />
      </div>
      <div className={styles.right_section}>
        <img src={coloredLogo} alt="" className={styles.logo} />
        <form className={styles.form_section}>
          <div className={styles.double_input}>
            <div className={styles.input_div}>
              <img src={user_icon} alt="" className={styles.icon} />
              <input type="text" placeholder="First Name" />
            </div>
            <div className={styles.input_div}>
              <img src={user_icon} alt="" className={styles.icon} />
              <input type="text" placeholder="Last Name" />
            </div>
          </div>
          <div className={styles.double_input}>
            <div className={`${styles.country_input} ${styles.input_div}`}>
              <img src={flag_icon} alt="" className={styles.icon} />
              <input type="text" placeholder="+91" />
            </div>
            <div className={`${styles.mobile_input} ${styles.input_div}`}>
              <img src={mobile_icon} alt="" className={styles.icon} />
              <input type="text" placeholder="Enter Mobile Number" />
            </div>
          </div>
          <div className={styles.input_div}>
            <img src={mail_icon} alt="" className={styles.icon} />
            <input type="text" placeholder="Email Id" />
          </div>
          <div className={styles.input_div}>
            <img src={password_icon} alt="" className={styles.icon} />
            <input type="text" placeholder="Password" />
          </div>
          <div className={styles.input_div}>
            <img src={password_icon} alt="" className={styles.icon} />
            <input type="text" placeholder="Confirm Password" />
          </div>

          <button className={styles.sign_in_btn}>Sign Up</button>

          <p className={styles.or}>OR</p>

          <Link className={styles.already_account} to={"/doctor/login"}>
            Already Have an Account
          </Link>
        </form>
      </div>
    </section>
  );
};

export default DoctorRegister;
