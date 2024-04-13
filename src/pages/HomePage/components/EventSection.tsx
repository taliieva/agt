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
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useEvent } from "../../../hooks/useEvent.tsx";
const EventSection = () => {
  const { recentEvents, fetchRecentEvents } = useEvent();
  useEffect(() => {
    fetchRecentEvents();
  }, []);
  
  return (
    <VStack
      bgImage={"/assets/schedule-bg-pattern.png"}
      bgSize="cover"
      bgColor="#554bb9"
      p={{ md: "100px 30px", base: "80px 20px" }}
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

      {recentEvents.map((team, index) => (
        <Accordion
          defaultIndex={index === 0 ? [0] : []}
          allowMultiple
          bg="#ddd"
          w={{ xl: "80%", base: "100%" }}
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
                    fontWeight={700}
                    p="5px 10px"
                    borderRadius="20px"
                  >
                    {team?.startDate} -{team?.endDate}
                  </Text>
                  <Text
                    fontSize={{ lg: "25px", md: "20px", base: "16px" }}
                    fontWeight={900}
                    color="#1b273d"
                    textAlign="start"
                    fontFamily="Poppins"
                  >
                    {team?.title}
                  </Text>
                  <Text
                    fontSize={{ base: "12px", lg: "14px" }}
                    textAlign="start"
                    color="#ec398b"
                    fontFamily="Poppins"
                  >
                    <span style={{ color: "black" }}>By</span> {team.author}
                  </Text>
                </VStack>
              </Flex>
            </AccordionButton>
            <AccordionPanel pb={4}>
              <VStack
                alignItems="flex-start"
                fontSize={{ md: "16px", sm: "14px", base: "12px" }}
              >
                <Text color="#585555" fontFamily="Poppins">
                  {team.description}
                </Text>
                <Text fontSize="14px" fontFamily="Poppins">
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
          mt="20px"
        >
          Daha çox
        </Box>
      </Link>
    </VStack>
  );
};

export default EventSection;
