import React from 'react'
import { Box, Flex, Text, Heading } from '@chakra-ui/react'
import LineChart from '../LineChart'
const PaymentChart = () => {
  const labels = [
    '1 Ene',
    '2 Ene',
    '3 Ene',
    '4 Ene',
    '5 Ene',
    '6 Ene',
    '7 Ene',
    '8 Ene',
    '9 Ene',
    '10 Ene',
    '11 Ene',
    '12 Ene',
    '13 Ene',
    '15 Ene'
  ]
  const data = {
    labels,
    datasets: [
      {
        label: 'Hoy',
        data: [
          200, 120, 220, 250, 350, 400, 360, 300, 250, 260, 200, 210, 300, 400
        ],
        fill: false,
        borderColor: '#62FEE2',
        tension: 0.3,
        pointBackgroundColor: 'white'
      },
      {
        label: 'Promedio',
        data: [
          200, 180, 250, 350, 300, 200, 150, 200, 250, 350, 320, 210, 300, 300
        ],
        fill: false,
        borderColor: 'rgba(98, 254, 226, 0.20)',
        tension: 0.3
      }
    ]
  }

  return (
    <Box background='lightBlack' py={4} px={8} borderRadius='md'>
      <Flex justifyContent='space-between'>
        <Heading mb={4} fontSize='md'>
          Cobros diarios
        </Heading>
        <Flex flexDirection='column' alignItems='flex-end' mb={5}>
          <Text fontSize='2xl' fontWeight='bold'>
            2000
          </Text>
          <Text fontSize='sm'>+ 180% que el mes pasado</Text>
        </Flex>
      </Flex>
      <Box>
        <LineChart data={data} labels={labels} />
      </Box>
    </Box>
  )
}

export default PaymentChart
