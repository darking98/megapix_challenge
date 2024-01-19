import React, { useEffect } from 'react'
import { supabase } from '@/functions/supabase'
import { Button, Box } from '@chakra-ui/react'
const Cobrar = () => {
  /*useEffect(() => {
    const getRefreshSession = async () => {
      const { data, error } = await supabase.auth.getSession()
      console.log(data)
    }

    getRefreshSession()
  }, [])
  */
  const handleLogout = async () => {
    const req = await supabase.auth.signOut()
    console.log(req)
  }
  return (
    <Box color='white'>
      Cobrar
      <Button onClick={handleLogout}>Salir</Button>
    </Box>
  )
}

export default Cobrar
