import {
  Box,
  Flex,
  HStack,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const AboutUs = () => {
  return (
    <VStack
      alignItems="center"
      mt={{ md: "90px", base: "50px" }}
      fontFamily="Poppins"
    >
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
          Haqqımızda
        </Text>
        <HStack color="white" fontWeight={700}>
          <FontAwesomeIcon icon={faHouse} color="#ec398b" />
          <Link to="/">Əsas səhifə</Link>
          <Text color="#efa506">/ Haqqımızda</Text>
        </HStack>
      </Box>
      <Flex
        p={{ md: "100px 30px", base: "70px 20px" }}
        flexDirection={{ base: "column", lg: "row" }}
        justifyContent="center"
        gap={{ sm: "40px", base: "20px" }}
        alignItems={{ lg: "flex-start", base: "center" }}
      >
        <Image
        alignSelf="flex-start"
          src="/assets/about-logo.png"
          w={{ base: "70%", lg: "40%", xl:"30%" }}
          borderRadius="10px"
          height="100%"
        />
        <VStack
          // w={{ base: "90%", sm: "70%", md: "55%" }}
          w={{ xl: "50%", base: "100%" }}
          alignItems="flex-start"
          gap="20px"
        >
          <Heading
            // fontSize={{ base: "20px", sm: "25px", lg: "35px" }}
            fontSize={{ base: "30px", sm: "35px", xl: "40px" }}
            color="#1b273d"
            fontWeight={900}
            textTransform="uppercase"
            fontFamily="Poppins"
          >
            Azərbaycan Gənclər İttifaqı
          </Heading>
          <Text
            fontSize={{ sm: "16px", base: "14px" }}
            color="#ec398b"
            letterSpacing="1px"
            fontWeight={500}
          >
            Niyə AGT?
          </Text>
          <Text
           w={{lg:"90%", base:"100%"}}
           fontSize={{ base: "12px", xl: "14px" }}
            // fontSize={{ base: "12px", md: "16px", xl: "18px" }}
            color="rgba(50, 51, 51, .8)"
            fontFamily="Poppins"
            letterSpacing="1px"
          >
            "Azərbaycan Gənclər İttifaqı" İctimai Birliyi 1994-cü ildən
            fəaliyyət göstərən yerli qeyri-hökümət təşkilatıdır. Təşkilatın əsas
            məqsədi Azərbaycanda gənclər siyasətini həyata keçirilməsi üçün
            effektli mexanizmin yaradılması, gənclərin təşəbbüskarlıq və
            yaradıcıllığının inkişaf etdirilməsi, gənclərin sosial vəziyyətinin
            monitorinqi, əlil və valideyn himayəsindən məhrum olmuş uşaqların,
            qaçqın və məcburi köçkün gənclərin, yeniyetmələrin və uşaqların
            hüquqlarını müdafiəsi məqsədi ilə proqramların hazırlanması və
            həmçinin gənclərin sosial, səhiyyə, təhsil, ekologiya, mədəniyyət və
            digər sahələrdə maarifləndirilməsindən ibarətdir.
          </Text>
        </VStack>
      </Flex>
    </VStack>
  );
};

export default AboutUs;
