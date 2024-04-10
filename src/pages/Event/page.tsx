import React, { useEffect } from "react";
import Layout from "../../Layout/Layout.tsx";
import { Box, HStack, Text } from "@chakra-ui/react";
import OurEvents from "./components/OurEvents.tsx";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

const EventPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout>
      <Box
        fontFamily="Poppins"
        mt={{ md: "90px", base: "50px" }}
        // bg="rgba(27, 39, 61, .95)"
        bgImage="/assets/banner-inner2.jpg"
        display="flex"
        flexDirection="column"
        // alignItems="flex-start"
        justifyContent="flex-start"
        p={{ md: "100px 60px", base: "60px" }}
        w="100%"
      >
        <Text fontSize="40px" color="white" fontWeight={900}>
          Tədbirlər
        </Text>
        <HStack color="white" fontWeight={700}>
          <FontAwesomeIcon icon={faHouse} color="#ec398b" />
          <Link to="/">Əsas səhifə</Link>
          <Text color="#efa506">/ Tədbirlər</Text>
        </HStack>
      </Box>
      <OurEvents />
    </Layout>
  );
};

export default EventPage;
