/** @format */

import React from "react";
import styles from "../../css/modules/privacy.module.css";
import Banner from "../../components/About/Banner";
import FaqIntro from "../../components/Faq/FaqIntro";
import PrivacyContent from "../../components/Privacy/PrivacyContent";
import { constants } from "../../constant/data";

const bannerInfo = {
  heading: "<span>Docvoi</span>",
  subHeading: "Connecting Patients with Doctors, Seamlessly",
  description: "<p style='margin-top : 60px;' >Terms & Conditions</p>",
  hashLink: "/terms&conditions#terms",
};

const intro = {
  heading: "Terms & Conditions",
  description:
    "Welcome to DocVoi! By using our platform, you agree to comply with and be bound by the following Terms and Conditions. Please read them carefully. If you do not agree to these terms, you should not use our services.",
};

const Terms = () => {
  return (
    <section className={styles.privacy_page_container}>
      <Banner
        heading={bannerInfo.heading}
        subHeading={bannerInfo.subHeading}
        description={bannerInfo.description}
        hashLink={bannerInfo.hashLink}
      />
      <div id="terms" />
      <FaqIntro heading={intro.heading} description={intro.description} />

      <PrivacyContent data={constants.terms} />
    </section>
  );
};

export default Terms;
