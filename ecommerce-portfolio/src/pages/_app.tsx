import type { AppProps } from 'next/app'

import { Box, ChakraProvider } from '@chakra-ui/react'

import { extendTheme } from '@chakra-ui/react'

import { defineStyleConfig } from '@chakra-ui/react'


export const buttonTheme = defineStyleConfig({
  baseStyle:{
    fontWeight: 'normal',
    textTransform: 'uppercase',
    borderRadius: 'none',
    paddingX: '1.5rem',
    _hover:{
      backgroundColor: 'brand.800',
    }
  },
  sizes:{
    sm:{
      fontsize: '0.6667rem',
    },
    md:{
      fontsize: '0.7222rem',
    },
    lg:{
      fontsize: '0.7222rem',
    },
    xl:{
      fontsize: '1rem',
      height: '3.5556rem',
      paddingX: '3rem',
    },
  },
  defaultProps: {
    variant: 'primary',
    size: 'sm',
  },
  variants:{
    primary:{
      backgroundColor: 'brand.900',
      color: 'white',
    }
  }
})

const dividerTheme = defineStyleConfig({
  variants:{
    bold:{
      borderWidth: '2px',
      borderStyle: 'solid',
      borderColor: 'gray.300'
    }
  }
})

import '@fontsource/spartan/400.css'
import '@fontsource/spartan/700.css'
import { Header } from '@/components/Header'
import { TopBar } from '@/components/TopBar'



const theme = extendTheme({
  colors:{
    brand: {
      100: '#f2f2f2',
      200: '#d9d9d9',
      300: '#bfbfbf',
      400: '#a6a6a6',
      500: '#8c8c8c',
      600: '#737373',
      700: '#595959',
      800: '#2a2a2a',
      900: '#121212',
    }
  },
  fonts: {
    heading: `'Spartan', sans-serif`,
    body: `'spartan', sans-serif`,
  },
  components: {
    Button: buttonTheme,
    Divider: dividerTheme,
    Container: {
      baseStyle:{
        maxW: '71.375rem',
      }
    }
  }
})

export default function App({ Component, pageProps }: AppProps) {
  return <ChakraProvider theme={ theme }>
    <TopBar />
    <Box>
      <Header />
    </Box>
    <Component {...pageProps} />
  </ChakraProvider> 
}
