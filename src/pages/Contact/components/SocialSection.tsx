import { HStack, Text, VStack } from "@chakra-ui/react";
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
            value: "contact@contact.com"
        },
        {
            id: 2,
            icon: faLocationDot,
            label: "Ünvan",
            value: "location"
        },
        {
            id: 3,
            icon: faPhone,
            label: "Telefon",
            value: "055 555 55 55"
        },
    ]
  return (
    <HStack width="100%" p="100px 20px" justifyContent="center" gap="50px">
        {contact.map((item, index)=>(
            <VStack key={index} gap="20px" w="300px" boxShadow="0px 4px 6px rgba(0, 0, 0, 0.5)" _hover={{boxShadow:"0px 10px 10px rgba(127, 123, 226, .95)"}} p="50px" borderRadius="10px">
            <FontAwesomeIcon icon={item.icon} color="#7F7BE2" fontSize="30px"/>
            <Text color="rgba(27, 39, 61, .95)" fontSize="18px" fontWeight={600}>{item.label}</Text>
            <Text>{item.value}</Text>
          </VStack>
        ))}
    </HStack>
  );
};

export default SocialSection;
