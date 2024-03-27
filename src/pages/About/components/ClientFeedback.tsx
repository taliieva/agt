import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Heading, Image, Text, VStack } from "@chakra-ui/react";

const ClientFeedback = () => {
  const sliders = [
    {
      id: 1,
      comment: "This is the best Restaurant in the world",
      quote:
        " Proin sodales dapibus magna, et porta leo convallis sed. Duis tincidunt libero ut neque mollis dignissim. Nullam ultricies sit amet quam non iaculis. Curabitur convallis nulla non nibh aliquet rhoncus. Donec at tempus felis.",
      image: "/assets/team1.jpg",
    },
    {
      id: 2,
      comment: "This is the best Restaurant in the world",
      quote:
        " Proin sodales dapibus magna, et porta leo convallis sed. Duis tincidunt libero ut neque mollis dignissim. Nullam ultricies sit amet quam non iaculis. Curabitur convallis nulla non nibh aliquet rhoncus. Donec at tempus felis.",
      image: "/assets/team1.jpg",
    },
    {
      id: 3,
      comment: "This is the best Restaurant in the world",
      quote:
        " Proin sodales dapibus magna, et porta leo convallis sed. Duis tincidunt libero ut neque mollis dignissim. Nullam ultricies sit amet quam non iaculis. Curabitur convallis nulla non nibh aliquet rhoncus. Donec at tempus felis.",
      image: "/assets/team1.jpg",
    },
  ];
  return (
    <Swiper
      style={{
        padding: "100px 0",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      {sliders.map((slide, index) => (
        <SwiperSlide
          key={index}
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <VStack w={"80%"}>
            <Text>{slide.comment}</Text>
            <Text>{slide.quote}</Text>
            <Image src={slide.image} w="200px" borderRadius="50%" />
          </VStack>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ClientFeedback;
