import React from "react";
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
import { Link } from "react-router-dom";

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
    <VStack
      p={{ md: "100px 20px", base: "80px 20px" }}
      bg="#7F7BE2"
      gap="50px"
      w="100%"
    >
      <Heading
        color="white"
        fontSize={{ base: "24px", sm: "30px", lg: "40px" }}
      >
        Komandamız
      </Heading>
      <Grid
        gridTemplateColumns={{ md: "repeat(3,1fr)", sm: "repeat(2,1fr)" }}
        gap={50}
      >
        {photos.map((photo, index) => (
          <Box
            key={index}
            position={"relative"}
            width="100%"
            display={"flex"}
            justifyContent="center"
            alignItems="center"
            _hover={{
              transform: "scale(1.1)",
              transition: "transform 0.3s ease",
            }}
          >
            <Image
              key={index}
              src={photo}
              width={{ base: "200px", xl: "300px" }}
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
              background="rgba(0,0,0,0.3)"
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
        <Link to="/about">Daha çox</Link>
      </Button>
    </VStack>
  );
};

export default TeamSection;
