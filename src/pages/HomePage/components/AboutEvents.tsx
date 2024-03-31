import { Button, HStack, Heading, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const AboutEvents = () => {
  return (
    <HStack justifyContent="center" gap="40px" p="100px 0">
      <VStack w="40%" alignItems="flex-start" textAlign="justify" gap={40}>
        <Heading fontSize="30px">Azərbaycan Gənclər İttifaqı</Heading>
        <Text>
          "Azərbaycan Gənclər İttifaqı" İctimai Birliyi 1994-cü ildən fəaliyyət
          göstərən yerli qeyri-hökümət təşkilatıdır. Təşkilatın əsas məqsədi
          Azərbaycanda gənclər siyasətini həyata keçirilməsi üçün effektli
          mexanizmin yaradılması, gənclərin təşəbbüskarlıq və yaradıcıllığının
          inkişaf etdirilməsi, gənclərin sosial vəziyyətinin monitorinqi, əlil
          və valideyn himayəsindən məhrum olmuş uşaqların, qaçqın və məcburi
          köçkün gənclərin, yeniyetmələrin və uşaqların hüquqlarını müdafiəsi
          məqsədi ilə proqramların hazırlanması və həmçinin gənclərin sosial,
          səhiyyə, təhsil, ekologiya, mədəniyyət və digər sahələrdə
          maarifləndirilməsindən ibarətdir.
        </Text>
        <Link to="about">
        <Button
          p="10px 30px"
          bg={"white"}
          color="#68CE65"
          border="1px solid #68CE65"
          cursor="pointer"
          fontSize="16px"
          _hover={{
            color: "white",
            bg: "#68CE65",
            borderRadius: "20px",
            transitionDuration: "1s",
          }}
        >
          Daha çox
        </Button>
        </Link>
      </VStack>
      <Image src="/assets/about-sp.jpg" w="20%" borderRadius="10px" />
    </HStack>
  );
};

export default AboutEvents;
