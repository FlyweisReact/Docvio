/** @format */

import React from "react";
import styles from "../../css/modules/home.module.css";
import {
  easy_access_icon,
  help_desk_icon,
  specialistImg1,
  time_saving_icon,
  timeTableImg,
  video_consult_icon,
  waveImg,
} from "../../asset";

const Specialist = () => {
  return (
    <div className={styles.specialist}>
      <img src={specialistImg1} alt="" className={styles.above_wave} />
      <div className={styles.content}>
        <div className={styles.written_content}>
          <h1 className={styles.headline}>
            Best Doctors, Across <br /> all specialities
          </h1>

          <p className={styles.description}>
            From routine check-ups and preventive screenings to the management
            of chronic conditions and specialized treatments, our clinic offers
            a wide range of services designed to address your unique healthcare
            needs
          </p>
          <button className={styles.join_us}>Join us</button>
        </div>

        <div className={styles.cards}>
          <div className={styles.item}>
            <img src={timeTableImg} alt="" />
            <p className={styles.title}>
              Dynamic appointment scheduling directly from your mobile or with
              the assistance of our helpdesk team.
            </p>
          </div>
          <div className={styles.item}>
            <img src={easy_access_icon} alt="" />
            <p className={styles.title}>
              The platform can be easily accessed through either a mobile or a
              desktop.
            </p>
          </div>

          <div className={styles.item}>
            <img src={help_desk_icon} alt="" />
            <p className={styles.title}>
              24x7 help desk with video conferencing to attend your queries.
            </p>
          </div>
          <div className={styles.item}>
            <img src={video_consult_icon} alt="" />
            <p className={styles.title}>
              Facility to re-schedule or cancel appointments any time before the
              start of a consultation block.
            </p>
          </div>
          <div className={styles.item}>
            <img src={time_saving_icon} alt="" />
            <p className={styles.title}>
              No waiting time. The doctor will call you directly on your mobile
              phone at the time of the appointment.
            </p>
          </div>
        </div>
      </div>
      <img src={waveImg} alt="" className={styles.below_wave} />
    </div>
  );
};

export default Specialist;
