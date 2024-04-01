import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Button, HStack, Image, Text } from "@chakra-ui/react";
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
      bg="rgba(27, 39, 61, .95)"
      zIndex="1000"
    >
      <HStack p="10px 60px" justifyContent="space-between">
        <Image src="/assets/agi.png" width="13%" />
        <HStack gap={30} fontSize={18}>
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
          {/* <Link
            to="/contact"
            style={{ textDecoration: "none", color: "white" }}
          >
            <Text _hover={{ color: "#9DC3DA", cursor: "pointer" }}>Əlaqə</Text>
          </Link> */}
          <Link to="/contact">
            <Button
              p="10px 20px"
              fontSize="16px"
              borderRadius="20px"
              cursor="pointer"
              bg="#9DC3DA"
              color="white"
              border="none"
              _hover={{color:"#9DC3DA", bg:"white"}}
            >
              <HStack>
                <Text>Əlaqə</Text>
                <ArrowForwardIcon />
              </HStack>
            </Button>
          </Link>
        </HStack>
      </HStack>
    </Box>
  );
};

export default Header;
