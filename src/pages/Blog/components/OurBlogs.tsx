import { Box, Button, Flex, Grid, HStack, Image, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import "../../../App.css";
import { useBlog } from "../../../hooks/useBlog.tsx";
const OurBlogs = () => {
  const {allBlogs, fetchAllBlogs} = useBlog();
  useEffect(()=>{
    fetchAllBlogs();
  },[])
  return (
    <Box mt={{ md: "90px", base: "50px" }} w="100%">
      <Box
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
        <HStack color="white" fontWeight={700}>
          <FontAwesomeIcon icon={faHouse} color="#ec398b" />
          <Link to="/">Əsas səhifə</Link>
          <Text color="#efa506">/ Xəbərlər</Text>
        </HStack>
      </Box>
      <Grid
        gridTemplateColumns={{ lg: "repeat(3,1fr)", md: "repeat(2,1fr)" }}
        w="100%"
        gap={{ lg: "50px", base: "30px" }}
        p={{ md: "100px 50px", base: "80px 20px", lg: "100px" }}
      >
        {allBlogs.map((blog, index) => (
          <Flex
            className="parent"
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
          >
            {/* <Image src={blog.imageSrc} w="100%" /> */}
            <Box
              w="100%"
              height={{ md: "220px", base: "250px" }}
              overflow="hidden"
              position="relative"
              display="inline-block"
            >
              <Box
                className="child"
                w="100%"
                h="100%"
                bgImage="/assets/blog1.jpg"
                bgSize="cover"
                bgRepeat="no-repeat"
                transition="all 1.1s"
              ></Box>
            </Box>
            <Text
              color="rgba(50, 51, 51, .8)"
              fontSize={{ lg: "14px", md: "12px", base: "14px" }}
            >
              {blog?.createdDate} 
            </Text>
            <Text
              fontSize={{ lg: "18px", md: "16px", base: "18px" }}
              fontWeight={700}
              color="#1b273d"
              _hover={{
                color: "#554bb9",
              }}
            >
              {blog.title}
            </Text>
            <Link style={{padding:'10px 20px'}} className="lgx-btn lgx-btn-white" to={`/blog/${blog.id}`}>
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
    </Box>
  );
};

export default OurBlogs;
