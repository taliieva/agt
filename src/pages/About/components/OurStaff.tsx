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
      p={{ md: "100px 20px", base: "50px 20px" }}
    >
      <Heading color="#1b273d" fontSize={{base:"24px", sm: "30px", lg: "40px" }} fontWeight={600}>
        Komandamızla tanış olun
      </Heading>
      <Text>Komanda üzvlərimiz</Text>
      <Grid
        gridTemplateColumns={{ md: "repeat(3,1fr)", sm: "repeat(2,1fr)" }}
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
            _hover={{
              transform: "scale(1.1)",
            }}
          >
            <Image
              key={index}
              src={photo}
              width={{ base: "200px", sm: "200px", lg: "200px", xl: "300px" }}
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
