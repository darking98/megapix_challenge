import '@/styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import customTheme from '@/styles/themes/theme'
import MainLayout from '@/components/layout/MainLayout'
export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={customTheme}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </ChakraProvider>
  )
}
