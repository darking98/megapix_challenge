import React from 'react'
/* FontAwesome */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/free-regular-svg-icons'
import { faGear, faBars } from '@fortawesome/free-solid-svg-icons'
/* Chakra UI */
import { Flex, Box, Button, useDisclosure } from '@chakra-ui/react'
/* assets */
import profileImage from '@/assets/profile.jpeg'
import smallLogo from '@/assets/small_logo.png'
import Image from 'next/image'
/* Components */
import Drawer from './Drawer'

const NavbarDesktop = ({ showOnMobile, ...rest }) => {
  return (
    <Box {...rest} display={{ base: showOnMobile ? 'block' : 'none', md: 'block' }}>
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

const NavbarMobile = ({ onOpen }) => {
  return (
    <Flex
      display={{ base: 'flex', md: 'none' }}
      justifyContent='space-between'
      width='100%'
    >
      <Box>
        <Image alt='Logo pequeño de MegaPix' src={smallLogo} />
      </Box>
      <Box onClick={onOpen}>
        <FontAwesomeIcon icon={faBars} width='18px' />
      </Box>
    </Flex>
  )
}
const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
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
      _before={{
        content: '""',
        borderBottom: '1px solid #5A5A5A',
        width: '200%',
        position: 'absolute',
        bottom: '0',
        right: '0',
        overflow: 'hidden'
      }}
    >
      {/* Componente para navbar de desktop */}
      <NavbarDesktop />
      {/* Componente para navbar de mobile */}
      <NavbarMobile onOpen={onOpen} />
      <Drawer NavbarDesktop={NavbarDesktop} isOpen={isOpen} onClose={onClose} />
    </Flex>
  )
}

export default Navbar
