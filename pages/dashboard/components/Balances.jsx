import React, { useState } from 'react'
/* Chakra UI */
import { Text, Box, Flex, Heading, Grid } from '@chakra-ui/react'
/* Next */
import Image from 'next/image'
import Card from '@/components/Card'
const Balances = () => {
  const balances = [
    {
      title: 'Total',
      balance: 192987.47
    },
    {
      title: 'Tienda 1',
      balance: 96493.73
    },
    {
      title: 'Tienda 2',
      balance: 96493.73
    }
  ]
  return (
    <Box color='white' fontWeight='bold'>
      <Heading mb={4} fontSize='lg' fontWeight='600'>
        Balances
      </Heading>
      <Grid
        gap='20px'
        gridTemplateColumns={{ base: '1fr', md: 'repeat(3,1fr)' }}
      >
        {balances.map((item) => (
          <Card
            key={item.title}
            title={item.title}
            value={item.balance}
            hideValue
          />
        ))}
      </Grid>
    </Box>
  )
}

export default Balances
