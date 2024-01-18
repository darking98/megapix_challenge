import '@/styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import customTheme from '@/styles/themes/theme'
import MainLayout from '@/components/layout/MainLayout'
import { AuthProvider } from '@/context/AuthProvider'
import ProtectedRoute from '@/routes/ProtectedRoute'
export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <ChakraProvider theme={customTheme}>
        <MainLayout>
          <ProtectedRoute>
            <Component {...pageProps} />
          </ProtectedRoute>
        </MainLayout>
      </ChakraProvider>
    </AuthProvider>
  )
}
