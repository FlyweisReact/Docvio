/** @format */

import React from "react";
import Banner from "../../components/About/Banner";
import About from "../../components/About/About";
import HealthCare from "../../components/About/HealthCare";
import Properties from "../../components/About/Properties";
import BrandLoyalty from "../../components/About/BrandLoyalty";

const bannerInfo = {
  heading: "Welcome to <br /> <span>Docvoi</span>",
  subHeading: "Connecting Patients with Doctors, Seamlessly",
  description:
    "At our DocVoi, we believe in providing exceptional, personalized healthcare that empowers our patients to take an active role in their own well-being",
  hashLink: "/about-us#about-us-content",
};

const AboutUs = () => {
  return (
    <section className="about-us-page-contianer">
      <Banner
        heading={bannerInfo.heading}
        subHeading={bannerInfo.subHeading}
        description={bannerInfo.description}
        hashLink={bannerInfo.hashLink}
      />
      <About />
      <HealthCare />
      <Properties />
      <BrandLoyalty />
    </section>
  );
};

export default AboutUs;
