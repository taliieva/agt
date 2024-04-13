import React, { useEffect } from "react";
import Layout from "../../Layout/Layout.tsx";
import { Box, HStack, Text } from "@chakra-ui/react";
import SocialSection from "./components/SocialSection.tsx";
import MessageSection from "./components/MessageSection.tsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout>
      {/* <Box mt="80px">
        <Image src="/assets/slider6.jpg" w="100%" position="relative"/>
        <Text position="absolute" top="50%" left="20%" fontSize="40px">Əlaqə</Text>
      </Box> */}
      <Box
        fontFamily="Poppins"
        mt={{ md: "90px", base: "50px" }}
        // bg="rgba(27, 39, 61, .95)"
        bgImage="/assets/banner-inner2.jpg"
        bgSize="cover"
        display="flex"
        flexDirection="column"
        // alignItems="flex-start"
        justifyContent="flex-start"
        p={{ lg: "100px 150px", base: "80px 30px" }}
        w="100%"
        
      >
        <Text fontSize="40px" color="white" fontWeight={900} fontFamily="Poppins">
          Əlaqə
        </Text>
        <HStack color="white" fontWeight={700}>
          <FontAwesomeIcon icon={faHouse} color="#ec398b" />
          <Link to="/">Əsas səhifə</Link>
          <Text color="#efa506">/ Əlaqə</Text>
        </HStack>
      </Box>
      <SocialSection />
      <MessageSection />
    </Layout>
  );
};

export default ContactPage;
