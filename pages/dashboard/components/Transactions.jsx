import React from 'react'
/* Chakra UI */
import { Heading } from '@chakra-ui/react'
/* Components */
import Table from '@/components/Table'
const Transactions = () => {
  const transactions = [
    {
      id: '1',
      date: 'asd',
      amount: '2',
      brl: '2',
      usdt: '4',
      modality: 'asd',
      status: 'done',
      reference: 'asd'
    },
    {
      id: '2',
      date: 'asd',
      amount: '2',
      brl: '2',
      usdt: '4',
      modality: 'asd',
      status: 'done',
      reference: 'asd'
    },
    {
      id: '3',
      date: 'asd',
      amount: '2',
      brl: '2',
      usdt: '4',
      modality: 'asd',
      status: 'done',
      reference: 'asd'
    },
    {
      id: '4',
      date: 'asd',
      amount: '2',
      brl: '2',
      usdt: '4',
      modality: 'asd',
      status: 'done',
      reference: 'asd'
    },
    {
      id: '5',
      date: 'asd',
      amount: '2',
      brl: '2',
      usdt: '4',
      modality: 'asd',
      status: 'done',
      reference: 'asd'
    },
    {
      id: '6',
      date: 'asd',
      amount: '2',
      brl: '2',
      usdt: '4',
      modality: 'asd',
      status: 'done',
      reference: 'asd'
    }
  ]
  const columns = [
    'ID',
    'Fecha',
    'Monto',
    'BRL',
    'USDT',
    'Modalidad',
    'Estado',
    'Referencia'
  ]

  return (
    <>
      <Heading mb={4} mt={{ base: 4, md: 0 }} fontSize='lg'>
        Transacciones diarias
      </Heading>
      <Table data={transactions} columns={columns} />
    </>
  )
}

export default Transactions
