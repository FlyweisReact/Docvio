/** @format */

import React from "react";
import Banner from "../../components/About/Banner";
import styles from "../../css/modules/faq.module.css";
import { constants } from "../../constant/data";
import Accordion from "../../components/Accordion";
import FaqIntro from "../../components/Faq/FaqIntro";

const bannerInfo = {
  heading: "<span>Docvoi</span>",
  subHeading: "Connecting Patients with Doctors, Seamlessly",
  description: "FAQ",
  hashLink: "/faq#faq",
};

const intro = {
  heading: "Frequently Asked Questions",
  description:
    " Welcome to the DocVoi FAQ page! Here you’ll find answers to the most common questions about our platform. If you have any further questions, <br /> feel free to reach out to our support team.",
};

const Faq = () => {
  return (
    <section className={styles.faq_page_container}>
      <Banner
        heading={bannerInfo.heading}
        subHeading={bannerInfo.subHeading}
        description={bannerInfo.description}
        hashLink={bannerInfo.hashLink}
      />
      <FaqIntro heading={intro.heading} description={intro.description} />
      <Accordion data={constants.faq} />
    </section>
  );
};

export default Faq;
