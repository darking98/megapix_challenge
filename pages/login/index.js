import React from 'react'
import { Box, Text, Heading, Center, Button, Input } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { signInWithEmail } from '@/functions/supabase'
import { handleToast } from '@/functions/toast'
const Login = () => {
  const { register, handleSubmit } = useForm()
  const onSubmit = async (data) => {
    if (!data.email) return
    try {
      console.log('algo')

      await signInWithEmail(data.email)
      handleToast({
        title: 'Email enviado correctamente',
        text: `Te hemos enviado un email con el link para ingresar a ${data.email}`,
        status: 'success',
        duration: 9000,
        isClosable: true
      })
    } catch (error) {
      handleToast({
        title: 'Hubo un error',
        text: error.message,
        status: 'error',
        duration: 9000,
        isClosable: true
      })
    }
  }

  return (
    <Center height='100%'>
      <Box background='gray' borderRadius='md' p={2}>
        <Heading textAlign='center' mb={2}>
          Te damos la bienvenida 👋
        </Heading>
        <Text fontSize='sm'>
          Hoy es un nuevo día. Es tu día. Tú le das forma.
        </Text>
        <Text fontSize='sm' mb={4}>
          Inicia sesión para comenzar a gestionar tu proyecto.
        </Text>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label id='email' htmlFor='email'>
            Email
          </label>

          <Input {...register('email')} />
          <Button w='100%' mt={2} type='submit'>
            Enviar link de acceso
          </Button>
        </form>
      </Box>
    </Center>
  )
}

export default Login
