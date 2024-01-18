import React from 'react'
import {
  Box,
  Text,
  Heading,
  Center,
  Button,
  Input,
  useToast
} from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { signInWithEmail } from '@/functions/supabase'
const Login = () => {
  const toast = useToast()
  const { register, handleSubmit } = useForm()
  const onSubmit = async (data) => {
    if (!data.email) return
    const request = await signInWithEmail(data.email).then(() =>
      toast({
        title: 'Email enviado correctamente',
        description: `Te hemos enviado un email con el link para ingresar a ${data.email}`,
        status: 'success',
        duration: 9000,
        isClosable: true
      })
    )
    console.log(request)
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
