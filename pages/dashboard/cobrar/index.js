import React, { useEffect, useState } from 'react'
import Image from 'next/image'
/* Chakra */
import {
  Box,
  Text,
  Button,
  Flex,
  Container,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  useDisclosure
} from '@chakra-ui/react'

/* Icons */
import { MdQrCodeScanner } from 'react-icons/md'
import { CiLink } from 'react-icons/ci'
import brazilIcon from '@/assets/icons/brazil.svg'
import argentinaIcon from '@/assets/icons/argentina.svg'
import usaIcon from '@/assets/icons/united_states.svg'
/* Components */
import ModalQr from './components/ModalQr'
const Cobrar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [arsInput, setArsInput] = useState(0)
  const [usdInput, setUsdInput] = useState(0)
  const [brlInput, setBrlInput] = useState(0)
  const commissions = [
    {
      amount: 1.3,
      currency: 'USDT',
      concept: 'Comisión 1'
    },
    {
      amount: 1.3,
      currency: 'USDT',
      concept: 'Comisión 2'
    },
    {
      amount: 1.3,
      currency: 'USDT',
      concept: 'Comisión 3'
    },
    {
      amount: 1.3,
      currency: 'USDT',
      concept: 'Comisión 4'
    }
  ]

  const ARS_TO_BRL = 245.75
  const USD_TO_BRL = 5.13
  const USD_TO_ARS = 1200

  const handleArsInput = (e) => {
    setArsInput(e.target.value)
    setUsdInput(e.target.value / USD_TO_ARS)
    setBrlInput(e.target.value / ARS_TO_BRL)
  }

  const handleUsdInput = (e) => {
    setUsdInput(e.target.value)
    setArsInput(e.target.value * USD_TO_ARS)
    setBrlInput(e.target.value * USD_TO_BRL)
  }

  const modalData = {
    amount: {
      value: brlInput,
      currency: 'BRL'
    },
    equalTo: {
      value: usdInput,
      currency: 'USD'
    },
    currencyChange: `${USD_TO_BRL} BRL = 1 USDT`
  }

  return (
    <Container maxW='4xl' p={0}>
      <ModalQr
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
        data={modalData}
      />
      <Box
        color='white'
        background='lightBlack'
        filter='drop-shadow(21px 4px 80px rgba(255, 255, 255, 0.03))'
        px={{ base: 4, md: 16 }}
        py={{ base: 8, md: 14 }}
        borderRadius='xl'
      >
        <Text>Monto a cobrar</Text>

        {/* Input de pesos argentinos */}
        <InputGroup alignItems='self-end'>
          <InputLeftAddon pl={8} borderColor='transparent' background='gray'>
            $
          </InputLeftAddon>
          <Input
            border='none'
            name='arsInput'
            value={arsInput}
            type='text'
            mt={2}
            onChange={handleArsInput}
          />
          <InputRightAddon pr={8} borderColor='transparent' background='gray'>
            <Image src={argentinaIcon} alt='Bandera argentina' />
            <Text ml={4}>ARS</Text>
          </InputRightAddon>
        </InputGroup>
        {/* Fin input de pesos argentinos */}

        {/* Input de dólares estadounidenses */}
        <InputGroup alignItems='self-end'>
          <InputLeftAddon pl={8} borderColor='transparent' background='gray'>
            $
          </InputLeftAddon>
          <Input
            border='none'
            name='arsInput'
            value={usdInput}
            type='text'
            mt={2}
            onChange={handleUsdInput}
          />
          <InputRightAddon pr={8} borderColor='transparent' background='gray'>
            <Image src={usaIcon} alt='Bandera argentina' />
            <Text ml={4}>USD</Text>
          </InputRightAddon>
        </InputGroup>
        {/* Fin input de dólares estadounidenses */}

        <Box my={6} borderBottom='2px solid gray' pb={6}>
          {commissions.map((commission) => (
            <Flex
              key={commission.concept}
              alignItems='center'
              justifyContent='space-between'
              mb={2}
            >
              <Text>
                {commission.amount} {commission.currency}
              </Text>
              <Text>{commission.concept}</Text>
            </Flex>
          ))}
        </Box>

        {/* Input de reales */}
        <InputGroup alignItems='self-end'>
          <InputLeftAddon pl={8} borderColor='transparent' background='gray'>
            $
          </InputLeftAddon>
          <Input
            border='none'
            name='arsInput'
            value={brlInput}
            type='text'
            mt={2}
            readOnly
          />
          <InputRightAddon pr={8} borderColor='transparent' background='gray'>
            <Image src={brazilIcon} alt='Bandera argentina' />
            <Text ml={4}>BRL</Text>
          </InputRightAddon>
        </InputGroup>
        {/* Fin input de reales */}

        <Flex alignItems='center' mt={6}>
          <Button fontSize='sm' width='100%' variant='secondary' mr={2}>
            <Box fontSize='2xl' mr={2}>
              <CiLink />
            </Box>
            <Text>Generar Link</Text>
          </Button>
          <Button
            fontSize='sm'
            width='100%'
            variant='primary'
            ml={2}
            onClick={onOpen}
            isDisabled={!brlInput}
          >
            <Box fontSize='2xl' mr={2}>
              <MdQrCodeScanner />
            </Box>
            <Text>Generar QR</Text>
          </Button>
        </Flex>
      </Box>
    </Container>
  )
}

export default Cobrar
