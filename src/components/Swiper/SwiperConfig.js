/** @format */

import { Navigation, Pagination } from "swiper/modules";

// slider configuration
export const consultConfig = {
  spaceBetween: 20,
  loop: false,
  slidesPerView: "auto",
  speed: 500,
  resistance: false,
  resistanceRatio: 0,
  modules: [Navigation, Pagination],
  navigation: {
    nextEl: ".next-nav-btn",
    prevEl: ".prev-nav-btn",
  },
  pagination: {
    clickable: true,
    renderBullet: function (index, className) {
      return (
        '<span class="feedback-pagination-bullet ' + className + '"></span>'
      );
    },
  },
};
