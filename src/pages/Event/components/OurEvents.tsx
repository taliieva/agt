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
  const events = data.teams;

  return (
    <VStack bg="white" p={{ md: "100px 20px", base: "50px 20px" }}>
      <Heading
        fontSize={{ base: "24px", sm: "30px", lg: "40px" }}
        fontWeight="700"
        color="#1b273d"
        mb="50px"
      >
        Tədbirlər
      </Heading>
      <Grid
        gridTemplateColumns="repeat(3,1fr)"
        w="80%"
        justifyContent="center"
        gap={50}
      >
        {events.map((team, index) => (
          <Link to={`/event/${team.id}`}>
            <Box
              position={"relative"}
              _hover={{
                transform: "scale(1.1)",
                transition: "transform 0.3s ease",
              }}
            >
              <Image
                src={team.image}
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
                background="rgba(0,0,0,0.3)"
                opacity={0}
                color="white"
                _hover={{
                  opacity: 1,
                }}
              >
                <Text>{team.name}</Text>
              </Flex>
            </Box>
          </Link>
        ))}
      </Grid>
    </VStack>
  );
};

export default OurEvents;
