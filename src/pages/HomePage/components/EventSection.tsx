import {
  Heading,
  VStack,
  Text,
  Flex,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Box,
} from "@chakra-ui/react";
import React from "react";
import data from "../../../data.json";
import { Link } from "react-router-dom";
const EventSection = () => {
  const events = data.teams;

  return (
    <VStack
      bgImage={"/assets/schedule-bg-pattern.png"}
      bgSize="cover"
      bgColor="#554bb9"
      p={{ md: "100px 20px", base: "50px 20px" }}
      fontFamily="Poppins"
    >
      <Heading
        fontSize={{ base: "24px", sm: "30px", lg: "40px" }}
        fontWeight="900"
        color="white"
        mb="50px"
        textTransform="uppercase"
      >
        Tədbirlər
      </Heading>

      {events.map((team, index) => (
        <Accordion
          defaultIndex={index === 0 ? [0] : []}
          allowMultiple
          bg="#ddd"
          w={{ lg: "80%", sm: "90%" }}
          p="10px"
          borderRadius="20px"
          key={index}
          
        >
          <AccordionItem w="100%" border="none">
            <AccordionButton
              bg="white"
              borderRadius="10px"
              _hover={{ bg: "white" }}
              p={{ lg: "40px 20px", base: "20px" }}
            >
              <Flex
                flexDirection={{ sm: "row", base: "column" }}
                borderRadius="10px"
                gap="20px"
              >
                {/* <Image src={team.image} w="100px" borderRadius="50%" /> */}
                <VStack w="100%" borderRadius="20px" alignItems="flex-start">
                  <Text
                    bg="rgba(239, 165, 6, .1)"
                    fontSize={{ lg: "16px", md: "14px", base: "12px" }}
                    fontWeight={600}
                    p="5px 10px"
                    borderRadius="20px"
                  >
                    {team.time}
                  </Text>
                  <Text
                    fontSize={{ lg: "30px", md: "20px", base: "16px" }}
                    fontWeight={700}
                    color="#1b273d"
                    textAlign="start"
                  >
                    {team.name}
                  </Text>
                  <Text fontSize="16px" textAlign="start" color="#ec398b">
                    {team.author}
                  </Text>
                </VStack>
              </Flex>
            </AccordionButton>
            <AccordionPanel pb={4}>
              <VStack
                alignItems="flex-start"
                fontSize={{ lg: "18px", md: "16px", sm: "14px", base: "12px" }}
              >
                <Text color="#585555">{team.overview}</Text>
                <Text>
                  <span style={{ color: "#7F7BE2", fontWeight: 700 }}>
                    Location:{" "}
                  </span>
                  {team.location}
                </Text>
              </VStack>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      ))}
      <Link to="/event">
            <Box
              fontFamily="Oswald"
              p="10px 40px"
              w="100%"
              fontSize="20px"
              cursor="pointer"
              bg="#554bb9"
              color="white"
              border="none"
              transition="border-radius 0.5s ease"
              _hover={{
                borderRadius: "15px",
              }}
            >
              Daha çox
            </Box>
          </Link>
    </VStack>
  );
};

export default EventSection;
