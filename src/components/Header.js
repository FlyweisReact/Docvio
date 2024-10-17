/** @format */

import React, { useState } from "react";
import { caret_right, downCaret, logo } from "../asset";
import styles from "../css/modules/header.module.css";
import { motion } from "framer-motion";
import { FaBarsStaggered } from "react-icons/fa6";
import DefaultCanvas from "./canvas/DefaultCanvas";
import { IoClose } from "react-icons/io5";

const Header = () => {
  const [showFloting_btns, setShowFlotingBtns] = useState(false);
  const [show, setShow] = useState(false);
  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo_container}>
          <img src={logo} alt="logo" />
        </div>

        <div className={styles.barIcon} onClick={() => setShow(true)}>
          <FaBarsStaggered size={20} color="#fff" />
        </div>

        <ul className={styles.links}>
          <li>
            {" "}
            <a href="/" className={styles.activeLink}>
              Home
            </a>{" "}
          </li>
          <li>
            {" "}
            <a href="/">About</a>{" "}
          </li>
          <li>
            {" "}
            <a href="/">Faq</a>{" "}
          </li>
          <li>
            {" "}
            <a href="/">Privacy Policy</a>{" "}
          </li>
          <li>
            {" "}
            <a href="/">T&C</a>{" "}
          </li>
          <li>
            <button
              className={styles.loginBtn}
              onClick={() => setShowFlotingBtns(!showFloting_btns)}
            >
              <span>Login as</span>
              <img src={downCaret} alt="" />
            </button>
          </li>
        </ul>

        <motion.div
          className={styles.floatingBtns}
          initial={{
            opacity: 0,
            visibility: "hidden",
            display: "none",
          }}
          animate={{
            opacity: showFloting_btns ? 1 : 0,
            visibility: showFloting_btns ? "visible" : "hidden",
            display: showFloting_btns ? "flex" : "none",
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          exit={{
            opacity: 0,
            visibility: "hidden",
            display: "none",
          }}
        >
          <button>
            <span>Doctor</span>
            <img src={caret_right} alt="" />
          </button>
          <button>
            <span>Patient</span>
            <img src={caret_right} alt="" />
          </button>
        </motion.div>
      </header>

      <DefaultCanvas show={show} handleClose={() => setShow(false)}>
        <div className={styles.mainSidebar}>
          <div className={styles.closeBtn}>
            <IoClose size={20} onClick={() => setShow(false)} />
          </div>

          <ul className={styles.actionLink}>
            <li>
              {" "}
              <a href="/" className={styles.activeLink}>
                Home
              </a>{" "}
            </li>
            <li>
              {" "}
              <a href="/">About</a>{" "}
            </li>
            <li>
              {" "}
              <a href="/">Faq</a>{" "}
            </li>
            <li>
              {" "}
              <a href="/">Privacy Policy</a>{" "}
            </li>
            <li>
              {" "}
              <a href="/">T&C</a>{" "}
            </li>
            <li>
              <button className={styles.loginBtn}>
                <span>Login as</span>
                <img src={downCaret} alt="" />
              </button>
            </li>
          </ul>
        </div>
      </DefaultCanvas>
    </>
  );
};

export default Header;
