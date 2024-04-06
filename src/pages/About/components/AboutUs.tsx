import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const AboutUs = () => {
  return (
    <VStack alignItems="center"
    //  mt={{ md: "90px", base: "50px" }}
     >
      <Box
        bg="rgba(27, 39, 61, .95)"
        display="flex"
        alignItems="center"
        justifyContent="center"
        p={{ md: "100px 60px", base: "60px" }}
        w="100%"
      >
        <Text fontSize="40px" color="white">
          Haqqımızda
        </Text>
      </Box>
      <VStack
        justifyContent="center"
        gap="10px"
        p={{ md: "100px 20px", base: "50px 20px" }}
      >
        <Heading
          fontSize={{ base: "20px", sm: "25px", lg: "30px" }}
          color="#1b273d"
        >
          Azərbaycan Gənclər İttifaqı
        </Heading>
        <Text
          // alignSelf={{ base: "flex-start", sm: "initial" }}
          fontSize={{ sm: "16px", base: "14px" }}
        >
          Niyə AGT?
        </Text>
        <Flex
          flexDirection={{ md: "row", base: "column" }}
          w={{ base: "90%", sm: "70%", md: "60%" }}
          alignItems="flex-start"
          gap="30px"
          mt="30px"
          justifyContent="flex-start"
        >
          <Image src="/assets/logo.png" w={{ base: "30%", md: "20%" }} />

          <Text fontSize={{ base: "12px", md: "16px", xl: "18px" }}>
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
        </Flex>
      </VStack>
    </VStack>
  );
};

export default AboutUs;
