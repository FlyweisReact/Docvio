/** @format */

import React from "react";
import Banner from "../../components/Home/Banner";
import Consultation from "../../components/Home/Consultation";
import Empower from "../../components/Home/Empower";
import Specialist from "../../components/Home/Specialist";
import ConsultSlider from "../../components/Home/ConsultSlider";
import HealthBlogs from "../../components/Home/HealthBlogs";
import OurTeam from "../../components/Home/OurTeam";
import DownloadApp from "../../components/Home/DownloadApp";

const Index = () => {
  return (
    <section className="home-page-container">
      <Banner />
      <Consultation />
      <Empower />
      <Specialist />
      <ConsultSlider />
      <HealthBlogs />
      <OurTeam />
      <DownloadApp />
    </section>
  );
};

export default Index;
