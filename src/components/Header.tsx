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
      w="100%"
      height={{ md: "90px", base: "50px" }}
      position="fixed"
      display="flex"
      justifyContent="center"
      top="0"
      left="0"
      right="0"
      bg="rgba(27, 39, 61, .95)"
      zIndex="1000"
    >
      <HStack
        w={{ lg: "85%", base: "100%" }}
        alignItems="center"
        p={{ lg: "10px 60px", base: "10px 5px" }}
        justifyContent="space-between"
      >
        <Link to="/">
          <Image src="/assets/agi.png" width={{ md: "150px", base: "100px" }} />
        </Link>
        <Box
          display={{ md: "none", base: "block" }}
          onClick={showToggle}
          pr="10px"
        >
          <FontAwesomeIcon icon={faBars} color="#554BB9" fontSize="20px" />
        </Box>
        <Flex
          gap={{ lg: "30px", md: "20px", base: "10px" }}
          fontSize={{ md: "20px", base: "16px" }}
          flexDirection={{ md: "row", base: "column" }}
          alignItems={{ md: "center", base: "flex-start" }}
          justifyContent="flex-end"
          display={{ md: "flex", base: openMenu ? "flex" : "none" }}
          position={{ base: "absolute", md: "initial" }}
          bg={{ base: "rgba(27, 39, 61, .95)", md: "none" }}
          width="100%"
          left="0"
          top={{ md: "90px", base: "50px" }}
          padding="20px 10px"
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
          <Link className="lgx-btn lgx-btn-red" to="/contact">
              <Text>Əlaqə</Text>
          </Link>
          {/* <Link to="/contact">
            <Box
              p={{ md: "10px 40px", base: "10px 20px" }}
              fontSize={{ md: "20px", base: "16px" }}
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
          </Link> */}
        </Flex>
      </HStack>
    </Box>
  );
};

export default Header;
