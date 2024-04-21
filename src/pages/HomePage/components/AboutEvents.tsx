import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAboutFirst } from "../../../hooks/useAbout.tsx";

const AboutEvents = () => {
  const { aboutFirst, fetchUseAbout } = useAboutFirst();
  useEffect(() => {
    fetchUseAbout();
  }, []);
  return (
    <VStack
      p={{ md: "100px 30px", base:"80px 15px" }}
      gap={{ base: "20px", lg: "50px" }}
      fontFamily="Poppins"
    >
      <Flex
        flexDirection={{ base: "column", lg: "row" }}
        justifyContent="center"
        gap={{ sm: "40px", base: "20px" }}
        alignItems={{ lg: "flex-start", base: "center" }}
      >
        <VStack
          // w={{ base: "80%"}}
          w={{xl:"50%", base:"100%"}}
          alignItems="flex-start"
          gap="20px"
        >
          <Heading
            fontSize={{ base: "30px", sm: "35px", xl: "40px" }}
            // fontSize="40px"
            color="#1b273d"
            fontWeight={900}
            textTransform="uppercase"
            fontFamily="Poppins"
          >
            {aboutFirst?.title}
            {/* Azərbaycan gənclər təşkilatı */}
          </Heading>
          <Text
            fontSize={{ sm: "16px", base: "14px" }}
            color="#ec398b"
            fontFamily="Oswald"
            letterSpacing="1px"
            fontWeight={500}
          >
            {aboutFirst?.subTitle}
          </Text>
          <Text
            w={{lg:"90%", base:"100%"}}
            fontSize={{ base: "12px", xl: "14px" }}
            letterSpacing="1px"
            color="rgba(50, 51, 51, .8)"
            fontFamily="Poppins"
          >
            {aboutFirst?.description}
          </Text>
          
            {/* <Box
            alignSelf={{lg:"initial", base:"center"}}
              fontFamily="Oswald"
              p="10px 40px"
              // w="40%"
              fontSize="20px"
              cursor="pointer"
              bg="#554bb9"
              color="white"
              border="none"
              transition="border-radius 0.5s ease"
              _hover={{
                borderRadius: "15px",
              }}
            >
              <Link to="/about">
              Daha çox
              </Link>
            </Box> */}
            <Link className="lgx-btn " to="/about" >
              <Text>
              Daha çox
              </Text>
              </Link>
          
        </VStack>
        <Image
        ml="30px"
        alignSelf="center"
          src="/assets/about-sp.jpg"
          w={{ base: "70%", lg: "30%" }}
          borderRadius="10px"
          height="100%"
        />
      </Flex>
    </VStack>
  );
};

export default AboutEvents;
