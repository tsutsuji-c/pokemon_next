import { DefaultLayout } from '../components/templates/defaultLayout'
import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
       <DefaultLayout>

      <Component {...pageProps} />
       </DefaultLayout>
    </ChakraProvider>
  )
}
export default MyApp
