import { Button, Flex, HStack, Heading, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const AboutEvents = () => {
  return (
    <VStack p={{md:"100px 20px", base:"50px 20px"}} gap={{base:"20px",lg:"50px"}}>
      <Heading fontSize={{base:"20px", sm: "25px", lg: "30px" }}>
        Azərbaycan Gənclər İttifaqı
      </Heading>
      <Flex flexDirection={{base:"column-reverse",sm:"row"}} justifyContent="center" gap={{sm:"40px", base:"20px" }}alignItems="flex-start">
        <VStack
          w={{base:"90%",sm:"70%",md:"60%",xl:"40%"}}
          alignItems="flex-start"
          textAlign="justify"
          gap={{base:"20px", md:"30px", xl: "50px" }}
        >
          <Text fontSize={{base:"12px",md:"16px",xl:"18px"}}>
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
          <Link to="about">
            <Button
              p={{sm:"10px 30px", base:"10px"}}
              bg={"white"}
              color="#68CE65"
              border="1px solid #68CE65"
              cursor="pointer"
              fontSize={{sm:"16px", base:"14px"}}
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
        <Image src="/assets/about-sp.jpg" w={{base:"30%",md:"20%"}} borderRadius="10px" height="100%"/>
      </Flex>
    </VStack>
  );
};

export default AboutEvents;
