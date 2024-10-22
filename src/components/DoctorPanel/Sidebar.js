/** @format */

import React from "react";
import styles from "../../css/modules/Doctor/Sidebar.module.css";
import { doctor_profile_img, log_out_icon, logo } from "../../asset";
import { constants } from "../../constant/data";
import { useLocation, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  const { pathname } = location;
  const navigate = useNavigate();

  return (
    <section className={styles.sidebar_container}>
      <div className={styles.header}>
        <div className={styles.logo_container}>
          <img src={logo} alt="" className={styles.thumbnail} />
        </div>
        <div className={styles.profile_info}>
          <img src={doctor_profile_img} alt="" />
          <p className={styles.title}>Dr. Terry Levin</p>
        </div>
      </div>

      <div className={styles.nav_links}>
        {constants.doctorSidebar.map((item) => (
          <div
            className={`${styles.item} ${
              pathname === item.link ? styles.active : ""
            } `}
            onClick={() => navigate(item.link)}
          >
            <img src={item.icon} alt="" />
            <p className={styles.title}> {item.title} </p>
          </div>
        ))}

        <button className={styles.log_out_btn}>
          <img src={log_out_icon} alt="" />
          Log Out
        </button>
      </div>
    </section>
  );
};

export default Sidebar;
