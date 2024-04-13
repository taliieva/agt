import React from "react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Box } from "@chakra-ui/layout";
const Carousel = () => {
  return (
    <Box
    mt={{ md: "90px", base: "50px" }}
    >
      <Swiper
        // style={{ marginTop: "80px" }}
        // style={{ marginTop: { md: "80px", base: "0px" } }}

        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000 }}
        // navigation
        // pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log("swiper")}
        // onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <img
            src="/assets/slider6.jpg"
            alt="slider1"
            width="100%"
            style={{ position: "relative" }}
          />
          {/* <div style={{ position: "absolute", top: "40%", left: "10%" }}>
            <h1 style={{ fontSize: "50px", color: "white" }}>Event 1</h1>
            <p style={{ fontSize: "20px", color: "white" }}>Info about event</p>
          </div> */}
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/assets/slider7.jpg"
            alt="slider2  "
            width="100%"
            style={{ position: "relative" }}
          />
          {/* <div style={{ position: "absolute", top: "40%", left: "10%" }}>
            <h1 style={{ fontSize: "40px", color: "white" }}>Event 2</h1>
            <p style={{ fontSize: "20px", color: "white" }}>Info about event</p>
          </div> */}
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};

export default Carousel;
