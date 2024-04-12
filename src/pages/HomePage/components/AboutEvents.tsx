import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAboutFirst } from "../../../hooks/useAbout.tsx";

const AboutEvents = () => {
  const { aboutFirst, fetchUseAbout } = useAboutFirst();
  useEffect(() => {
    fetchUseAbout();
  }, []);
  return (
    <VStack
      p={{ md: "100px 30px", base:"80px 5px" }}
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
          // w={{ base: "80%"}}
          w={{xl:"50%", base:"100%"}}
          alignItems="flex-start"
          gap="20px"
        >
          <Heading
            fontSize={{ base: "30px", sm: "35px", xl: "40px" }}
            // fontSize="40px"
            color="#1b273d"
            fontWeight={900}
            textTransform="uppercase"
            fontFamily="Poppins"
          >
            Azərbaycan gənclər təşkilatı
          </Heading>
          <Text
            fontSize={{ sm: "16px", base: "14px" }}
            color="#ec398b"
            fontFamily="Oswald"
            letterSpacing="1px"
            fontWeight={500}
          >
            Niyə AGT?
          </Text>
          <Text
            w={{lg:"90%", base:"100%"}}
            fontSize={{ base: "12px", xl: "14px" }}
            letterSpacing="1px"
            color="rgba(50, 51, 51, .8)"
            fontFamily="Poppins"
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
        ml="30px"
        alignSelf="flex-start"
          src="/assets/about-sp.jpg"
          w={{ base: "70%", lg: "30%" }}
          borderRadius="10px"
          height="100%"
        />
      </Flex>
    </VStack>
  );
};

export default AboutEvents;
