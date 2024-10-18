/** @format */

import React from "react";
import styles from "../../css/modules/home.module.css";
import { download_apps_img } from "../../asset";

const DownloadApp = () => {
  return (
    <div className={styles.download_app_banner}>
      <img src={download_apps_img} alt="" />
    </div>
  );
};

export default DownloadApp;
