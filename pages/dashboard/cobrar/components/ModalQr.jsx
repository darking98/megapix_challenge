import React, {useEffect} from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Button,
  Text,
  Box,
  Flex,
  Center
} from '@chakra-ui/react'
import Image from 'next/image'
/* Icons */
import { AiOutlineHome } from 'react-icons/ai'
import { CiLink } from 'react-icons/ci'
import { formatCurrency } from '@/functions/func'
import qrImage from '@/assets/qr_example.png'
import useCountdown from '@/hooks/useCountdown'
const ModalQr = ({ isOpen, onOpen, onClose, data }) => {
  const { amount, equalTo, currencyChange } = data || {}
  const { timeLeft, setEndTime, minutesLeft, secondsLeft } = useCountdown()

  useEffect(() => {
    if(!isOpen) return 
    setEndTime(new Date().getTime() + 60000 * 5)
  },[isOpen, setEndTime])

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay backdropFilter='blur(11px)' />
      <ModalContent maxW='4xl' background='lightBlack' p={4}>
        <ModalBody>
          <Box borderBottom='2px solid gray' pb={6}>
            <Text fontWeight='600' mb={8}>
              Cobro
            </Text>
            <Box>
              <Flex justifyContent='space-between'>
                <Text>Monto</Text>
                <Text>
                  {formatCurrency(amount.value)} {amount.currency}
                </Text>
              </Flex>
              <Flex justifyContent='space-between'>
                <Text>Equivalente a</Text>
                <Text>
                  {formatCurrency(equalTo.value)} {equalTo.currency}
                </Text>
              </Flex>
              <Flex justifyContent='space-between'>
                <Text>Tipo de cambio</Text>
                <Text>{currencyChange}</Text>
              </Flex>
            </Box>
          </Box>
          <Center flexDirection='column' my={8}>
            <Image src={qrImage} alt='qr' />
            <Text>Expira en {minutesLeft}:{secondsLeft}</Text>
          </Center>
        </ModalBody>
        <ModalFooter justifyContent='space-between'>
          <Button fontSize='sm' width='100%' variant='secondary' mr={2}>
            <Box fontSize='2xl' mr={2}>
              <CiLink />
            </Box>
            <Text>Generar Link</Text>
          </Button>
          <Button fontSize='sm' width='100%' variant='primary' ml={2}>
            <Box fontSize='2xl' mr={2}>
              <AiOutlineHome />
            </Box>
            <Text>Volver al inicio</Text>
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default ModalQr
