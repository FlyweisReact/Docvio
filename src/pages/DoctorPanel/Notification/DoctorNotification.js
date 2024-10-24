/** @format */

import React, { useState } from "react";
import styles from "../../../css/modules/Doctor/notification.module.css";
import DefaultModals from "../../../components/Modals/DefaultModals";
import { close_icon } from "../../../asset";

const NotificationBox = ({ setOpen }) => {
  return (
    <div className={styles.notification_box}>
      <span className={styles.active_dot} />
      <div className={styles.content}>
        <p className={styles.heading}>Lorem Ipsum</p>
        <p className={styles.description}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </p>
        <div className={styles.btn_container}>
          <button className={styles.date_btn} onClick={() => setOpen(true)}>
            06-21-2024
          </button>
          <button className={styles.admin_btn} onClick={() => setOpen(true)}>
            Admin
          </button>
        </div>
      </div>
    </div>
  );
};

const DoctorNotification = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <section className={styles.doctor_notification}>
        <div className={styles.flex_box}>
          <NotificationBox setOpen={setOpen} />
          <NotificationBox setOpen={setOpen} />
          <NotificationBox setOpen={setOpen} />
          <NotificationBox setOpen={setOpen} />
          <NotificationBox setOpen={setOpen} />
          <NotificationBox setOpen={setOpen} />
          <NotificationBox setOpen={setOpen} />
          <NotificationBox setOpen={setOpen} />
        </div>
      </section>
      <DefaultModals show={open} handleClose={() => setOpen(false)}>
        <section className={styles.notification_modal}>
          <div className={styles.close_btn}>
            <img src={close_icon} alt="" onClick={() => setOpen(false)} />
          </div>

          <div className={styles.content}>
            <h1 className={styles.heading}>Admin</h1>
            <p className={styles.sub_heading}>Lorem Ipsum</p>
            <p className={styles.description}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500sLorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500sLorem Ipsum is
              simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's standard dummy text ever since the
              1500sLorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s
            </p>

            <div className={styles.btn_container}>
              <button className={styles.date_btn}>06-21-2024</button>
              <button className={styles.admin_btn}>Admin</button>
            </div>
          </div>
        </section>
      </DefaultModals>
    </>
  );
};

export default DoctorNotification;
