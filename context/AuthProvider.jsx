import React, { createContext, useState, useEffect } from 'react'
import { supabase } from '@/functions/supabase'
import LoadingPage from '@/components/LoadingPage'
import { Suspense } from 'react'
const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
  const [session, setSession] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const setData = async () => {
      const {
        data: { session },
        error
      } = await supabase.auth.getSession()
      if (error) throw error
      setSession(session)
      setLoading(false)
    }

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session)
        setLoading(false)
      }
    )

    setData()

    return () => {
      listener.subscription.unsubscribe()
    }
  }, [])

  /* Cambiar pantalla de loading por una pantalla con un spinner */
  if (loading) {
    return <LoadingPage />
  }

  return (
    <AuthContext.Provider value={{ session }}>{children}</AuthContext.Provider>
  )
}

export { AuthProvider, AuthContext }
