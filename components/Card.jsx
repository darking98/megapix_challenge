import React, { useState } from 'react'
import { Text, Box, Flex, Button } from '@chakra-ui/react'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { formatCurrency } from '@/functions/func'
const Card = ({ title, value, hideValue }) => {
  const [showBalance, setShowBalance] = useState(true)
  const splittedValue = formatCurrency(value)
    .split(/[$,]/)
    .filter((val) => val)
    .map((val) => val.trim())
  return (
    <Box
      p='8'
      borderRadius='md'
      background='lightBlack'
      filter='drop-shadow(21px 4px 80px rgba(255, 255, 255, 0.03))'
    >
      <Flex justifyContent='space-between' mb={4}>
        {typeof title === 'object' ? title : <Text>{title}</Text>}
      </Flex>
      {hideValue ? (
        <Flex alignItems='center'>
          <Flex alignItems='baseline' mr={2}>
            <Text fontSize='2xl'>$</Text>
            {showBalance ? (
              <>
                <Text fontSize='4xl'>{splittedValue[0]},</Text>
                <Text fontSize='2xl'>{splittedValue[1]}</Text>
              </>
            ) : (
              <Text>***</Text>
            )}
          </Flex>
          <Button variant='icon' onClick={() => setShowBalance(!showBalance)}>
            {showBalance ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
          </Button>
        </Flex>
      ) : (
        <Flex alignItems='baseline'>
          <Text fontSize='2xl'>$</Text>
          <Text fontSize='4xl'>{splittedValue[0]},</Text>
          <Text fontSize='2xl'>{splittedValue[1]}</Text>
        </Flex>
      )}
    </Box>
  )
}

export default Card
