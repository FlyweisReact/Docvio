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
  description: "<p style='margin-top : 60px;' >Privacy Policy</p>",
  hashLink: "/privacy-policy#privacy",
};

const intro = {
  heading: "Privacy Policy",
  description:
    "At DocVoi, your privacy is a priority. We are committed to protecting your personal data and ensuring that your experience with our platform is safe and secure. This Privacy Policy explains how we collect, use, and protect your personal information when you use our services.",
};

const PrivacyPolicy = () => {
  return (
    <section className={styles.privacy_page_container}>
      <Banner
        heading={bannerInfo.heading}
        subHeading={bannerInfo.subHeading}
        description={bannerInfo.description}
        hashLink={bannerInfo.hashLink}
      />

      <FaqIntro heading={intro.heading} description={intro.description} />
      <PrivacyContent data={constants.privacyPolicy} />
    </section>
  );
};

export default PrivacyPolicy;
