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
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../../../App.css";
import { useBlog } from "../../../hooks/useBlog.tsx";
const BlogSection = () => {
  const { recentBlogs, fetchRecentBlogs } = useBlog();
  useEffect(() => {
    fetchRecentBlogs();
  }, []);
  return (
    <VStack
      p={{ md: "100px 20px", base: "80px 0" }}
      // gap={{md:"50px", base:"30px"}}
      gap="20px"
      w="100%"
      fontFamily="Oswald"
    >
      <Heading
        color="#1b273d"
        fontSize={{ base: "24px", sm: "30px", lg: "40px" }}
        fontWeight={900}
        textTransform="uppercase"
        // fontFamily="Poppins"
      >
        Xəbərlər
      </Heading>
      <Text fontSize="20px" color="rgba(50, 51, 51, 0.8)">
        Conferences dedicated to building remarkable events.
      </Text>
      <Grid
        mt="50px"
        w={{ md: "80%", base: "90%" }}
        flexDirection={{ sm: "row", base: "column" }}
        justifyContent="center"
        alignItems="center"
        gap={30}
        gridTemplateColumns={{ lg: "repeat(3,1fr)", md: "repeat(2,1fr)" }}
      >
        {recentBlogs.map((blogs, index) => (
          <Flex
            className="parent"
            flexDirection="column"
            cursor="pointer"
            key={index}
            alignItems="flex-start"
            // w={{ xl: "100%", md: "300px", sm: "500px", base: "350px" }}
            w="100%"
            p="15px"
            borderRadius="10px"
            boxShadow="1px 1px 1px 1px rgba(0, 0, 0, 0.1), -1px -1px 1px 1px rgba(0, 0, 0, 0.1)"
            gap="10px"
            transition="transform 1s ease"
          >
            <Box
              w="100%"
              height={{ md: "220px", base: "250px" }}
              overflow="hidden"
              position="relative"
              display="inline-block"
            >
              {/* <Box
                className="child"
                w="100%"
                h="100%"
                bgImage="/assets/blog1.jpg"
                bgSize="cover"
                bgRepeat="no-repeat"
                transition="all 1.1s"
              ></Box> */}
              <Image
                src="/assets/blog1.jpg"
                className="child"
                w="100%"
                h="100%"
                transition="all 1.1s"
              />
            </Box>
            <Text
              color="rgba(50, 51, 51, .8)"
              fontSize={{ lg: "14px", md: "12px", base: "14px" }}
              fontFamily="Poppins"
            >
              {blogs.createdDate &&
                `${new Date(blogs.createdDate)
                  .toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                  })
                  .replace(/\//g, "-")}`} <span style={{paddingLeft:"10px"}}>| by {blogs?.author}</span> 
            </Text>
            <Text
              fontSize={{ lg: "18px", md: "16px", base: "18px" }}
              fontWeight={700}
              color="#1b273d"
              _hover={{
                color: "#554bb9",
              }}
            >
              {blogs?.title}
            </Text>
            {/* <Box
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
            </Box> */}
            <Link style={{padding:'10px 20px'}} className="lgx-btn lgx-btn-white" to={`/blog/${blogs.id}`}>
              <Text 
                  color="#7F7BE2"
                  fontSize={{ lg: "12px", base: "12px" }}
                  fontWeight={400}>
                    READ MORE
              </Text>
            </Link>
          </Flex>
        ))}
      </Grid>

      {/* <Link to="/blog">
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
      </Link> */}

      <Link className="lgx-btn" to="/blog">
      <Text>Daha çox</Text>
      </Link>
    </VStack>
  );
};

export default BlogSection;
