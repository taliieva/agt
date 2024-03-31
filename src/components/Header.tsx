import { Box, HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Box
      height="80px"
      position="fixed"
      top="0"
      left="0"
      right="0"
      bg="white"
      zIndex="1000"
    >
      <HStack p="10px 60px" justifyContent="space-between">
        <Image src="/assets/agi.png" width="13%" />
        <HStack gap={30} fontSize={18}>
          <Link to="/" style={{textDecoration:"none", color:"black"}}>
            <Text _hover={{ color: "#9DC3DA", cursor: "pointer" }}>
              Əsas səhifə
            </Text>
          </Link>
          <Link to="/about" style={{textDecoration:"none", color:"black"}}>
            <Text _hover={{ color: "#9DC3DA", cursor: "pointer" }}>
              Haqqımızda
            </Text>
          </Link>
          <Link to="/event" style={{textDecoration:"none", color:"black"}}>
            <Text _hover={{ color: "#9DC3DA", cursor: "pointer" }}>
              Tədbirlər
            </Text>
          </Link>
          <Link to="/blog" style={{textDecoration:"none", color:"black"}}>
            <Text _hover={{ color: "#9DC3DA", cursor: "pointer" }}>Blog</Text>
          </Link>
          <Link to="/contact" style={{textDecoration:"none", color:"black"}}>
            <Text _hover={{ color: "#9DC3DA", cursor: "pointer" }}>Əlaqə</Text>
          </Link>
        </HStack>
      </HStack>
    </Box>
  );
};

export default Header;
