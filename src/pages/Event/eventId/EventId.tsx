import React, { useEffect } from "react";
import Layout from "../../../Layout/Layout.tsx";
import { Box, Flex, HStack, Heading, Image, Text, VStack } from "@chakra-ui/react";
import data from "../../../data.json";
import { useParams } from "react-router-dom";
const EventId = () => {
  const event = data.teams;
  const { eventId } = useParams();
  const selectedEvent = event.find((item) => String(item.id) === eventId);
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
        mb="30px"
      >
        <Text fontSize="40px" color="white">
          {selectedEvent?.name}
        </Text>
      </Box>
      <Flex alignItems="center" justifyContent="center">
        <VStack
          background="rgba(0,0,0,0.2)"
          w="90%"
          mb="100px"
          // border="1px solid black"
          alignItems="center"
          justifyContent="center"
          borderRadius="20px 20px 0 0"
          gap="30px"
        >
          <Image src={selectedEvent?.image} w="100%" height="70vh" borderRadius="20px"/>
          <HStack gap="50px" m="10px">
            <VStack alignItems="flex-start" w="50%">
              <Heading>Tədbir haqqında</Heading>
              <Text>{selectedEvent?.name}</Text>
              <Text>{selectedEvent?.overview}</Text>
            </VStack>
            <VStack alignItems="flex-start" w="50%">
              <Heading>Məlumatlar</Heading>
              <Text>{selectedEvent?.author}</Text>
              <Text>{selectedEvent?.time}</Text>
              <Text>{selectedEvent?.location}</Text>
            </VStack>
          </HStack>
        </VStack>
      </Flex>
    </Layout>
  );
};

export default EventId;
