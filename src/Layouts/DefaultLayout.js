/** @format */

import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const DefaultLayout = () => {
  return (
    <section className="default-layout">
      <Header />
      <Outlet />
      <Footer />
    </section>
  );
};

export default DefaultLayout;
