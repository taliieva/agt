import React, { useEffect } from "react";
import Layout from "../../Layout/Layout.tsx";
import { Box, Text } from "@chakra-ui/react";
import OurEvents from "./components/OurEvents.tsx";

const EventPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout>
      <Box
        bg="rgba(27, 39, 61, .95)"
        // mt={{ md: "90px", base: "50px" }}
        display="flex"
        alignItems="center"
        p={{ md: "100px 60px", base: "60px" }}
        flexDirection="column"
      >
        <Text fontSize="40px" color="white">
          Tədbirlərimiz
        </Text>
      </Box>
      <OurEvents />
    </Layout>
  );
};

export default EventPage;
