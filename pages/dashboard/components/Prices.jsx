import React from 'react'
/* Chakra UI */
import { Text, Box, Flex, Heading, Grid } from '@chakra-ui/react'
/* Next */
import Image from 'next/image'
/* icons */
import brazilIcon from '@/assets/icons/brazil.svg'
import argentinaIcon from '@/assets/icons/argentina.svg'
import usaIcon from '@/assets/icons/united_states.svg'
/*Components */
import Card from '@/components/Card'
const Prices = () => {
  const items = [
    {
      title: 'BRL/ARS',
      leftFlag: brazilIcon,
      rightFlag: argentinaIcon,
      value: 192.47
    },
    {
      title: 'BRL/USDT',
      leftFlag: brazilIcon,
      rightFlag: usaIcon,
      value: 5.14
    },
    {
      title: 'ARS/USDT',
      leftFlag: argentinaIcon,
      rightFlag: usaIcon,
      value: 988.32
    }
  ]
  return (
    <Box color='white' fontWeight='bold'>
      <Heading mb={4} fontSize='lg' fontWeight='600'>
        Cotizaciones
      </Heading>
      <Grid
        gap='20px'
        gridTemplateColumns={{ base: '1fr', md: 'repeat(3,1fr)' }}
      >
        {items.map((item) => (
          <Card
            key={item.title}
            value={item.value}
            title={
              <Flex justifyContent='space-between' width='100%'>
                <Text>{item.title}</Text>
                <Flex border='1px solid darkGray' borderRadius='40px' p='1'>
                  <Box mr='2'>
                    <Image src={item.leftFlag} alt='Bandera de Brasil' />
                  </Box>
                  <Box>
                    <Image src={item.rightFlag} alt='Bandera de Argentina' />
                  </Box>
                </Flex>
              </Flex>
            }
          />
        ))}
      </Grid>
    </Box>
  )
}

export default Prices
