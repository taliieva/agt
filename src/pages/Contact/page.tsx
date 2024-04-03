import React from 'react'
import Layout from '../../Layout/Layout.tsx'
import { Box, Image, Text } from '@chakra-ui/react'
import SocialSection from './components/SocialSection.tsx'
import MessageSection from './components/MessageSection.tsx'

const ContactPage = () => {
  return (
    <Layout>
      {/* <Box mt="80px">
        <Image src="/assets/slider6.jpg" w="100%" position="relative"/>
        <Text position="absolute" top="50%" left="20%" fontSize="40px">Əlaqə</Text>
      </Box> */}
      <Box bg="rgba(27, 39, 61, .95)" mt={{md:"90px", base:"50px"}} display="flex" alignItems="center" p={{md:"100px 60px", base:"60px"}} flexDirection="column">
        <Text fontSize="40px" color="white">Əlaqə</Text>
      </Box>
      <SocialSection/>
      <MessageSection/>
    </Layout>
  )
}

export default ContactPage
