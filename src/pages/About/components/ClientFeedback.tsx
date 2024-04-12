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
    <VStack p={{ md: "100px 0", base: "80px 0" }}>
      <Heading
        fontSize={{ base: "24px", sm: "30px", lg: "40px" }}
        color="#1b273d"
      >
        Müştərilərin fikirləri
      </Heading>
      <Text fontSize={{ base: "12px", md: "16px", xl: "18px" }}>
        Müştərilərimizin dəyərli fikirlərindən bir neçəsini sizə təqdim edirik!
      </Text>
      <Swiper
        style={{
          padding: "50px 0",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{ delay: 2000 }}
        loop={true}
        // navigation
        // pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log("slide change")}
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
            <VStack w={"80%"} gap="20px">
              <Text fontSize={{ base: "12px", md: "16px", xl: "18px" }}>
                {slide.comment}
              </Text>
              <Text
                fontSize={{ base: "16px", md: "18px", xl: "20px" }}
                width={{ md: "60%", sm: "80%", base: "100%" }}
                textAlign={"center"}
              >
                {slide.quote}
              </Text>
              <Image
                src={slide.image}
                w={{ md: "200px", sm: "150px", base: "100px" }}
                borderRadius="50%"
              />
            </VStack>
          </SwiperSlide>
        ))}
      </Swiper>
    </VStack>
  );
};

export default ClientFeedback;
