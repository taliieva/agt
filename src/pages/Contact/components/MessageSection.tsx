import {
  Box,
  Button,
  Grid,
  Heading,
  Input,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const MessageSection = () => {
  return (
    <Box p="30px 0" w="100%" display="flex" alignItems="center" justifyContent="center">
      <VStack
        p="100px"
        boxShadow="3px 4px 6px 4px rgba(0, 0, 0, 0.5)"
        w="80%"
        alignItems="center"
        justifyContent="center"
        borderRadius="30px"
      >
        <Heading color="rgba(27, 39, 61, .95)" fontSize={40}>Mesaj buraxın</Heading>
        <Text mb="30px">
          Aşağıdakı formanı doldurun, komandamız tezliklə geri dönüş edəcək.
        </Text>
        <Grid gridTemplateColumns="repeat(2,1fr)"  gap={30} w="90%">
          <Input p={15} borderRadius={5} border="1px solid black" placeholder="Ad"  fontSize="14px"/>
          <Input p={15} borderRadius={5} border="1px solid black" placeholder="Soyad"  fontSize="14px"/>
          <Input p={15} borderRadius={5} border="1px solid black" placeholder="Unvan"  fontSize="14px"/>
          <Input p={15} borderRadius={5} border="1px solid black" placeholder="Telefon"  fontSize="14px"/>
          <Textarea gridColumn="1/3" p={15} borderRadius={5} border="1px solid black" placeholder="Mesajiniz"  fontSize="14px"/>
        </Grid>
        <Button p="10px 30px" w="20%" borderRadius="20px" border={"none"} mt={30} bg="#7F7BE2" color="white" fontSize="16px" cursor="pointer">Gonder</Button>
      </VStack>
    </Box>
  );
};

export default MessageSection;
