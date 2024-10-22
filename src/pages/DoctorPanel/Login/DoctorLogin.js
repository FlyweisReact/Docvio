/** @format */

import React, { useState } from "react";
import styles from "../../../css/modules/Doctor/login.module.css";
import {
  coloredLogo,
  doctor_login_img,
  mail_icon,
  password_icon,
} from "../../../asset";
import { Link, useNavigate } from "react-router-dom";

const DoctorLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/doctor/dashboard");
  };

  const isBtnActive = email && password;

  return (
    <section className={styles.doctor_login_page}>
      <div className={styles.left_section}>
        <img src={doctor_login_img} alt="" className={styles.thumbnail} />
      </div>
      <div className={styles.right_section}>
        <img src={coloredLogo} alt="" className={styles.logo} />
        <form className={styles.form_section} onSubmit={submitHandler}>
          <div className={styles.input_div}>
            <img src={mail_icon} alt="" className={styles.icon} />
            <input
              type="text"
              placeholder="Email Id"
              required
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className={styles.input_div}>
            <img src={password_icon} alt="" className={styles.icon} />
            <input
              type="text"
              placeholder="Password"
              required
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>

          <Link to="/" className={styles.forget_password}>
            Forget Password?
          </Link>

          <button
            className={`${styles.sign_in_btn} ${
              isBtnActive ? styles.active : ""
            } `}
            type={"submit"}
          >
            Sign In
          </button>

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
