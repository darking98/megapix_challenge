import React from 'react'
import { Center, Spinner } from '@chakra-ui/react'
const LoadingPage = () => {
  console.log('loadingpage')
  return (
    <Center minHeight='100vh'>
        <Spinner />
    </Center>
  )
}

export default LoadingPage