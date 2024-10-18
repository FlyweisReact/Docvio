/** @format */

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

const CustomeSwiper = ({
  data,
  swiperConfig,
  RenderSlide,
  ExtraComponent,
  onClickEvent,
  slideClass,
}) => {
  return (
    <section className="generic-slider">
      <Swiper {...swiperConfig}>
        {data.map((item, index) => (
          <SwiperSlide key={index} className={slideClass}>
            <RenderSlide {...item} onClickEvent={onClickEvent} />
          </SwiperSlide>
        ))}
        {ExtraComponent && <ExtraComponent />}
      </Swiper>
    </section>
  );
};

export default CustomeSwiper;
