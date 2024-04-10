import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const AboutEvents = () => {
  return (
    <VStack
      p={{ md: "100px 20px", base: "50px 20px" }}
      gap={{ base: "20px", lg: "50px" }}
      fontFamily="Poppins"
    >
      <Flex
        flexDirection={{ base: "column", lg: "row" }}
        justifyContent="center"
        gap={{ sm: "40px", base: "20px" }}
        alignItems={{ lg: "flex-start", base: "center" }}
      >
        <VStack
          w={{ base: "90%", sm: "70%", md: "55%" }}
          alignItems="flex-start"
          textAlign="justify"
          gap={{ base: "20px", md: "30px" }}
        >
          <Heading
            fontSize={{ base: "20px", sm: "25px", xl: "35px" }}
            color="#1b273d"
            fontWeight={900}
            textTransform="uppercase"
          >
            Azərbaycan Gənclər İttifaqı
          </Heading>
          <Text fontSize={{ sm: "16px", base: "14px" }} color="#ec398b">
            Niyə AGT?
          </Text>
          <Text
            fontSize={{ base: "12px", md: "16px", xl: "18px" }}
            color="rgba(50, 51, 51, .8)"
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
          <Link to="/about">
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
          </Link>
        </VStack>
        <Image
          src="/assets/about-sp.jpg"
          w={{ base: "40%", lg: "25%" }}
          borderRadius="10px"
          height="100%"
        />
      </Flex>
    </VStack>
  );
};

export default AboutEvents;
