import {
  Box,
  Button,
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
    <VStack bg="#9DC3DA" color={"white"} alignItems="center" gap="40px" p={20}>
      <Heading fontSize="40px">JOIN NEWSLETTER</Heading>
      <HStack alignSelf="center" w="40%">
        <Input
          placeholder="Enter your email address"
          w="70%"
          padding="10px 20px"
          outline="none"
          fontSize="14px"
          border={"none"}
        />
        <Button
          width="20%"
          padding="10px 20px"
          fontSize="16px"
          bg="#68CE65"
          border="none"
          color={"white"}
        >
          Subscribe
        </Button>
      </HStack>
      <HStack
        w="100%"
        justifyContent="center"
        alignItems="flex-start"
        gap="50px"
        padding={10}
      >
        <Image src="/assets/agi.png" width="10%" />
        <VStack alignItems="flex-start">
          <Text mt={0} fontWeight={600}>Venue Location</Text>
          <Text>18-21 December,2021</Text>
          <Text>85 Golden Street, Darlinghurst ERP 2021, United States</Text>
        </VStack>
        <VStack alignItems="flex-start">
          <Text mt={0} fontWeight={600}>Social Connection</Text>
          <Text>You should connect social area for Any update</Text>
        </VStack>
      </HStack>
    </VStack>
  );
};

export default Footer;
