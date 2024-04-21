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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";
import React from "react";
import { Link } from "react-router-dom";
const yearDate = new Date().getFullYear();

const Footer = () => {
  return (
    <VStack
      bg="rgba(27, 39, 61, .95)"
      color={"white"}
      alignItems="center"
      gap="40px"
      p={{ md: "100px 20px", base: "50px 20px" }}
      fontFamily="Oswald"
    >
      <Heading
        fontSize={{ md: "36px", sm: "30px", base: "24px" }}
        fontWeight={400}
      >
        JOIN NEWSLETTER
      </Heading>
      <HStack
        alignSelf="center"
        w={{ xl: "50%", lg: "50%", sm: "80%", base: "90%" }}
      >
        <Input
          fontFamily="Poppins"
          color="black"
          bg="rgba(255, 255, 255, .8)"
          placeholder="Enter your email address"
          w="80%"
          padding="10px 20px"
          height="55px"
          fontSize="14px"
          border="1px rgba(255, 255, 255, .8)"
          _focus={{ bg: "white" }}
        />
        {/* <VStack
          width={{ md: "20%", base: "40%" }}
          alignItems="center"
          justifyContent="center"
          height="55px"
          bg="#efa506"
          border="none"
          color={"white"}
          transition={"all 1s ease"}
          _hover={{ bg: "#ec398b", borderRadius: "15px" }}
        >
          <Text fontSize="18px" letterSpacing="1px">
            Subscribe
          </Text>
        </VStack> */}
        <Link style={{width:'25%', fontSize:'18px'}} className="lgx-btn lgx-submit" to='#'>
        <Text>Subscribe</Text>
        </Link>
      </HStack>
      <Flex
        flexDirection={{ md: "row", base: "column" }}
        w={{ base: "80%", md: "100%" }}
        justifyContent="center"
        alignItems="flex-start"
        gap="50px"
        padding="10px"
      >
        <Image src="/assets/agi.png" w={"250px"} />
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
          <HStack>
            <Box
              padding="15px 20px"
              bg="#999"
              borderRadius="50%"
              transition={"all 0.5s ease"}
              _hover={{ bg: "#efa506", color: "white" }}
            >
              <FontAwesomeIcon icon={faFacebookF as IconProp} fontSize="18px" />
            </Box>
            <Box
              padding="15px 20px"
              bg="#999"
              borderRadius="50%"
              transition={"all 0.5s ease"}
              _hover={{ bg: "#efa506", color: "white" }}
            >
              <FontAwesomeIcon icon={faInstagram as IconProp} fontSize="18px" />
            </Box>
          </HStack>
        </VStack>
      </Flex>
      <Text>
        <span style={{ color: "#efa506" }}>©</span> {yearDate} template IS
        POWERED BY <span style={{ color: "#efa506" }}>ZeStudio</span>. THE
        PROPERTY OF THEIR OWNERS.
      </Text>
    </VStack>
  );
};

export default Footer;
