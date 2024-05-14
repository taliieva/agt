import { Box, Flex, Grid, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const SocialSection = () => {
  const contact = [
    {
      id: 1,
      icon: faEnvelope,
      label: "E-mail",
      value: "contact@contact.com",
    },
    {
      id: 2,
      icon: faLocationDot,
      label: "Ünvan",
      value: "location",
    },
    {
      id: 3,
      icon: faPhone,
      label: "Telefon",
      value: "055 555 55 55",
    },
  ];
  return (
    <Flex w="100%" alignItems="center" justifyContent="center">
    <Grid
      gridTemplateColumns={{ md: "repeat(3,1fr)", base: "repeat(1,1fr)" }}
      // flexDirection={{md:"row"}}
      alignItems="center"
      justifyItems="center"
      width="95%"
      p={{ md: "100px", base: "80px 20px" }}
      justifyContent="center"
      gap={{ lg: "40px", base: "20px" }}
    >
      {contact.map((item, index) => (
        <VStack
          key={index}
          gap={{ md: "20px", base: "10px" }}
          // w={{ base: "25%", xl: "25%" }}
          w={{ lg: "90%",md:"230px", base: "100%" }}
          // w="100%"
          
          boxShadow="0px 4px 6px rgba(0, 0, 0, 0.5)"
          transition={"box-shadow 0.5s ease"}
          _hover={{ boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px' }}
          p={{ lg: "50px 0", md: "30px 0", base: "20px 0" }}
          borderRadius="10px"
        >
          <FontAwesomeIcon icon={item.icon} color="#7F7BE2" fontSize="30px" />
          <Text
            color="rgba(27, 39, 61, .95)"
            fontSize={{ lg: "18px", base: "16px" }}
            fontWeight={600}
          >
            {item.label}
          </Text>
          <Text  fontSize={{ lg: "18px", base: "14px" }}>{item.value}</Text>
        </VStack>
      ))}
    </Grid>
    </Flex>
  );
};

export default SocialSection;
