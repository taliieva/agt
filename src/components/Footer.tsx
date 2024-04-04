import {
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Image,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <VStack
      bg="rgba(27, 39, 61, .95)"
      color={"white"}
      alignItems="center"
      gap="40px"
      p="100px 0"
    >
      <Heading fontSize={{ md: "40px", sm: "30px", base: "24px" }}>
        JOIN NEWSLETTER
      </Heading>
      <HStack
        alignSelf="center"
        w={{ xl: "40%", lg: "50%", sm: "80%", base: "90%" }}
      >
        <Input
          bg="white"
          placeholder="Enter your email address"
          w="70%"
          padding="10px 20px"
          outline="none"
          fontSize="14px"
          border="1px solid white"
        />
        <Button
          width={{ md: "20%", base: "40%" }}
          // padding="10px"
          fontSize="16px"
          bg="#68CE65"
          border="none"
          color={"white"}
        >
          Subscribe
        </Button>
      </HStack>
      <Flex
        flexDirection={{ md: "row", base: "column" }}
        w={{ base: "80%", md: "100%" }}
        justifyContent="center"
        alignItems="flex-start"
        gap="50px"
        padding="10px"
      >
        <Image
          src="/assets/agi.png"
          width={{ lg: "200px", md: "100px", base: "100px" }}
        />
        <VStack alignItems="flex-start">
          <Text mt={0} fontWeight={600}>
            Venue Location
          </Text>
          <Text>18-21 December,2021</Text>
          <Text>85 Golden Street, Darlinghurst ERP 2021, United States</Text>
        </VStack>
        <VStack alignItems="flex-start">
          <Text mt={0} fontWeight={600}>
            Social Connection
          </Text>
          <Text>You should connect social area for Any update</Text>
        </VStack>
      </Flex>
    </VStack>
  );
};

export default Footer;
