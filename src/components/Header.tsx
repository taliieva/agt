import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, HStack, Image, Text } from "@chakra-ui/react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const showToggle = () => {
    setOpenMenu(!openMenu);
  };
  const [scrollBG, setScrollBG] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const threshold = 100;
      const currentScrollY = window.scrollY;
      if (currentScrollY > threshold) {
        setScrollBG(true);
      } else {
        setScrollBG(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box
      fontFamily="Oswald"
      // mb="50px"
      w="100%"
      height={{ md: "90px", base: "50px" }}
      position="fixed"
      top="0"
      left="0"
      right="0"
      bg="rgba(27, 39, 61, .95)"
      zIndex="1000"
      // transition="background-color 0.3s ease"
    >
      <HStack
        alignItems="center"
        p={{ md: "10px 60px", sm: "10px 40px", base: "10px 20px" }}
        justifyContent="space-between"
      >
        <Link to="/">
          <Image src="/assets/agi.png" width={{ md: "150px", base: "100px" }} />
        </Link>
        <Box display={{ md: "none", base: "block" }} onClick={showToggle}>
          <FontAwesomeIcon icon={faBars} color="white" />
        </Box>
        <Flex
          gap={{ lg: "30px", md: "20px", base: "10px" }}
          fontSize="20px"
          flexDirection={{ md: "row", base: "column" }}
          alignItems="center"
          justifyContent="flex-end"
          display={{ md: "flex", base: openMenu ? "flex" : "none" }}
          position={{ base: "absolute", md: "initial" }}
          bg={{ base: "rgba(27, 39, 61, .95)", md: "none" }}
          width="100%"
          left="0"
          top={{ md: "90px", base: "50px" }}
          padding="20px 0"
        >
          <Link
            to="/"
            style={{ textDecoration: "none", color: "rgba(255,255,255,0.7" }}
          >
            <Text _hover={{ color: "#fff", cursor: "pointer" }}>
              Əsas səhifə
            </Text>
          </Link>
          <Link
            to="/about"
            style={{ textDecoration: "none", color: "rgba(255,255,255,0.7" }}
          >
            <Text _hover={{ color: "#fff", cursor: "pointer" }}>
              Haqqımızda
            </Text>
          </Link>
          <Link
            to="/event"
            style={{ textDecoration: "none", color: "rgba(255,255,255,0.7" }}
          >
            <Text _hover={{ color: "#fff", cursor: "pointer" }}>Tədbirlər</Text>
          </Link>
          <Link
            to="/blog"
            style={{ textDecoration: "none", color: "rgba(255,255,255,0.7)" }}
          >
            <Text _hover={{ color: "#fff", cursor: "pointer" }}>Xəbərlər</Text>
          </Link>
          <Link to="/contact">
            <Box
              p="10px 40px"
              fontSize="20px"
              cursor="pointer"
              bg="#ec398b"
              color="white"
              border="none"
              transition="border-radius 0.5s ease"
              _hover={{
                borderRadius: "15px",
              }}
            >
              <Text>Əlaqə</Text>
            </Box>
          </Link>
        </Flex>
      </HStack>
    </Box>
  );
};

export default Header;
