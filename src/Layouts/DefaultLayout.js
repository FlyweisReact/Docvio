/** @format */

import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const DefaultLayout = () => {
  return (
    <section className="default-layout">
      <Header />
      <Outlet />
    </section>
  );
};

export default DefaultLayout;
