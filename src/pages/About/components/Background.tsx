import { VStack } from '@chakra-ui/react'
import React from 'react'
import AdditioalEvents from './AdditioalEvents.tsx'
import OurStaff from './OurStaff.tsx'

const Background = () => {
  return (
    <VStack bgImage="/assets/speakers-bg-black.jpg" bgSize="cover" backgroundAttachment="fixed" gap={0}>
        <AdditioalEvents/>
        <OurStaff/>
    </VStack>
  )
}

export default Background
