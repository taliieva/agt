import { Heading, Image, VStack } from "@chakra-ui/react";
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
import "swiper/css/autoplay";

const SponsorSection = () => {
  const sponsors = [
    "/assets/sponsor1.webp",
    "/assets/sponsor2.webp",
    "/assets/sponsor3.webp",
    "/assets/sponsor2.webp",
  ];
  return (
    <VStack p={{ md: "100px 20px", base: "80px 20px" }} fontFamily="Poppins">
      <Heading
        fontSize={{ base: "24px", sm: "30px", lg: "40px" }}
        color="#1b273d"
        fontWeight={900}
        textTransform="uppercase"
      >
        Tərəfdaşlar
      </Heading>
      <Swiper
        style={{
          padding: "100px 0",
          width: "80%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={3}
        loop={true}
        autoplay={{ delay: 2000 }}
        // navigation
        // pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log("slide change")}
      >
        {sponsors.map((item, index) => (
          <SwiperSlide
            key={index}
            style={{
              width: "30%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <VStack
            height="100px"
              w={"100px"}
              gap={20}
              alignItems="center"
              justifyContent="center"
            >
              <Image src={item} w="100px" />
            </VStack>
          </SwiperSlide>
        ))}
      </Swiper>
    </VStack>
  );
};

export default SponsorSection;
