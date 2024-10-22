/** @format */

import React from "react";
import Sidebar from "../components/DoctorPanel/Sidebar";
import { Outlet } from "react-router-dom";

const DoctorPanelLayout = () => {
  return (
    <div className="doctor-panel-layout">
      <div className="left-container">
        <Sidebar />
      </div>
      <div className="right-container">
        <Outlet />
      </div>
    </div>
  );
};

export default DoctorPanelLayout;
