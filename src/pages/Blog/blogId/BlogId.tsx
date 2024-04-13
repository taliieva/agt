import { Box, Flex, HStack, Image, Text, VStack } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Layout from "../../../Layout/Layout.tsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { useBlog } from "../../../hooks/useBlog.tsx";
const BlogId = () => {
  const { blogId } = useParams();
  console.log(blogId)
  const {blogDetails, fetchBlogDetails} = useBlog()
  useEffect(() => {
    window.scrollTo(0, 0);
    fetchBlogDetails(blogId)
  }, [blogId]);
  return (
    <Layout>  
      <Box
        fontFamily="Poppins"
        mt={{ md: "90px", base: "50px" }}
        // bg="rgba(27, 39, 61, .95)"
        bgImage="/assets/banner-inner2.jpg"
        bgSize="cover"
        display="flex"
        flexDirection="column"
        // alignItems="flex-start"
        justifyContent="flex-start"
        p={{ lg: "100px 150px", base: "80px 30px" }}
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
          <Text color="#efa506">/ {blogDetails?.title}</Text>
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
          <Image src="/assets/blog1.jpg"  borderRadius="20px" w="100%" />
          <VStack alignItems="flex-start" w="100%" p="10px 20px">
            <Text
              fontSize={{ lg: "18px", md: "16px", base: "12px" }}
              fontWeight={700}
              color="#1b273d"
              _hover={{
                color: "#554bb9",
              }}
            >
              {blogDetails?.title}
            </Text>
            <Text color="#6B6B6B">{blogDetails?.createdDate}</Text>
            <Text fontWeight={700}>
              {blogDetails?.author}
            </Text>
            <Text fontSize={{ md: "16px", base: "14px" }}>
              {blogDetails?.content}
            </Text>
          </VStack>
        </VStack>
      </Flex>
    </Layout>
  );
};

export default BlogId;
