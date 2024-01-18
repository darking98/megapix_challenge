import React from 'react'
/* Chakra UI */
import { Grid, Box } from '@chakra-ui/react'
/* Components */
import Prices from './components/Prices'
import PaymentChart from './components/PaymentChart'
import Transactions from './components/Transactions'
const Dashboard = () => {
  return (
    <Grid gridTemplateColumns='1fr' color='white'>
      <Prices />
      <Box my={8} display={{base:'none', md:'block'}}>
        <PaymentChart />
      </Box>
      <Transactions />
    </Grid>
  )
}

export default Dashboard
