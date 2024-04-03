import {
  HStack,
  Heading,
  VStack,
  Image,
  Text,
  Box,
  Flex,
} from "@chakra-ui/react";
import React from "react";

const EventSection = () => {
  const teams = [
    {
      id: 2,
      image: "/assets/team2.jpg",
      time: "09.00 AM - 10.30 AM",
      name: "Wait is Over! Stony Brook Captures Conference",
      author: "By Riaz Sagar , Logichunt Inc.",
    },
    {
      id: 3,
      image: "/assets/team3.jpg",
      time: "09.00 AM - 10.30 AM",
      name: "Wait is Over! Stony Brook Captures Conference",
      author: "By Riaz Sagar , Logichunt Inc.",
    },
    {
      id: 4,
      image: "/assets/team4.jpg",
      time: "09.00 AM - 10.30 AM",
      name: "Wait is Over! Stony Brook Captures Conference",
      author: "By Riaz Sagar , Logichunt Inc.",
    },
    {
      id: 5,
      image: "/assets/team5.jpg",
      time: "09.00 AM - 10.30 AM",
      name: "Wait is Over! Stony Brook Captures Conference",
      author: "By Riaz Sagar , Logichunt Inc.",
    },
    {
      id: 6,
      image: "/assets/team6.jpg",
      time: "09.00 AM - 10.30 AM",
      name: "Wait is Over! Stony Brook Captures Conference",
      author: "By Riaz Sagar , Logichunt Inc.",
    },
  ];
  return (
    <VStack bg="#7F7BE2" p={{md:"100px 20px", base:"50px 20px"}}>
      <Heading fontSize={{base:"24px", sm: "30px", lg: "40px" }} fontWeight="700" color="white" mb="50px">
        Tədbirlər
      </Heading>
      <Flex
        flexDirection={{ sm: "row", base: "column" }}
        _hover={{
          // transform: "scale(1.1)",
          boxShadow: "5px 5px 5px rgba(252, 187, 187, .8)",
        }}
        bg="#CBC9C9"
        w={{ lg: "80%", sm: "90%" }}
        p="20px"
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
            borderRadius="20px"
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
      </Flex>
      {teams.map((team, index) => (
        <Box
          bg="#CBC9C9"
          w={{ lg: "80%", sm: "90%" }}
          p="20px"
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
            p={{ lg: "40px", base: "20px" }}
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
      ))}
    </VStack>
  );
};

export default EventSection;
