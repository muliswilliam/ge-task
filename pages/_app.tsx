import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

// Chakra UI
import { ChakraProvider } from '@chakra-ui/react'

// react-query setup
const queryClient = new QueryClient()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />   
      </QueryClientProvider>
    </ChakraProvider>
  )
}
