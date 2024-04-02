import { ChakraProvider } from '@chakra-ui/react'
import React, { Children } from 'react'

const Providers = ({children}) => {
  return (
    <ChakraProvider>{children}</ChakraProvider>
  )
}

export default Providers