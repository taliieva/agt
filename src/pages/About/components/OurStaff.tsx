import {
  Box,
  Grid,
  Heading,
  Image,
  Text,
  VStack,
  useEditable,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useTeams } from "../../../hooks/useTeams.tsx";

const OurStaff = () => {
  const { teams, fetchTeams } = useTeams();
  useEffect(() => {
    fetchTeams();
  }, []);
  return (
    <VStack
      gap="20px"
      bgImage="/assets/speakers-bg-black.jpg"
      bgAttachment="fixed"
      bgSize="cover"
      bgRepeat="no-repeat"
      // bg="rgba(50, 51, 51, 0.1)"
      p={{ md: "100px 20px", base: "80px 20px" }}
      fontFamily="Poppins"
      w="100%"
    >
      <Heading
        color="white"
        fontSize={{ base: "24px", sm: "30px", lg: "40px" }}
        fontWeight={900}
        textTransform="uppercase"
      >
        Komandamızla tanış olun
      </Heading>
      <Text 
      // color="rgba(50, 51, 51, .8)"
      color="white"
      >Komanda üzvlərimiz</Text>
      <Grid
        // w="100%"
        w={{ lg: "90%", base: "90%", xl: "80%" }}
        gridTemplateColumns={{ lg: "repeat(3,1fr)", md: "repeat(2,1fr)" }}
        gap="50px"
        mt={20}
      >
        {teams.map((team, index) => (
          <Box
            key={index}
            position={"relative"}
            width="100%"
            display={"flex"}
            justifyContent="center"
            alignItems="center"
            transition="transform 0.5s ease"
            _hover={{
              transform: "scale(1.1)",
            }}
          >
            <Image
              key={index}
              src="/assets/team1.jpg"
              // width={{ base: "200px", sm: "200px", lg: "200px", xl: "300px" }}
              w="100%"
              display={"block"}
              borderRadius="10px"
            />
            <VStack
              borderRadius="10px"
              height="100%"
              width="100%"
              position="absolute"
              top={0}
              right={0}
              background="rgba(0,0,0,0.7)"
              display={"flex"}
              justifyContent="flex-end"
              alignItems="flex-start"
              p={10}
              opacity="0"
              transition="all 0.6s ease"
              _hover={{
                opacity: "1",
                transitionDuration: "1s",
              }}
            >
              <Text fontSize="18px" color={"white"} fontWeight={600}>
                {team?.name} {team?.surname}
              </Text>
              <Text color="white">{team?.position}</Text>
            </VStack>
          </Box>
        ))}
      </Grid>
    </VStack>
  );
};

export default OurStaff;
