import React, { useState } from "react";
import {
  Box,
  Button,
  Grid,
  Heading,
  Image,
  Img,
  Text,
  VStack,
} from "@chakra-ui/react";

const TeamSection = () => {
  const photos = [
    "/assets/team1.jpg",
    "/assets/team2.jpg",
    "/assets/team3.jpg",
    "/assets/team4.jpg",
    "/assets/team5.jpg",
    "/assets/team6.jpg",
  ];

  return (
    <VStack p="100px 0" bg="#7F7BE2" gap="50px">
      <Heading color="white" fontSize="30px">
        OUR TEAMS
      </Heading>
      <Grid gridTemplateColumns="repeat(3,1fr)" gap={50}>
        {photos.map((photo, index) => (
          <Box
            position={"relative"}
            width="100%"
            display={"flex"}
            justifyContent="center"
            alignItems="center"
          >
            <Image
              key={index}
              src={photo}
              w="300px"
              display={"block"}
              borderRadius="10px"
            />
            <Box
              borderRadius="10px"
              height="100%"
              width="100%"
              position="absolute"
              top={0}
              right={0}
              background="rgba(0,0,0,0.7)"
              display={"flex"}
              justifyContent="center"
              alignItems="flex-start"
              p={10}
              opacity="0"
              transition="0.6s"
              _hover={{
                opacity: "1",
                transitionDuration: "1s",
              }}
              backdropFilter="blur(3px)"
            >
              <Text fontSize="18px" color={"white"} fontWeight={600}>
                Team {index + 1}
              </Text>
            </Box>
          </Box>
        ))}
      </Grid>
      <Button
        p="10px 30px"
        bg={"white"}
        color="#68CE65"
        border="1px solid #68CE65"
        cursor="pointer"
        fontSize="16px"
        _hover={{
          color: "white",
          bg: "#68CE65",
          borderRadius: "20px",
          transitionDuration: "1s",
        }}
      >
        Daha çox
      </Button>
    </VStack>
  );
};

export default TeamSection;
