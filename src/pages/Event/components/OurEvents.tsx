import { Accordion, AccordionButton, AccordionItem, AccordionPanel, Box, Flex, Heading, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";

const OurEvents = () => {
  const teams = [
    {
      id: 1,
      image: "/assets/team1.jpg",
      time: "09.00 AM - 10.30 AM",
      name: "Wait is Over! Stony Brook Captures Conference",
      author: "By Riaz Sagar , Logichunt Inc.",
      overview:
        "Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache fanny pack nostrud. Photo booth anim 8-bit hella, PBR 3 wolf moon beard Helvetica. Salvia esse flexitarian Truffaut synth art party deep v chillwave.",
      location: " Hall 1, Building A , Golden Street , Southafrica",
    },
    {
      id: 2,
      image: "/assets/team2.jpg",
      time: "09.00 AM - 10.30 AM",
      name: "Wait is Over! Stony Brook Captures Conference",
      author: "By Riaz Sagar , Logichunt Inc.",
      overview:
        "Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache fanny pack nostrud. Photo booth anim 8-bit hella, PBR 3 wolf moon beard Helvetica. Salvia esse flexitarian Truffaut synth art party deep v chillwave.",
      location: " Hall 1, Building A , Golden Street , Southafrica",
    },
    {
      id: 3,
      image: "/assets/team3.jpg",
      time: "09.00 AM - 10.30 AM",
      name: "Wait is Over! Stony Brook Captures Conference",
      author: "By Riaz Sagar , Logichunt Inc.",
      overview:
        "Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache fanny pack nostrud. Photo booth anim 8-bit hella, PBR 3 wolf moon beard Helvetica. Salvia esse flexitarian Truffaut synth art party deep v chillwave.",
      location: " Hall 1, Building A , Golden Street , Southafrica",
    },
    {
      id: 4,
      image: "/assets/team4.jpg",
      time: "09.00 AM - 10.30 AM",
      name: "Wait is Over! Stony Brook Captures Conference",
      author: "By Riaz Sagar , Logichunt Inc.",
      overview:
        "Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache fanny pack nostrud. Photo booth anim 8-bit hella, PBR 3 wolf moon beard Helvetica. Salvia esse flexitarian Truffaut synth art party deep v chillwave.",
      location: " Hall 1, Building A , Golden Street , Southafrica",
    },
    {
      id: 5,
      image: "/assets/team5.jpg",
      time: "09.00 AM - 10.30 AM",
      name: "Wait is Over! Stony Brook Captures Conference",
      author: "By Riaz Sagar , Logichunt Inc.",
      overview:
        "Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache fanny pack nostrud. Photo booth anim 8-bit hella, PBR 3 wolf moon beard Helvetica. Salvia esse flexitarian Truffaut synth art party deep v chillwave.",
      location: " Hall 1, Building A , Golden Street , Southafrica",
    },
    {
      id: 6,
      image: "/assets/team6.jpg",
      time: "09.00 AM - 10.30 AM",
      name: "Wait is Over! Stony Brook Captures Conference",
      author: "By Riaz Sagar , Logichunt Inc.",
      overview:
        "Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache fanny pack nostrud. Photo booth anim 8-bit hella, PBR 3 wolf moon beard Helvetica. Salvia esse flexitarian Truffaut synth art party deep v chillwave.",
      location: " Hall 1, Building A , Golden Street , Southafrica",
    },
  ];
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
      {/* <Flex
        flexDirection={{ sm: "row", base: "column" }}
        _hover={{
          // transform: "scale(1.1)",
          boxShadow: "5px 5px 5px rgba(252, 187, 187, .8)",
        }}
        bg="#ddd"
        w={{ lg: "80%", sm: "90%" }}
        p="30px"
        borderRadius="20px"
        alignItems="flex-start"
        gap="10px"
      >
        <Image src="/assets/team1.jpg" w="100px" borderRadius="50%" mt="20px" />
        <VStack>
          <VStack
            bg="white"
            w="100%"
            p={{ lg: "40px", base: "20px" }}
            borderRadius="10px"
            alignItems="flex-start"
          >
            <Text
              bg="#FCBBBB"
              fontSize={{ lg: "16px", md: "14px", base: "12px" }}
              fontWeight={600}
              p="5px 10px"
              borderRadius="20px"
            >
              09.00 AM - 10.30 AM
            </Text>
            <Text
              fontSize={{ lg: "24px", md: "20px", base: "16px" }}
              fontWeight={700}
              color="#1b273d"
            >
              Wait is Over! Stony Brook Captures Conference
            </Text>
            <Text fontSize="16px">By Riaz Sagar , Logichunt Inc.</Text>
          </VStack>
          <VStack
            alignItems="flex-start"
            fontSize={{ lg: "18px", md: "16px", sm: "14px", base: "12px" }}
          >
            <Text color="#585555">
              Meh synth Schlitz, tempor duis single-origin coffee ea next level
              ethnic fingerstache fanny pack nostrud. Photo booth anim 8-bit
              hella, PBR 3 wolf moon beard Helvetica. Salvia esse flexitarian
              Truffaut synth art party deep v chillwave.
            </Text>
            <Text>
              <span style={{ color: "#7F7BE2", fontWeight: 700 }}>
                Location:{" "}
              </span>
              Hall 1, Building A , Golden Street , Southafrica
            </Text>
          </VStack>
        </VStack>
      </Flex> */}

      {/* {teams.map((team, index) => (
        <Box
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
          <Flex
            flexDirection={{ sm: "row", base: "column" }}
            bg="white"
            p={{ lg: "40px 20px", base: "20px" }}
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
              >
                {team.name}
              </Text>
              <Text fontSize="16px">{team.author}</Text>
            </VStack>
          </Flex>
        </Box>
      ))} */}
         {teams.map((team, index) => (
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
