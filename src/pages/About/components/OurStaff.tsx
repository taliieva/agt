import { Box, Grid, Heading, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";

const OurStaff = () => {
  const photos = [
    "/assets/team1.jpg",
    "/assets/team2.jpg",
    "/assets/team3.jpg",
    "/assets/team4.jpg",
    "/assets/team5.jpg",
    "/assets/team6.jpg",
  ];
  return (
    <VStack
      gap="20px"
      bg="rgba(50, 51, 51, 0.1)"
      p={{ md: "100px 20px", base: "80px 20px" }}
      fontFamily="Poppins"
      w="100%"
    >
      <Heading
        color="#1b273d"
        fontSize={{ base: "24px", sm: "30px", lg: "40px" }}
        fontWeight={900}
        textTransform="uppercase"
      >
        Komandamızla tanış olun
      </Heading>
      <Text color="rgba(50, 51, 51, .8)">Komanda üzvlərimiz</Text>
      <Grid
        // w="100%"
        w={{ lg: "90%", base: "90%", xl:"80%" }}
        gridTemplateColumns={{ lg: "repeat(3,1fr)", md: "repeat(2,1fr)" }}
        gap="50px"
        mt={20}
      >
        {photos.map((photo, index) => (
          <Box
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
              src={photo}
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
              transition="0.6s"
              _hover={{
                opacity: "1",
                transitionDuration: "1s",
              }}
              // backdropFilter="blur(3px)"
            >
              <Text fontSize="18px" color={"white"} fontWeight={600}>
                Team {index + 1}
              </Text>
              <Text color="white">About the team</Text>
            </VStack>
          </Box>
        ))}
      </Grid>
    </VStack>
  );
};

export default OurStaff;
