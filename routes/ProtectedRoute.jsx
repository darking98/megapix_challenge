import React, { useContext } from 'react'
import { AuthContext } from '@/context/AuthProvider'
import { useRouter } from 'next/router'

const ProtectedRoute = ({ children }) => {
  const router = useRouter()
  const { session } = useContext(AuthContext)

  const protectedRoutes = ['/dashboard']
  const unprotectedRoutes = ['/login']
  /* Si no tiene sesión e intenta acceder a una ruta protegida lo redirige a login */
  if (
    !session &&
    protectedRoutes.find((route) => router.pathname.startsWith(route))
  ) {
    router.push('/login')
    return null
  }
  /* Si tiene sesión e intenta acceder a algunas rutas desprotegidas lo redirige al dashboard */
  if (
    session &&
    unprotectedRoutes.find((route) => router.pathname.startsWith(route))
  ) {
    router.push('/dashboard')
    return null
  }

  return <>{children}</>
}

export default ProtectedRoute
