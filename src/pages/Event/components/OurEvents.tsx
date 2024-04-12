import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Grid,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import data from "../../../data.json";
import { Link } from "react-router-dom";
const OurEvents = () => {
  const events = data.events;

  return (
    <VStack bg="white" p={{ md: "100px 20px", base: "80px 20px" }} fontFamily="Poppins">
      <Heading
        fontSize={{ base: "24px", sm: "30px", lg: "40px" }}
        fontWeight="700"
        color="#1b273d"
        mb="50px"
      >
        Tədbirlər
      </Heading>
      <Grid
        gridTemplateColumns={{ lg: "repeat(3,1fr)", md: "repeat(2,1fr)" }}
        w={{ lg: "90%", base: "90%", xl:"80%" }}
        justifyContent="center"
        gap={{xl:"50px", base:"20px"}}
      >
        {events.map((team, index) => (
          <Link to={`/event/${team.id}`}>
            <Box
              key={index}
              position={"relative"}
              transition="transform 1s ease"
              _hover={{
                transform: "scale(1.1)",
              }}
            >
              <Image
                src={team.imageUrl}
                width="100%"
                h="150px"
                borderRadius="10px"
              />
              <Flex
                borderRadius="10px"
                position={"absolute"}
                top={0}
                right={0}
                justifyContent="center"
                alignItems="center"
                w="100%"
                h="100%"
                background="rgba(0,0,0,0.4)"
                opacity={0}
                color="white"
                _hover={{
                  opacity: 1,
                }}
              >
                <Text fontSize="16px">{team.name}</Text>
              </Flex>
            </Box>
          </Link>
        ))}
      </Grid>
    </VStack>
  );
};

export default OurEvents;
