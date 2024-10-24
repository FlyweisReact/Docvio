/** @format */

import React, { useState } from "react";
import styles from "../../../css/modules/Doctor/createPriscription.module.css";
import { ChangesSaved } from "../../../components/Modals/DefaultModals";

const InputGroup = ({ label, onChangeEvent }) => {
  return (
    <div className={styles.input_group}>
      <label className={styles.label}> {label} </label>
      <input
        type={"text"}
        onChange={onChangeEvent ? onChangeEvent : undefined}
      />
    </div>
  );
};

const SelectGroup = () => {
  return (
    <div className={styles.select_group}>
      <select>
        <option>Recommended Medicine</option>
      </select>
    </div>
  );
};

const CreatePriscription = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <ChangesSaved show={show} handleClose={() => setShow(false)} />
      <section className={styles.page_container}>
        <h4 className={styles.headline}>Doctor’s Details</h4>

        <div className={styles.box_container}>
          <form className={styles.form_container}>
            <InputGroup label={"Doctor’s Name"} />
            <InputGroup label={"DEA"} />
            <InputGroup label={"License"} />
            <InputGroup label={"NPI"} />
            <InputGroup label={"Hospital Name"} />
            <InputGroup label={"Address"} />
            <InputGroup label={"Phone Number"} />
          </form>
        </div>

        <h4 className={styles.headline}>Patient's Details</h4>

        <div className={styles.box_container}>
          <form className={styles.form_container}>
            <InputGroup label={"Patient Name"} />
            <InputGroup label={"Patient Id"} />
            <InputGroup label={"Gender"} />
            <InputGroup label={"Age"} />
            <InputGroup label={"Weight"} />
            <InputGroup label={"Address"} />
            <InputGroup label={"Phone Number"} />
            <InputGroup label={"Email Address"} />
            <InputGroup label={"State"} />
            <InputGroup label={"City"} />
            <InputGroup label={"Name of Disease"} />

            <div className={styles.double_input}>
              <InputGroup label={"Medicine"} />
              <InputGroup label={"Labs"} />
            </div>

            <div className={styles.double_input}>
              <SelectGroup />
              <SelectGroup />
            </div>

            <button
              type="button"
              className={`${styles.submit_btn} ${styles.active}`}
              onClick={() => setShow(true)}
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default CreatePriscription;
