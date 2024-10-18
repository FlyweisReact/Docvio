/** @format */

import React from "react";
import styles from "../../css/modules/home.module.css";
import CustomeSwiper from "../Swiper/CustomeSwiper";
import { constants } from "../../constant/data";
import { consultConfig } from "../Swiper/SwiperConfig";
import { consult_arrow_left, consult_arrow_right} from '../../asset/index'

const SwiperComponent = (item) => {
  const { img, userName, userDesc, feedback } = item;
  return (
    <div className={styles.consult_experience}>
      <div className={styles.header}>
        <img src={img} alt="" className={styles.thumbnail} />
        <div className={styles.profile_overview}>
          <p className={styles.user_name}> {userName} </p>
          <p className={styles.user_desc}> {userDesc} </p>
        </div>
      </div>

      <div className={styles.content}>
        <p className={styles.description}>{feedback}</p>
      </div>
    </div>
  );
};

const FeedbackNavigation = () => {
  return (
    <div className={"feedback-navigation"}>
      <img src={consult_arrow_right} className={"prev-nav-btn"} alt="" />
      <img src={consult_arrow_left} className={"next-nav-btn"} alt="" />
    </div>
  );
};
const ConsultSlider = () => {
  return (
    <div className={styles.consult_testimonial}>
      <h4 className={styles.headline}>
        What our users say about their consultation experience
      </h4>

      <CustomeSwiper
        data={constants.consultFeedback}
        RenderSlide={SwiperComponent}
        swiperConfig={consultConfig}
        slideClass={styles.swiper_slide}
        ExtraComponent={FeedbackNavigation}
      />
    </div>
  );
};

export default ConsultSlider;
