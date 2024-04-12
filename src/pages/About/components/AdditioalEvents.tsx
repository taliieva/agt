import { Box, Grid, Heading, Text, VStack } from "@chakra-ui/react";
import React from "react";

const AdditioalEvents = () => {
  return (
    <VStack
      bgImage={"/assets/schedule-bg-pattern.png"}
      bgSize="cover"
      bgColor="#554bb9"
      fontFamily="Poppins"
      p={{ md: "100px 20px", base: "80px 20px" }}
      gap={{ base: "20px", lg: "50px" }}
    >
      <Heading
        color="white"
        fontSize={{ base: "20px", sm: "25px", lg: "35px" }}
      >
        AGT olaraq aşağıda göstərilən tədbirlərin təşkilində iştirak etmişik
      </Heading>
      <Grid gridTemplateColumns={{ lg: "repeat(2,1fr)" }} gap="20px">
        <Box
          bg="white"
          padding="40px"
          borderRadius="15px"
          transition="background-color 0.8s ease, color 0.8s ease"
          _hover={{ bg: "#efa506", color: "white" }}
        >
          <Text fontSize="18px" fontWeight={600}>
            FIFA – Futbol üzrə Dünya Çempionatı (qadınlar arasında)
          </Text>
          <Text fontStyle="italic" mt="10px">
            2012
          </Text>
        </Box>

        <Box
          bg="white"
          padding="40px"
          borderRadius="15px"
          transition="background-color 0.8s ease, color 0.8s ease"
          _hover={{ bg: "#efa506", color: "white" }}
        >
          <Text fontSize="18px" fontWeight={600}>
            FIFA – Futbol üzrə Dünya Çempionatı (qadınlar arasında)
          </Text>
          <Text fontStyle="italic" mt="10px">
            2012
          </Text>
        </Box>

        <Box
          bg="white"
          padding="40px"
          borderRadius="15px"
          transition="background-color 0.8s ease, color 0.8s ease"
          _hover={{ bg: "#efa506", color: "white" }}
        >
          <Text fontSize="18px" fontWeight={600}>
            FIFA – Futbol üzrə Dünya Çempionatı (qadınlar arasında)
          </Text>
          <Text fontStyle="italic" mt="10px">
            2012
          </Text>
        </Box>

        <Box
          bg="white"
          padding="40px"
          borderRadius="15px"
          transition="background-color 0.8s ease, color 0.8s ease"
          _hover={{ bg: "#efa506", color: "white" }}
        >
          <Text fontSize="18px" fontWeight={600}>
            FIFA – Futbol üzrə Dünya Çempionatı (qadınlar arasında)
          </Text>
          <Text fontStyle="italic" mt="10px">
            2012
          </Text>
        </Box>

        <Box
          bg="white"
          padding="40px"
          borderRadius="15px"
          transition="background-color 0.8s ease, color 0.8s ease"
          _hover={{ bg: "#efa506", color: "white" }}
        >
          <Text fontSize="18px" fontWeight={600}>
            FIFA – Futbol üzrə Dünya Çempionatı (qadınlar arasında)
          </Text>
          <Text fontStyle="italic" mt="10px">
            2012
          </Text>
        </Box>

        <Box
          bg="white"
          padding="40px"
          borderRadius="15px"
          transition="background-color 0.8s ease, color 0.8s ease"
          _hover={{ bg: "#efa506", color: "white" }}
        >
          <Text fontSize="18px" fontWeight={600}>
            FIFA – Futbol üzrə Dünya Çempionatı (qadınlar arasında)
          </Text>
          <Text fontStyle="italic" mt="10px">
            2012
          </Text>
        </Box>
      </Grid>
    </VStack>
  );
};

export default AdditioalEvents;
