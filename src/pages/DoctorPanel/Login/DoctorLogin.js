/** @format */

import React from "react";
import styles from "../../../css/modules/Doctor/login.module.css";
import {
  coloredLogo,
  doctor_login_img,
  mail_icon,
  password_icon,
} from "../../../asset";
import { Link } from "react-router-dom";

const DoctorLogin = () => {
  return (
    <section className={styles.doctor_login_page}>
      <div className={styles.left_section}>
        <img src={doctor_login_img} alt="" className={styles.thumbnail} />
      </div>
      <div className={styles.right_section}>
        <img src={coloredLogo} alt="" className={styles.logo} />
        <form className={styles.form_section}>
          <div className={styles.input_div}>
            <img src={mail_icon} alt="" className={styles.icon} />
            <input type="text" placeholder="Email Id" />
          </div>
          <div className={styles.input_div}>
            <img src={password_icon} alt="" className={styles.icon} />
            <input type="text" placeholder="Password" />
          </div>

          <Link to="/" className={styles.forget_password}>
            Forget Password?
          </Link>

          <button className={styles.sign_in_btn}>Sign In</button>

          <p className={styles.or}>OR</p>

          <Link className={styles.already_account} to={"/doctor/register"}>
            REGISTER NOW
          </Link>
        </form>
      </div>
    </section>
  );
};

export default DoctorLogin;
