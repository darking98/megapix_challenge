import { createStandaloneToast } from '@chakra-ui/toast'
import { Box, Text, Button, Center, Flex } from '@chakra-ui/react'
import {
  IoCheckmark,
  IoWarningOutline,
  IoIosInformationCircleOutline,
  IoClose
} from 'react-icons/io5'
import { MdErrorOutline } from 'react-icons/md'

const colors = {
  success: 'primary',
  error: 'red.500',
  warning: 'yellow.500',
  info: 'blue.500'
}
const icons = {
  success: <IoCheckmark />,
  error: <MdErrorOutline />,
  warning: <IoWarningOutline />,
  info: <IoIosInformationCircleOutline />
}

class ToastInstance {
  constructor() {
    this.toast = createStandaloneToast()
  }

  fire({ title, text, status, duration }) {
    this.toastId = this.toast.toast({
      position: 'bottom-center',
      duration,
      render: () => (
        <Box
          p={1}
          position='relative'
          color='white'
          bg='lightBlack'
          borderRadius='8px'
        >
          <Flex
            borderLeft='4px solid #62FEE2'
            borderLeftRadius='3px'
            p={2}
            alignItems='center'
          >
            <Center
              color={colors[status]}
              borderRadius='lg'
              background='gray'
              height='50px'
              width='50px'
              mr={2}
              fontSize='xl'
            >
              {icons[status]}
            </Center>
            <Box fontSize='sm' flex='1'>
              <Text fontWeight='bold'>{title}</Text>
              <Text>{text}</Text>
            </Box>
            <Button variant='icon' border={0} onClick={() => this.close()}>
              <IoClose />
            </Button>
          </Flex>
        </Box>
      )
    })
  }
  close() {
    this.toast.toast.close(this.toastId)
  }
}

export const handleToast = ({ title, text, status = 'info', duration }) => {
  const Toast = new ToastInstance()
  console.log(Toast)
  Toast.fire({ title, text, status, duration })
}
