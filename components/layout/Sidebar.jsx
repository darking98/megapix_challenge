import React from 'react'
/* Next */
import { Link as NextLink } from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
/* Chakra UI */
import { Box, Flex, Text, Button, Link } from '@chakra-ui/react'
/* FontAwesome */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowsLeftRightToLine,
  faSun
} from '@fortawesome/free-solid-svg-icons'
/* Assets */
import logo from '@/assets/full_logo.png'
import smallLogo from '@/assets/small_logo.png'
import { sidebarItems } from '@/utils/utils'

export const SidebarItems = ({ isCollapsed }) => {
  const router = useRouter()

  return (
    <Box py={8} borderBottom='1px solid #5A5A5A' px={isCollapsed ? 2 : 5}>
      <Flex flexDirection='column'>
        {sidebarItems.map((item) => (
          <Link as={NextLink} href={item.path} key={item.title}>
            <Button
              justifyContent={isCollapsed ? 'center' : 'flex-start'}
              width='100%'
              px={0}
              variant='aside'
              fontWeight={router.pathname === item.path ? '600' : 'normal'}
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
              <Box mx={3}>{item.icon}</Box>
              {!isCollapsed ? <Text>{item.title}</Text> : null}
            </Button>
          </Link>
        ))}
      </Flex>
    </Box>
  )
}
const Sidebar = ({ isCollapsed, setIsCollapsed }) => {
  return (
    <Box
      height='100%'
      width={isCollapsed ? '80px' : '258px'}
      background='gray'
      color='white'
      position='fixed'
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
          fontWeight='normal'
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
          fontWeight='normal'
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
