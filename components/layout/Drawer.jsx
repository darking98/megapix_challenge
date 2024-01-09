import React from 'react'
/* Chakra UI */
import {
  Drawer as ChakraDrawer,
  DrawerBody,
  DrawerFooter,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Box,
  Text
} from '@chakra-ui/react'
/* FontAwesome */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun } from '@fortawesome/free-solid-svg-icons'
/* Components */
import { SidebarItems } from './Sidebar'
const Drawer = ({ NavbarDesktop, isOpen, onClose }) => {
  return (
    <ChakraDrawer isOpen={isOpen} placement='right' onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent background='gray' p={4} color='white'>
        <DrawerCloseButton />
        <DrawerBody>
          <SidebarItems />
          <Box py={8} px={5}>
            <Button
              variant='aside'
              width='100%'
              px={0}
              justifyContent='flex-start'
            >
              <Box mx={3}>
                <FontAwesomeIcon icon={faSun} width='16px' />
              </Box>
              <Text>Light mode</Text>
            </Button>
          </Box>
        </DrawerBody>

        <DrawerFooter>
          <NavbarDesktop showOnMobile />
        </DrawerFooter>
      </DrawerContent>
    </ChakraDrawer>
  )
}

export default Drawer
