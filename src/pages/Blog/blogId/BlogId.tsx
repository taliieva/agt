import { Box, Flex, HStack, Image, Text, VStack } from "@chakra-ui/react";
import React, { useEffect } from "react";
import data from "../../../data.json";
import { Link, useParams } from "react-router-dom";
import Layout from "../../../Layout/Layout.tsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
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
        fontFamily="Poppins"
        mt={{ md: "90px", base: "50px" }}
        // bg="rgba(27, 39, 61, .95)"
        bgImage="/assets/banner-inner2.jpg"
        display="flex"
        flexDirection="column"
        // alignItems="flex-start"
        justifyContent="flex-start"
        p={{ md: "100px 60px", base: "60px" }}
        w="100%"
      >
        <Text fontSize="40px" color="white" fontWeight={900}>
          Xəbərlər
        </Text>
        <HStack
          color="white"
          fontWeight={700}
          fontSize={{ lg: "20px", md: "14px", base: "12px" }}
          alignItems="flex-start"
        >
          <FontAwesomeIcon icon={faHouse} color="#ec398b" />
          <Link to="/">Əsas səhifə</Link>
          <Link to="/blog">/Xəbərlər</Link>
          <Text color="#efa506">/ {selectedBlog?.content}</Text>
        </HStack>
      </Box>
      <Flex
        w="100%"
        alignItems="center"
        justifyContent="center"
        fontFamily="Poppins"
      >
        <VStack
          m={{ md: "100px 0", base: "50px 0" }}
          // p="30px"
          alignItems="center"
          w="80%"
          borderRadius="20px 20px 0 0"
          background="rgba(0,0,0,0.1)"
        >
          <Image src={selectedBlog?.imageSrc} borderRadius="20px" w="100%" />
          <VStack alignItems="flex-start" w="100%" p="10px 20px">
            <Text
              fontSize={{ lg: "18px", md: "16px", base: "12px" }}
              fontWeight={700}
              color="#1b273d"
              _hover={{
                color: "#554bb9",
              }}
            >
              {selectedBlog?.content}
            </Text>
            <Text color="#6B6B6B">{selectedBlog?.date}</Text>
            <Text fontWeight={700}>
              {selectedBlog?.author} | {selectedBlog?.category}
            </Text>
            <Text fontSize={{ md: "18px", base: "14px" }}>
              {selectedBlog?.overview}
            </Text>
          </VStack>
        </VStack>
      </Flex>
    </Layout>
  );
};

export default BlogId;
