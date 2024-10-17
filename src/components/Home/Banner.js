/** @format */

import React from "react";
import { doctorImg } from "../../asset";

const Banner = () => {
  return (
    <div className="home-banner">
      <div className="content">
        <h2 className="headline">
          Connecting Patients <br /> with Doctors, <br /> Seamlessly
        </h2>
        <h5 className="sub-headline">
          Trusted Experts Dedicated to Your Wellbeing
        </h5>
        <button className="join-now">Join us Now</button>
      </div>
      <div className="img-container">
        <img src={doctorImg} alt="" />
      </div>
    </div>
  );
};

export default Banner;
