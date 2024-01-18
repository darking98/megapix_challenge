import React, { useState, useContext } from 'react'
import { useRouter } from 'next/router'
import { AuthContext } from '@/context/AuthProvider'
/* Components */
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { UnprotectedNavbar } from './Navbar'
/* Chakra UI */
import { Box, Flex, Grid } from '@chakra-ui/react'

const ProtectedLayout = ({ children }) => {
  const [isCollapsed, setIsCollapsed] = useState(false)
  return (
    <Grid
      gridTemplateColumns={{
        base: '1fr',
        md: isCollapsed ? '80px 1fr' : '258px 1fr'
      }}
      background='black'
      minHeight='100vh'
      pb={{ base: '20', md: '0' }}
    >
      <Box display={{ base: 'none', md: 'block' }}>
        <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      </Box>
      <Flex flexDirection='column' height='100%'>
        <Navbar />
        <Box px={{ base: 4, md: 15 }} py={{ base: 2, md: 8 }}>
          {children}
        </Box>
      </Flex>
    </Grid>
  )
}

const UnprotectedLayout = ({ children }) => {
  return (
    <Box height='100vh' background='black'>
      <Flex flexDirection='column' height='100%'>
        <UnprotectedNavbar />
        <Box p={4} height='100%'>
          {children}
        </Box>
      </Flex>
    </Box>
  )
}

const MainLayout = ({ children }) => {
  const { session } = useContext(AuthContext)
  const router = useRouter()
  const unprotectedRoutes = ['/', '/login']
  return (
    <>
      {!session || unprotectedRoutes.includes(router.pathname) ? (
        <UnprotectedLayout>{children}</UnprotectedLayout>
      ) : (
        <ProtectedLayout>{children}</ProtectedLayout>
      )}
    </>
  )
}

export default MainLayout
