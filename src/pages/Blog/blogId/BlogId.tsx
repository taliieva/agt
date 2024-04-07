import { Box, Flex, Image, Text, VStack } from "@chakra-ui/react";
import React, { useEffect } from "react";
import data from "../../../data.json";
import { useParams } from "react-router-dom";
import Layout from "../../../Layout/Layout.tsx";
const BlogId = () => {
  const { blogId } = useParams();
  const blog = data.blogs;
  const selectedBlog = blog.find((item) => String(item.id) === blogId);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout>
      <Box
        bg="rgba(27, 39, 61, .95)"
        // mt={{ md: "90px", base: "50px" }}
        display="flex"
        alignItems="center"
        p={{ md: "100px 60px", base: "60px" }}
        flexDirection="column"
      ></Box>
      <Flex w="100%" alignItems="center" justifyContent="center">
        <VStack
          m="30px"
          // p="30px"
          alignItems="center"
          w="80%"
          borderRadius="20px 20px 0 0"
          background="rgba(0,0,0,0.1)"
        >
          <Image src={selectedBlog?.imageSrc} borderRadius="20px" w="100%" />
          <VStack alignItems="flex-start" w="100%" p="10px 20px">
            <Text
              fontSize={{ lg: "20px", md: "16px", base: "12px" }}
              fontWeight={600}
              color="#7F7BE2"
            >
              {selectedBlog?.content}
            </Text>
            <Text color="#6B6B6B">{selectedBlog?.date}</Text>
            <Text fontWeight={700}>
              {selectedBlog?.author} | {selectedBlog?.category}
            </Text>
            <Text>{selectedBlog?.overview}</Text>
          </VStack>
        </VStack>
      </Flex>
    </Layout>
  );
};

export default BlogId;
