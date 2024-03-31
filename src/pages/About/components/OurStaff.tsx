import { Box, Grid, Heading, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'

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
    <VStack gap={20} bg="rgba(50, 51, 51, 0.1)" p="100px 0">
        <Heading color="#1b273d" fontSize={"40px"} fontWeight={600}>MEET OUR STAFF</Heading>
        <Text>Welcome to our team</Text>
        <Grid gridTemplateColumns="repeat(3,1fr)" gap={50} mt={20}>
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
    </VStack>
  )
}

export default OurStaff
