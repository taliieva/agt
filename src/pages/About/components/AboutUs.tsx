import {
  Box,
  Button,
  HStack,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const AboutUs = () => {
  return (
    <VStack mt={100} alignItems="center">
      <Box bg="rgba(50, 51, 51, 0.1)" w="100%" height="20vh" display="flex" alignItems="center">
        <Heading fontSize="40px" width="50%" textAlign="center">
          Haqqımızda
        </Heading>
      </Box>
      <HStack justifyContent="center" gap="40px" p="100px 0">
        <Image src="/assets/logo.png" w="20%" borderRadius="10px" />
        <VStack w="40%" alignItems="flex-start" gap={10}>
          <Heading fontSize="30px" color="#1b273d">
            Azərbaycan Gənclər İttifaqı
          </Heading>
          <Text>WHY AGT?</Text>
          <Text fontSize="18px" mt={20}>
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
      </HStack>
    </VStack>
  );
};

export default AboutUs;
