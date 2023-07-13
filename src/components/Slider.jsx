import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import "./Slider.css";

export default function Slider() {
  return (
    <>
      <Swiper className="mySwiper">
        <SwiperSlide className="slide1"></SwiperSlide>
        <SwiperSlide className="slide2"></SwiperSlide>
        <SwiperSlide className="slide3"></SwiperSlide>
      </Swiper>
    </>
  );
}
