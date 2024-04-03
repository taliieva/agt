import { Flex, Grid, HStack, Text, VStack } from "@chakra-ui/react";
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
    <Grid
      gridTemplateColumns={{ md: "repeat(3,1fr)", base: "repeat(1,1fr)" }}
      // flexDirection={{md:"row"}}
      alignItems="center"
      justifyItems="center"
      width="100%"
      p={{ md: "100px", base: "50px 20px" }}
      justifyContent="center"
      gap={{ md: "50px", base: "20px" }}
    >
      {contact.map((item, index) => (
        <VStack
          key={index}
          gap={{ md: "20px", base: "10px" }}
          // w={{ base: "25%", xl: "25%" }}
          w={{ md: "100%", base: "80%" }}
          boxShadow="0px 4px 6px rgba(0, 0, 0, 0.5)"
          _hover={{ boxShadow: "0px 10px 10px rgba(127, 123, 226, .95)" }}
          p={{ lg: "50px", md: "30px", base: "20px" }}
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
          <Text fontSize={{ lg: "18px", base: "14px" }}>{item.value}</Text>
        </VStack>
      ))}
    </Grid>
  );
};

export default SocialSection;
