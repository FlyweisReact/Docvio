/** @format */

import React, { useState } from "react";
import { checkGif, perceptionImg, pluc_icon } from "../../../asset/index";
import styles from "../../../css/modules/Doctor/perception.module.css";
import DefaultModals from "../../../components/Modals/DefaultModals";
import { useNavigate } from "react-router-dom";

const PerceptionBox = ({ setOpen }) => {
  return (
    <div className={styles.perception_box} onClick={() => setOpen(true)}>
      <img src={perceptionImg} alt="" className={styles.thumbnail} />
      <div className={styles.content}>
        <div className={styles.main}>
          <p className={styles.label}>Patient Name:</p>
          <p className={styles.value}>Ravleen</p>
        </div>
        <div className={styles.main}>
          <p className={styles.label}>Appointment ID:</p>
          <p className={styles.value}>321</p>
        </div>
        <div className={styles.main}>
          <p className={styles.label}>Gender:</p>
          <p className={styles.value}>Male</p>
        </div>
      </div>
    </div>
  );
};

const DoctorPrescription = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [pharmaMod, setPharmaMod] = useState(false);
  const [labMod, setLabMod] = useState(false);

  return (
    <section className={styles.page_container}>
      <div className={styles.flex_container}>
        <PerceptionBox setOpen={setOpen} />
        <PerceptionBox setOpen={setOpen} />
        <PerceptionBox setOpen={setOpen} />
        <PerceptionBox setOpen={setOpen} />
      </div>

      <img
        src={pluc_icon}
        className={styles.plusIcon}
        alt=""
        onClick={() => navigate("/doctor/create-prescription")}
      />

      <DefaultModals show={open} handleClose={() => setOpen(false)}>
        <div className={styles.prescription_modal}>
          <div className={styles.mod_content}>
            <img src={perceptionImg} alt="" />
            <div className={styles.content}>
              <p className={styles.title}>Doctor Name: Kumar Vishwas</p>
              <p className={styles.title}>Patient Name: Tim Davis</p>
              <p className={styles.title}>Patient Id: 321</p>
              <p className={styles.title}>Patient Ph no: 1261231230</p>
              <p className={styles.title}>Gender: Male</p>
              <p className={styles.title}>Email: timdevis@gmail.com</p>
            </div>
          </div>
          <div className={styles.btn_container}>
            <button
              onClick={() => {
                setOpen(false);
                setPharmaMod(true);
              }}
            >
              Send to Pharma
            </button>
            <button
              onClick={() => {
                setOpen(false);
                setLabMod(true);
              }}
            >
              Send to Lab
            </button>
          </div>
        </div>
      </DefaultModals>

      <DefaultModals show={pharmaMod} handleClose={() => setPharmaMod(false)}>
        <div className={styles.perscription_successfull_modal}>
          <img src={checkGif} alt="" className={styles.gif} />

          <div className={styles.content}>
            <p className={styles.title}>
              Your Prescription Successfully <br /> Send to Pharamacy.
            </p>
          </div>
        </div>
      </DefaultModals>

      <DefaultModals show={labMod} handleClose={() => setLabMod(false)}>
        <div className={styles.perscription_successfull_modal}>
          <img src={checkGif} alt="" className={styles.gif} />

          <div className={styles.content}>
            <p className={styles.title}>
              Your Prescription Successfully <br /> Send to Lab.
            </p>
          </div>
        </div>
      </DefaultModals>
    </section>
  );
};

export default DoctorPrescription;
