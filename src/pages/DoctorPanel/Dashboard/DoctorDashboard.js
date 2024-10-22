/** @format */

import React from "react";
import styles from "../../../css/modules/Doctor/dashboard.module.css";
import { cash_icon } from "../../../asset";
import { Switch, ConfigProvider } from "antd";

const InputGroup = ({ label }) => {
  return (
    <div className={styles.input_group}>
      <label className={styles.label}> {label} </label>
      <input type={"text"} />
    </div>
  );
};

const RadioBtn = ({ heading, subHeading }) => {
  return (
    <div className={styles.radio_btn_container}>
      <div className={styles.radio_labels}>
        <p className={styles.heading}> {heading} </p>
        <p className={styles.sub_heading}> {subHeading} </p>
      </div>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#4AC72A",
          },
        }}
      >
        <Switch defaultChecked className={styles.custom_radio} />
      </ConfigProvider>
    </div>
  );
};

const DoctorDashboard = () => {
  return (
    <section className={styles.doctor_dashboard}>
      <form className={styles.form_container}>
        <InputGroup label={"Clinic Name"} />
        <InputGroup label={"First Name"} />
        <InputGroup label={"Last Name"} />
        <InputGroup label={"Subtitle"} />
        <InputGroup label={"Hospital Name"} />

        <div className={styles.double_input}>
          <InputGroup label={"Enter Price"} />
          <InputGroup label={"Time Interval in (MIN)"} />
        </div>

        <div className={styles.double_input}>
          <div className={styles.select_group}>
            <img src={cash_icon} alt="" />
            <select>
              <option> Select a payment method </option>
              <option>Card</option>
              <option>Online</option>
              <option>UPI</option>
            </select>
          </div>

          <RadioBtn
            heading={"Active Walk-in Slots"}
            subHeading={"Turn off to Deactivate"}
          />
        </div>

        <div className={styles.double_input}>
          <InputGroup label={"Email"} />
          <InputGroup label={"Walk in slots per day (Kiosk)"} />
        </div>

        <div className={styles.double_input}>
          <InputGroup label={"Video call consultant slots per day"} />
          <RadioBtn
            heading={"Video call consultant Slots"}
            subHeading={"Turn off to Deactivate"}
          />
        </div>

        <div className={styles.double_input}>
          <InputGroup label={"Password"} />
          <InputGroup label={"Confirm password"} />
        </div>
        <div className={styles.double_input}>
          <InputGroup label={"Enter primary phone number"} />
          <InputGroup label={"Enter What’sapp phone number"} />
        </div>
        <InputGroup label={"Address"} />
        <InputGroup label={"Description"} />
        <InputGroup label={"About us"} />
        <div className={styles.double_input}>
          <RadioBtn
            heading={"Online Booking"}
            subHeading={"Turn off to stop all booking"}
          />
          <RadioBtn
            heading={"Pay Now"}
            subHeading={"Turn off to hide pay now option"}
          />
        </div>
        <div className={styles.double_input}>
          <RadioBtn
            heading={"Online Booking"}
            subHeading={"Turn off to stop all booking"}
          />
          <RadioBtn heading={"Status"} subHeading={"Turn on to show doctor"} />
        </div>

        <button className={styles.submit_btn}>Submit</button>
      </form>
    </section>
  );
};

export default DoctorDashboard;
