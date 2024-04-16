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
    <Box
      p="50px 0"
      w="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <VStack
        p={{ lg: "100px 100px", md: "100px 50px", base: "80px 20px" }}
        boxShadow="3px 4px 6px 4px rgba(0, 0, 0, 0.5)"
        w={{ lg: "80%", base: "90%" }}
        alignItems="center"
        justifyContent="center"
        borderRadius="30px"
      >
        <Heading
          color="rgba(27, 39, 61, .95)"
          fontSize={{ base: "24px", sm: "30px", lg: "40px" }}
        >
          Mesaj buraxın
        </Heading>
        <Text
          mb={{ md: "30px", sm: "20px", base: "10px" }}
          fontSize={{ lg: "18px", md: "16px", base: "12px" }}
        >
          Aşağıdakı formanı doldurun, komandamız tezliklə geri dönüş edəcək.
        </Text>
        {/* <Grid
          gridTemplateColumns={{ md: "repeat(2, 1fr)", base: "1fr" }}
          gap={{ md: "30px", sm: "20px", base: "10px" }}
          w="100%"
        >
          <Input
            w="100%"
            p="15px"
            borderRadius="5px"
            border="1px solid black"
            placeholder="Ad"
            fontSize="14px"
            outline="none"
            _hover={{ border: "1px solid black" }}
            focusBorderColor="transparent"
            _focus={{ border: "1px solid black" }}
          />
          <Input
            w="100%"
            p="15px"
            borderRadius="5px"
            border="1px solid black"
            placeholder="Soyad"
            fontSize="14px"
            outline="none"
            _hover={{ border: "1px solid black" }}
            focusBorderColor="transparent"
            _focus={{ border: "1px solid black" }}
          />
          <Input
            w="100%"
            p="15px"
            borderRadius="5px"
            border="1px solid black"
            placeholder="Ünvan"
            fontSize="14px"
            outline="none"
            _hover={{ border: "1px solid black" }}
            focusBorderColor="transparent"
            _focus={{ border: "1px solid black" }}
          />
          <Input
            w="100%"
            p="15px"
            borderRadius="5px"
            border="1px solid black"
            placeholder="Telefon"
            fontSize="14px"
            outline="none"
            _hover={{ border: "1px solid black" }}
            focusBorderColor="transparent"
            _focus={{ border: "1px solid black" }}
          />
          <Textarea
            w="100%"
            gridColumn="1/3"
            p="15px"
            borderRadius="5px"
            border="1px solid black"
            placeholder="Mesajınız"
            fontSize="14px"
            outline="none"
            _hover={{ border: "1px solid black" }}
            focusBorderColor="transparent"
            _focus={{ border: "1px solid black" }}
          />
        </Grid> */}
        <Grid
          gridTemplateColumns={{ md: "repeat(2, 1fr)", base: "1fr" }}
          gap={{ md: "30px", sm: "20px", base: "10px" }}
          w="100%"
        >
          <Box gridColumn={{ md: "1/2", base: "1/-1" }}>
            <Input
              p="15px"
              borderRadius="5px"
              border="1px solid black"
              placeholder="Ad"
              fontSize="14px"
              outline="none"
              _hover={{ border: "1px solid black" }}
              focusBorderColor="transparent"
              _focus={{ border: "1px solid black" }}
            />
          </Box>
          <Box gridColumn={{ md: "2/3", base: "1/-1" }}>
            <Input
              p="15px"
              borderRadius="5px"
              border="1px solid black"
              placeholder="Soyad"
              fontSize="14px"
              outline="none"
              _hover={{ border: "1px solid black" }}
              focusBorderColor="transparent"
              _focus={{ border: "1px solid black" }}
            />
          </Box>
          <Box gridColumn={{ md: "1/2", base: "1/-1" }}>
            <Input
              p="15px"
              borderRadius="5px"
              border="1px solid black"
              placeholder="Ünvan"
              fontSize="14px"
              outline="none"
              _hover={{ border: "1px solid black" }}
              focusBorderColor="transparent"
              _focus={{ border: "1px solid black" }}
            />
          </Box>
          <Box gridColumn={{ md: "2/3", base: "1/-1" }}>
            <Input
              p="15px"
              borderRadius="5px"
              border="1px solid black"
              placeholder="Telefon"
              fontSize="14px"
              outline="none"
              _hover={{ border: "1px solid black" }}
              focusBorderColor="transparent"
              _focus={{ border: "1px solid black" }}
            />
          </Box>
          <Box gridColumn={{ md: "1/3", base: "1/-1" }}>
            <Textarea
              p="15px"
              borderRadius="5px"
              border="1px solid black"
              placeholder="Mesajınız"
              fontSize="14px"
              outline="none"
              _hover={{ border: "1px solid black" }}
              focusBorderColor="transparent"
              _focus={{ border: "1px solid black" }}
            />
          </Box>
        </Grid>

        <Button
          p="10px 30px"
          // w="20%"
          w={{ xl: "20%", sm: "40%", base: "60%" }}
          borderRadius="20px"
          border={"none"}
          mt={30}
          // bg="#7F7BE2"
          colorScheme="purple"
          color="white"
          fontSize="16px"
          cursor="pointer"
          // variant='solid'
        >
          Göndər
        </Button>
      </VStack>
    </Box>
  );
};

export default MessageSection;
