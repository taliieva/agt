import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import data from "../../../data.json";
const BlogSection = () => {
  const blogData = data.blogs.slice(0, 3);

  return (
    <VStack
      p={{ md: "100px 20px", base: "50px 20px" }}
      gap={{md:"50px", base:"30px"}}
      w="100%"
      fontFamily="Oswald"
    >
      <Heading
        color="#1b273d"
        fontSize={{ base: "24px", sm: "30px", lg: "40px" }}
        fontWeight={900}
        textTransform="uppercase"
      >
        Xəbərlər
      </Heading>
      <Grid
        w="80%"
        flexDirection={{ sm: "row", base: "column" }}
        justifyContent="center"
        alignItems="center"
        gap={30}
        gridTemplateColumns={{lg:"repeat(3,1fr)", md:"repeat(2,1fr)"}}
      >
        {blogData.map((blogs, index) => (
          <Flex
            flexDirection="column"
            cursor="pointer"
            key={index}
            alignItems="flex-start"
            // w={{ xl: "25%", md: "30%", sm: "40%", base: "70%" }}
            w="100%"
            p="15px"
            borderRadius="10px"
            boxShadow="1px 1px 1px 1px rgba(0, 0, 0, 0.1), -1px -1px 1px 1px rgba(0, 0, 0, 0.1)"
            gap="10px"
            transition="transform 1s ease"
            _hover={{
              transform: "scale(1.1)",
              boxShadow: "0px 5px 5px rgba(127, 123, 226, .8)",
            }}
          >
            <Image src={blogs.imageSrc} w="100%" />
            <Text
              color="rgba(50, 51, 51, .8)"
              fontSize={{ lg: "14px", md: "12px", base: "10px" }}
            >
              {blogs.date} | {blogs.author} | {blogs.category}
            </Text>
            <Text
              fontSize={{ lg: "18px", md: "16px", base: "12px" }}
              fontWeight={700}
              color="#1b273d"
              _hover={{
                color: "#554bb9",
              }}
            >
              {blogs.content}
            </Text>
            <Box
              padding="10px"
              border="none"
              bg={"white"}
              color="#7F7BE2"
              cursor={"pointer"}
              boxShadow="0px 4px 6px rgba(0, 0, 0, 0.3)"
              fontSize={{ lg: "16px", base: "14px" }}
              fontWeight={400}
              transition="border-radius 0.5s ease"
              _hover={{ bg: "white", borderRadius: "15px" }}
            >
              <Link to={`/blog/${blogs.id}`}>Read more</Link>
            </Box>
          </Flex>
        ))}
      </Grid>

      <Link to="/blog">
        <Box
          fontFamily="Oswald"
          p="10px 40px"
          w="100%"
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
          Daha çox
        </Box>
      </Link>
    </VStack>
  );
};

export default BlogSection;
