import React from 'react'
/* Next */
import { Link as NextLink } from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
/* Chakra UI */
import { Box, Flex, Text, Button, Link, useColorMode } from '@chakra-ui/react'
/* FontAwesome */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHouse,
  faChartSimple,
  faBoxArchive,
  faArrowsLeftRightToLine,
  faSun,
  faStore,
  faMoneyBill
} from '@fortawesome/free-solid-svg-icons'
/* Assets */
import logo from '@/assets/full_logo.png'
import smallLogo from '@/assets/small_logo.png'

const items = [
  {
    icon: faHouse,
    title: 'Home',
    path: '/'
  },
  {
    icon: faMoneyBill,
    title: 'Cobrar',
    path: '/cobrar'
  },
  {
    icon: faStore,
    title: 'Tienda',
    path: '/tienda'
  },
  {
    icon: faBoxArchive,
    title: 'Actividad',
    path: '/actividad'
  },
  {
    icon: faChartSimple,
    title: 'Reportes',
    path: '/reportes'
  }
]

export const SidebarItems = ({ isCollapsed }) => {
  const router = useRouter()

  return (
    <Box py={8} borderBottom='1px solid #5A5A5A' px={isCollapsed ? 2 : 5}>
      <Flex flexDirection='column'>
        {items.map((item) => (
          <Link as={NextLink} href={item.path} key={item.title}>
            <Button
              justifyContent={isCollapsed ? 'center' : 'flex-start'}
              width='100%'
              px={0}
              variant='aside'
              fontWeight={router.pathname === item.path ? 'bold' : 'normal'}
              background={
                router.pathname === item.path ? '#333' : 'transparent'
              }
              _before={
                router.pathname === item.path && {
                  content: '""',
                  position: 'absolute',
                  height: '82%',
                  width: '4px',
                  borderRadius: 'md',
                  background: '#62FEE2',
                  left: '0'
                }
              }
            >
              <Box mx={3}>
                <FontAwesomeIcon icon={item.icon} width='16px' />
              </Box>
              {!isCollapsed ? <Text>{item.title}</Text> : null}
            </Button>
          </Link>
        ))}
      </Flex>
    </Box>
  )
}
const Sidebar = ({ isCollapsed, setIsCollapsed }) => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Box
      height='100%'
      width={isCollapsed ? '80px' : '258px'}
      background='gray'
      color='white'
    >
      <Flex
        justifyContent={isCollapsed ? 'center' : 'flex-start'}
        px={isCollapsed ? 2 : 5}
        background='gray'
        py={8}
      >
        <Box minHeight='29px'>
          <Image
            src={!isCollapsed ? logo : smallLogo}
            alt='Logo de Megapix'
            height='30px'
          />
        </Box>
      </Flex>
      <SidebarItems isCollapsed={isCollapsed} />
      <Box py={8} px={isCollapsed ? 2 : 5}>
        <Button
          variant='aside'
          width='100%'
          px={0}
          justifyContent={isCollapsed ? 'center' : 'flex-start'}
          onClick={toggleColorMode}
        >
          <Box mx={3}>
            <FontAwesomeIcon icon={faSun} width='16px' />
          </Box>
          {!isCollapsed ? <Text>Light mode</Text> : null}
        </Button>
        <Button
          variant='aside'
          width='100%'
          px={0}
          onClick={() => setIsCollapsed(!isCollapsed)}
          justifyContent={isCollapsed ? 'center' : 'flex-start'}
        >
          <Box mx={3}>
            <FontAwesomeIcon icon={faArrowsLeftRightToLine} width='16px' />
          </Box>
          {!isCollapsed ? <Text>Colapsar</Text> : null}
        </Button>
      </Box>
    </Box>
  )
}

export default Sidebar
