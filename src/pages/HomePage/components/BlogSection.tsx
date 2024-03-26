import { Button, HStack, Heading, Image, Text, VStack } from "@chakra-ui/react";
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
    <VStack p={40} gap={50} w="100%">
      <Heading>OUR BLOGS</Heading>
      <HStack w="90%" justifyContent="center" alignItems="center" gap={30}>
        {blogPosts.map((blogs, index) => (
          <VStack
            alignItems="flex-start"
            w="25%"
            p={10}
            borderRadius="10px"
            boxShadow="0px 4px 6px rgba(0, 0, 0, 0.5)"
            gap={20}
          >
            <Image src={blogs.imageSrc} w="100%" />
            <Text color="#6B6B6B">
              {blogs.date} | {blogs.author} | {blogs.category}
            </Text>
            <Text fontSize="20px" fontWeight={600} color="#7F7BE2">
              {blogs.content}
            </Text>
            <Button
              padding={10}
              border="none"
              bg={"white"}
              color="#7F7BE2"
              cursor={"pointer"}
              boxShadow="0px 4px 6px rgba(0, 0, 0, 0.3)"
            >
              Read more
            </Button>
          </VStack>
        ))}
      </HStack>
      <Button
        padding="15px 30px"
        bg="#7F7BE2"
        color="white"
        border="none"
        fontSize="16px"
        cursor="pointer"
        _hover={{
          borderRadius:"20px",
          transitionDuration:"1s"
        }}
      >
        Load more
      </Button>
    </VStack>
  );
};

export default BlogSection;
