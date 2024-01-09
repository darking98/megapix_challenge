import React from 'react'
import { Text, Box, Flex, Heading, Grid } from '@chakra-ui/react'
import Image from 'next/image'
/* icons */
import brazilIcon from '@/assets/icons/brazil.svg'
import argentinaIcon from '@/assets/icons/argentina.svg'
import usaIcon from '@/assets/icons/united_states.svg'
const Prices = () => {
  return (
    <Box color='white' fontWeight='bold'>
      <Heading mb={4} fontSize='lg'>
        Cotizaciones
      </Heading>
      <Grid
        gap='20px'
        gridTemplateColumns={{ base: '1fr', md: 'repeat(3,1fr)' }}
      >
        <Box p='8' borderRadius='md' background='lightBlack'>
          <Flex justifyContent='space-between'>
            <Text>BRL/ARS</Text>
            <Flex border='1px solid darkGray' borderRadius='40px' p='1'>
              <Box mr='2'>
                <Image src={brazilIcon} alt='Bandera de Brasil' />
              </Box>
              <Box>
                <Image src={argentinaIcon} alt='Bandera de Argentina' />
              </Box>
            </Flex>
          </Flex>
          <Flex alignItems='baseline'>
            <Text fontSize='2xl'>$</Text>
            <Text fontSize='4xl'>192,</Text>
            <Text fontSize='2xl'>47</Text>
          </Flex>
        </Box>
        <Box p='8' borderRadius='md' background='lightBlack'>
          <Flex justifyContent='space-between'>
            <Text>BRL/USDT</Text>
            <Flex border='1px solid darkGray' borderRadius='40px' p='1'>
              <Box mr='2'>
                <Image src={brazilIcon} alt='Bandera de Brasil' />
              </Box>
              <Box>
                <Image src={usaIcon} alt='Bandera de Argentina' />
              </Box>
            </Flex>
          </Flex>
          <Flex alignItems='baseline'>
            <Text fontSize='2xl'>$</Text>
            <Text fontSize='4xl'>5,</Text>
            <Text fontSize='2xl'>14</Text>
          </Flex>
        </Box>
        <Box p='8' borderRadius='md' background='lightBlack'>
          <Flex justifyContent='space-between'>
            <Text>ARS/USDT</Text>
            <Flex border='1px solid darkGray' borderRadius='40px' p='1'>
              <Box mr='2'>
                <Image src={argentinaIcon} alt='Bandera de Brasil' />
              </Box>
              <Box>
                <Image src={usaIcon} alt='Bandera de Argentina' />
              </Box>
            </Flex>
          </Flex>
          <Flex alignItems='baseline'>
            <Text fontSize='2xl'>$</Text>
            <Text fontSize='4xl'>988,</Text>
            <Text fontSize='2xl'>32</Text>
          </Flex>
        </Box>
      </Grid>
    </Box>
  )
}

export default Prices
