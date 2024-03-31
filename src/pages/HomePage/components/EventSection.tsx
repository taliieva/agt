import { HStack, Heading, VStack, Image, Text, Box } from "@chakra-ui/react";
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
    <VStack bg="#7F7BE2" p="100px 0">
      <Heading fontSize="40px" fontWeight="700" color="white" mb={50}>Events</Heading>
      <HStack
        bg="#CBC9C9"
        w="80%"
        p={20}
        borderRadius="20px"
        alignItems="flex-start"
      >
        <Image src="/assets/team1.jpg" w="90px" borderRadius="50%" mt="20px" />
        <VStack>
          <VStack
            bg="white"
            w="100%"
            p={40}
            borderRadius="20px"
            alignItems="flex-start"
          >
            <Text
              bg="#FCBBBB"
              fontSize="16px"
              fontWeight={600}
              p={5}
              borderRadius="20px"
            >
              09.00 AM - 10.30 AM
            </Text>
            <Text fontSize="24px" fontWeight={700} color="#1b273d">
              Wait is Over! Stony Brook Captures Conference
            </Text>
            <Text fontSize="16px">By Riaz Sagar , Logichunt Inc.</Text>
          </VStack>
          <VStack alignItems="flex-start" fontSize="18px">
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
      </HStack>
      {teams.map((team, index) => (
        <Box bg="#CBC9C9" w="80%" p={20} borderRadius="20px">
          <HStack bg="white" p="30px 20px" borderRadius="10px">
            <Image src={team.image} w="90px" borderRadius="50%" />
            <VStack w="100%" p={30} borderRadius="20px" alignItems="flex-start">
              <Text
                bg="#FCBBBB"
                fontSize="16px"
                fontWeight={600}
                p={5}
                borderRadius="20px"
              >
                {team.time}
              </Text>
              <Text fontSize="24px" fontWeight={700} color="#1b273d">
                {team.name}
              </Text>
              <Text fontSize="16px">{team.author}</Text>
            </VStack>
          </HStack>
        </Box>
      ))}
    </VStack>
  );
};

export default EventSection;
