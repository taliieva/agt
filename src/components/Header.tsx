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
      const threshold = 100; // Eşik değeri - Header'ın yüksekliğine göre ayarlayabilirsiniz
      const currentScrollY = window.scrollY;
      if (currentScrollY > threshold) {
        setScrollBG(true);
      } else {
        setScrollBG(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box
      w="100%"
      height={{ md: "90px", base: "50px" }}
      position="fixed"
      top="0"
      left="0"
      right="0"
      bg={scrollBG ? "rgba(27, 39, 61, .95)" : "transparent"}
      zIndex="1000"
    >
      <HStack
        p={{ md: "10px 60px", sm: "10px 40px", base: "10px 20px" }}
        justifyContent="space-between"
      >
        <Image src="/assets/agi.png" width={{ md: "150px", base: "100px" }} />
        <Box display={{ md: "none", base: "block" }} onClick={showToggle}>
          <FontAwesomeIcon icon={faBars} color="white" />
        </Box>
        <Flex
          gap={{ lg: "30px", md: "20px", base: "10px" }}
          fontSize={18}
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
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <Text _hover={{ color: "#9DC3DA", cursor: "pointer" }}>
              Əsas səhifə
            </Text>
          </Link>
          <Link to="/about" style={{ textDecoration: "none", color: "white" }}>
            <Text _hover={{ color: "#9DC3DA", cursor: "pointer" }}>
              Haqqımızda
            </Text>
          </Link>
          <Link to="/event" style={{ textDecoration: "none", color: "white" }}>
            <Text _hover={{ color: "#9DC3DA", cursor: "pointer" }}>
              Tədbirlər
            </Text>
          </Link>
          <Link to="/blog" style={{ textDecoration: "none", color: "white" }}>
            <Text _hover={{ color: "#9DC3DA", cursor: "pointer" }}>Blog</Text>
          </Link>
          <Link to="/contact">
            <Button
              p="10px 20px"
              fontSize="16px"
              borderRadius="20px"
              cursor="pointer"
              bg="#9DC3DA"
              color="white"
              border="none"
              _hover={{ color: "#9DC3DA", bg: "white" }}
            >
              <HStack>
                <Text>Əlaqə</Text>
                <ArrowForwardIcon />
              </HStack>
            </Button>
          </Link>
        </Flex>
      </HStack>
    </Box>
  );
};

export default Header;
