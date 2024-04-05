import { Accordion, AccordionButton, AccordionItem, AccordionPanel, Box, Flex, Heading, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";
import data from '../../../data.json'
const OurEvents = () => {
  const events = data.teams
  
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
    
         {events.map((team, index) => (
        <Accordion
          defaultIndex={index === 0 ? [0] : []}
          allowMultiple
          bg="#ddd"
          w={{ lg: "80%", sm: "90%" }}
          p="10px"
          borderRadius="20px"
          key={index}
          _hover={{
            // transform: "scale(1.1)",
            boxShadow: "5px 5px 5px rgba(252, 187, 187, .8)",
          }}
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
                <Image src={team.image} w="100px" borderRadius="50%" />
                <VStack w="100%" borderRadius="20px" alignItems="flex-start">
                  <Text
                    bg="#FCBBBB"
                    fontSize={{ lg: "16px", md: "14px", base: "12px" }}
                    fontWeight={600}
                    p="5px 10px"
                    borderRadius="20px"
                  >
                    {team.time}
                  </Text>
                  <Text
                    fontSize={{ lg: "24px", md: "20px", base: "16px" }}
                    fontWeight={700}
                    color="#1b273d"
                    textAlign="start"
                  >
                    {team.name}
                  </Text>
                  <Text fontSize="16px" textAlign="start">
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
    </VStack>
  );
};

export default OurEvents;
