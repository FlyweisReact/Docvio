/** @format */

import React from "react";
import styles from "../css/modules/footer.module.css";
import {
  coloredLogo,
  emailIcon,
  facebookIcon,
  instaIcon,
  youtubeIcon,
} from "../asset";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className={styles.footer_container}>
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.subscription_box}>
            <Link to="/">
              <img src={coloredLogo} alt="" className={styles.logo} />
            </Link>
            <p className={styles.subHeading}>
              Connecting Patients with Doctors, Seamlessly
            </p>
            <div className={styles.input_box}>
              <input type="email" placeholder="Enter Email" />
              <div className={styles.go_ahead}>
                <IoIosArrowForward color="#fff" size={20} />
              </div>
            </div>
          </div>

          <div className={styles.info_container}>
            <div className={styles.links_container}>
              <h5 className={styles.headline}>DocVio</h5>
              <Link to="/about-us">About</Link>
              <Link to="/privacy-policy">Privacy Policy</Link>
              <Link to="/terms&conditions">Terms and Conditions</Link>
              <Link to="/faq">FAQ</Link>
            </div>
            <div className={styles.links_container}>
              <h5 className={styles.headline}>Quick Links</h5>
              <a href="/">Find a Doctor</a>
              <a href="/">Book Appointment</a>
            </div>
            <div className={styles.links_container}>
              <h5 className={styles.headline}>Contact Us</h5>
              <p className={styles.subHeading}>
                121 Ambedkar St, Kanpur VIC-110085, India
              </p>
              <p className={styles.subHeading}>
                (888)-123-4587 (9am - 5pm EST, Monday - Friday)
              </p>

              <p className={styles.subHeading}>Info@example.com</p>
            </div>
          </div>
        </div>
      </footer>

      <div className={styles.copyright}>
        <div className={styles.container}>
          <p className={styles.copyright_text}>
            Copyright © 2024 | All rights reserved.
          </p>
          <div className={styles.socialIcon}>
            <img src={facebookIcon} alt="" />
            <img src={instaIcon} alt="" />
            <img src={emailIcon} alt="" />
            <img src={youtubeIcon} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
