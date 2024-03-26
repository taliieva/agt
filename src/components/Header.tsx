import { Box, HStack, Image, Text } from '@chakra-ui/react'
import React from 'react'

const Header = () => {
  return (
    <Box height="80px" position="fixed" top="0" left="0" right="0" bg="white" zIndex="1000">
      <HStack p="10px 60px" justifyContent="space-between">
          <Image src='/assets/agi.png' width="13%"/>
          <HStack gap={30} fontSize={18}>
              <Text _hover={{color:"#9DC3DA", cursor:"pointer"}}>Əsas səhifə</Text>
              <Text _hover={{color:"#9DC3DA", cursor:"pointer"}}>Haqqımızda</Text>
              <Text _hover={{color:"#9DC3DA", cursor:"pointer"}}>Tədbirlər</Text>
              <Text _hover={{color:"#9DC3DA", cursor:"pointer"}}>Blog</Text>
              <Text _hover={{color:"#9DC3DA", cursor:"pointer"}}>Əlaqə</Text>
          </HStack>
      </HStack>
    </Box>
  )
}

export default Header
