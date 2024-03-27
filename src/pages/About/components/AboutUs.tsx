import { Button, HStack, Heading, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";

const AboutUs = () => {
  return (
    <HStack justifyContent="center" gap="40px" p={50} mt={100}>
      <Image src="/assets/logo.png" w="20%" borderRadius="10px" />
      <VStack w="50%" alignItems="flex-start" gap={20}>
        <Heading fontSize="30px">Azərbaycan Gənclər İttifaqı</Heading>
        <Text fontSize="18px">
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
      </VStack>
    </HStack>
  );
};

export default AboutUs;
