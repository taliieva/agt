import {
  Button,
  Flex,
  Grid,
  HStack,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      imageSrc: "/assets/blog1.jpg",
      date: "April 25, 2021",
      author: "Rizasgor",
      category: "Design",
      content: "Brooklyn Beta was the most important conferen best tristique",
    },
    {
      id: 2,
      imageSrc: "/assets/blog2.jpg",
      date: "April 25, 2021",
      author: "Rizasgor",
      category: "Design",
      content: "Brooklyn Beta was the most important conferen best tristique",
    },
    {
      id: 3,
      imageSrc: "/assets/blog3.jpg",
      date: "April 25, 2021",
      author: "Rizasgor",
      category: "Design",
      content: "Brooklyn Beta was the most important conferen best tristique",
    },
  ];
  return (
    <VStack p={{md:"100px 20px", base:"50px 20px"}} gap="50px" w="100%">
      <Heading color="#1b273d" fontSize={{base:"24px", sm: "30px", lg: "40px" }}>Xəbərlər</Heading>
      <Flex
        w="90%"
        flexDirection={{ sm: "row", base: "column" }}
        justifyContent="center"
        alignItems="center"
        gap={30}
      >
        {blogPosts.map((blogs, index) => (
          <Flex
            flexDirection="column"
            cursor="pointer"
            key={index}
            alignItems="flex-start"
            w={{ xl: "25%", md: "30%", sm: "40%", base: "70%" }}
            p="10px"
            borderRadius="10px"
            boxShadow="0px 4px 6px rgba(0, 0, 0, 0.5)"
            gap="10px"
            _hover={{
              transform: "scale(1.1)",
              boxShadow: "0px 10px 10px rgba(127, 123, 226, .95)",
            }}
          >
            <Image src={blogs.imageSrc} w="100%" />
            <Text
              color="#6B6B6B"
              fontSize={{ lg: "14px", md: "12px", base: "10px" }}
            >
              {blogs.date} | {blogs.author} | {blogs.category}
            </Text>
            <Text
              fontSize={{ lg: "18px", md: "16px", base: "12px" }}
              fontWeight={600}
              color="#7F7BE2"
            >
              {blogs.content}
            </Text>
            <Button
              padding="10px"
              border="none"
              bg={"white"}
              color="#7F7BE2"
              cursor={"pointer"}
              boxShadow="0px 4px 6px rgba(0, 0, 0, 0.3)"
              fontSize={{ lg: "16px", base: "14px" }}
            >
              Read more
            </Button>
          </Flex>
        ))}
      </Flex>
      <Button
        w={{ xl: "10%", sm: "20%", base: "60%" }}
        padding="15px 30px"
        bg="#7F7BE2"
        color="white"
        border="none"
        fontSize="16px"
        cursor="pointer"
        _hover={{
          borderRadius: "20px",
          transitionDuration: "2000s",
        }}
      >
        Daha çox
      </Button>
    </VStack>
  );
};

export default BlogSection;
