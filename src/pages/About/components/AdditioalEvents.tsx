import { Box, Grid, Heading, Text, VStack } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useAboutSecond } from "../../../hooks/useAboutSecond.tsx";

const AdditioalEvents = () => {
  const {aboutSecond, fetchUseAboutSecond} = useAboutSecond();
  useEffect(() => {
    fetchUseAboutSecond();
  }, []);
  return (
    <VStack
    w="100%"
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
      <Grid gridTemplateColumns={{ lg: "repeat(2,1fr)" }} gap="20px" w={{lg:"90%", base:"100%"}}>
        {aboutSecond?.map((item, index)=>(
          <Box
          key={index}
          bg="white"
          padding="40px"
          borderRadius="15px"
          transition="background-color 0.8s ease, color 0.8s ease"
          _hover={{ bg: "#efa506", color: "white" }}
        >
          <Text fontSize="18px" fontWeight={600}>
            {item?.title}
          </Text>
          <Text fontStyle="italic" mt="10px">
            {item?.date}
          </Text>
        </Box>
        ))}
        
      </Grid>
    </VStack>
  );
};

export default AdditioalEvents;
