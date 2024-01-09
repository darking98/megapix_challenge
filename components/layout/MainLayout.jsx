import React, {useState} from 'react'
/* Components */
import Navbar from './Navbar'
import Sidebar from './Sidebar'
/* Chakra UI */
import { Box, Flex, Grid } from '@chakra-ui/react'
const MainLayout = ({ children }) => {
  const [isCollapsed, setIsCollapsed] = useState(false)
  return (
    <Grid gridTemplateColumns={{base: '1fr', md: isCollapsed ? '80px 1fr' : '258px 1fr'}} background='black' minHeight='100vh'>
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

export default MainLayout
