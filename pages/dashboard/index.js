import React from 'react'
/* Chakra UI */
import { Grid, Box } from '@chakra-ui/react'
/* Components */
import Balances from './components/Balances'
import Prices from './components/Prices'
import PaymentChart from './components/PaymentChart'
const Dashboard = () => {
  return (
    <Grid gridTemplateColumns='1fr' color='white'>
      <Box mb={8}>
        <Balances />
      </Box>
      <Prices />
      <Box my={8} display={{ base: 'none', md: 'block' }}>
        <PaymentChart />
      </Box>
    </Grid>
  )
}

export default Dashboard
