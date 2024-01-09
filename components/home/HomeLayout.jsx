import React from 'react'
/* Chakra UI */
import { Grid, Box } from '@chakra-ui/react'
/* Components */
import Prices from './Prices'
import PaymentChart from './PaymentChart'
import Transactions from './Transactions'

const HomeLayout = () => {
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

export default HomeLayout
