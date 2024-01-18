import React, { useState } from 'react'
import { useRouter } from 'next/router'
/* FontAwesome */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/free-regular-svg-icons'
import { faGear } from '@fortawesome/free-solid-svg-icons'
/* Chakra UI */
import { Flex, Box, Button, Text, Link, Center } from '@chakra-ui/react'
/* assets */
import profileImage from '@/assets/profile.jpeg'
import logo from '@/assets/full_logo.png'
import Image from 'next/image'
/* Components */
import { Link as NextLink } from 'next/link'
import { navbarMobileItems } from '@/utils/utils'

const NavbarDesktop = () => {
  return (
    <Box display={{ base: 'none', md: 'block' }}>
      <Button variant='icon'>
        <FontAwesomeIcon icon={faBell} width='20px' />
      </Button>
      <Button mx='5' variant='icon'>
        <FontAwesomeIcon icon={faGear} width='20px' type='regular' />
      </Button>
      <Button variant='avatar'>
        <Image
          src={profileImage}
          alt='Foto de perfil'
          style={{ height: '40px', width: '40px', borderRadius: '50%' }}
        />
      </Button>
    </Box>
  )
}

const NavbarMobile = () => {
  const [isMainOpen, setIsMainOpen] = useState(false)

  const handleOnMain = () => {
    setIsMainOpen(!isMainOpen)
  }
  const router = useRouter()
  return (
    <>
      {/* Navbar top con el avatar y las notificaciones */}
      <Flex
        display={{ base: 'flex', md: 'none' }}
        justifyContent='space-between'
        width='100%'
        alignItems='center'
      >
        <Flex alignItems='center'>
          <Button variant='avatar'>
            <Image
              src={profileImage}
              alt='Foto de perfil'
              style={{ height: '40px', width: '40px', borderRadius: '50%' }}
            />
          </Button>
          <Box>
            <Button
              variant='transparent'
              flexDirection='column'
              alignItems='flex-start'
              textAlign='start'
              fontSize='sm'
            >
              <Text fontWeight='normal'>¡Hola Adri!</Text>
              <Text>@AdrianAlarcon {`>`}</Text>
            </Button>
          </Box>
        </Flex>
        <Button variant='icon'>
          <FontAwesomeIcon icon={faBell} width='20px' />
        </Button>
      </Flex>
      {/* Navbar bottom dónde se muestran las categorías */}
      <Flex
        display={{ base: 'flex', md: 'none' }}
        position='fixed'
        width='100%'
        bottom='0'
        left='0'
        background='gray'
        borderTopLeftRadius='3xl'
        borderTopRightRadius='3xl'
        px={6}
        py={2}
        filter='drop-shadow(4px 0px 34px #000)'
      >
        <Flex justifyContent='space-between' width='100%'>
          {navbarMobileItems.map((item) => (
            <>
              {item.isMain ? (
                <Center position='relative'>
                  <Button variant='navbarMain' onClick={handleOnMain}>
                    <Box
                      p={1}
                      border='2px solid black'
                      borderRadius='md'
                      transition='300ms ease-in-out'
                      transform={isMainOpen && 'rotate(-90deg)'}
                    >
                      {item.icon}
                    </Box>
                  </Button>
                </Center>
              ) : (
                <Link as={NextLink} href={item.path} key={item.title}>
                  <Button
                    justifyContent='center'
                    flexDirection='column'
                    width='100%'
                    px={0}
                    variant='aside'
                    fontWeight={router.pathname === item.path ? '400' : '100'}
                    color={router.pathname === item.path ? 'primary' : 'white'}
                  >
                    <Box mx={3} fontSize='24px'>
                      {item.icon}
                    </Box>
                    <Text mt={1} fontSize='xs'>
                      {item.title}
                    </Text>
                  </Button>
                </Link>
              )}
            </>
          ))}
        </Flex>
      </Flex>
    </>
  )
}

export const UnprotectedNavbar = () => {
  return (
    <Flex
      width='100%'
      justifyContent='space-between'
      background='gray'
      p={4}
      alignItems='center'
    >
      <Box>
        <Link as={NextLink} href='/'>
          <Image src={logo} alt='Logo de Megapix' />
        </Link>
      </Box>
      <Link as={NextLink} href='/login'>
        <Button>Iniciar sesión</Button>
      </Link>
    </Flex>
  )
}
const Navbar = () => {
  return (
    <Flex
      position='relative'
      width='100%'
      justifyContent='flex-end'
      pr={{ base: 4, md: 15 }}
      pl={{ base: 4, md: 0 }}
      py={5}
      zIndex='9'
      color='white'
    >
      {/* Componente para navbar de desktop */}
      <NavbarDesktop />
      {/* Componente para navbar de mobile */}
      <NavbarMobile />
    </Flex>
  )
}

export default Navbar
