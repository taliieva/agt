import { Box, Button, Flex, Grid, Image, Text } from "@chakra-ui/react";
import React from "react";
import data from "../../../data.json";
import { Link } from "react-router-dom";
const OurBlogs = () => {
  const blogs = data.blogs;
  // const blogPosts = [
  //   {
  //     id: 1,
  //     imageSrc: "/assets/blog1.jpg",
  //     date: "April 25, 2021",
  //     author: "Rizasgor",
  //     category: "Design",
  //     content: "Brooklyn Beta was the most important conferen best tristique",
  //   },
  //   {
  //     id: 2,
  //     imageSrc: "/assets/blog2.jpg",
  //     date: "April 25, 2021",
  //     author: "Rizasgor",
  //     category: "Design",
  //     content: "Brooklyn Beta was the most important conferen best tristique",
  //   },
  //   {
  //     id: 3,
  //     imageSrc: "/assets/blog3.jpg",
  //     date: "April 25, 2021",
  //     author: "Rizasgor",
  //     category: "Design",
  //     content: "Brooklyn Beta was the most important conferen best tristique",
  //   },
  //   {
  //     id: 4,
  //     imageSrc: "/assets/blog3.jpg",
  //     date: "April 25, 2021",
  //     author: "Rizasgor",
  //     category: "Design",
  //     content: "Brooklyn Beta was the most important conferen best tristique",
  //   },
  //   {
  //     id: 5,
  //     imageSrc: "/assets/blog1.jpg",
  //     date: "April 25, 2021",
  //     author: "Rizasgor",
  //     category: "Design",
  //     content: "Brooklyn Beta was the most important conferen best tristique",
  //   },
  //   {
  //     id: 6,
  //     imageSrc: "/assets/blog2.jpg",
  //     date: "April 25, 2021",
  //     author: "Rizasgor",
  //     category: "Design",
  //     content: "Brooklyn Beta was the most important conferen best tristique",
  //   },
  //   {
  //     id: 7,
  //     imageSrc: "/assets/blog2.jpg",
  //     date: "April 25, 2021",
  //     author: "Rizasgor",
  //     category: "Design",
  //     content: "Brooklyn Beta was the most important conferen best tristique",
  //   },
  //   {
  //     id: 8,
  //     imageSrc: "/assets/blog3.jpg",
  //     date: "April 25, 2021",
  //     author: "Rizasgor",
  //     category: "Design",
  //     content: "Brooklyn Beta was the most important conferen best tristique",
  //   },
  //   {
  //     id: 9,
  //     imageSrc: "/assets/blog1.jpg",
  //     date: "April 25, 2021",
  //     author: "Rizasgor",
  //     category: "Design",
  //     content: "Brooklyn Beta was the most important conferen best tristique",
  //   },
  // ];
  return (
    <Box>
      <Box
        bg="rgba(27, 39, 61, .95)"
        // mt={{ md: "90px", base: "50px" }}
        display="flex"
        alignItems="center"
        p={{ md: "100px 60px", base: "60px" }}
        flexDirection="column"
      >
        <Text fontSize="40px" color="white">
          Xəbərlərimiz
        </Text>
      </Box>
      <Grid
        gridTemplateColumns={{ md: "repeat(3,1fr)", sm: "repeat(2,1fr)" }}
        w="100%"
        gap="50px"
        p={{ md: "100px 50px", base: "50px 30px", lg: "100px" }}
      >
        {blogs.map((blog, index) => (
          <Flex
            flexDirection="column"
            cursor="pointer"
            key={index}
            alignItems="flex-start"
            // w={{ xl: "25%", md: "30%", sm: "40%", base: "70%" }}
            w="100%"
            p="10px"
            borderRadius="10px"
            boxShadow="0px 4px 6px rgba(0, 0, 0, 0.5)"
            gap="10px"
            _hover={{
              transform: "scale(1.1)",
              boxShadow: "0px 10px 10px rgba(127, 123, 226, .95)",
            }}
          >
            <Image src={blog?.imageSrc} w="100%" />
            <Text
              color="#6B6B6B"
              fontSize={{ lg: "14px", md: "12px", base: "10px" }}
            >
              {blog.date} | {blog.author} | {blog.category}
            </Text>
            <Text
              fontSize={{ lg: "18px", md: "16px", base: "12px" }}
              fontWeight={600}
              color="#7F7BE2"
            >
              {blog.content}
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
              <Link to={`/blog/${blog.id}`}>Read more</Link>
            </Button>
          </Flex>
        ))}
      </Grid>
    </Box>
  );
};

export default OurBlogs;
