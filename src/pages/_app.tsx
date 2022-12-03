import type { AppProps } from 'next/app'
import NextHead from 'next/head'
import '../../styles/globals.css'
import * as React from 'react'
import { ConnectKitProvider } from "connectkit";
import Providers from 'src/providers';
import Header from '@components/header';
import {  useContext } from 'react';
import { ThemeContext } from 'src/context/theme';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


enum Theme {
  dark="dark",
  light="light"
}

function App({ Component, pageProps }: AppProps) {  

  const [ theme] = useContext(ThemeContext)


  const [mounted, setMounted] = React.useState(false)
  React.useEffect(() => setMounted(true), [])



  return (
    <>
    <Providers>  
      <NextHead>
        <title>Unlimited</title>
      </NextHead>
      <ConnectKitProvider  mode={theme ? Theme.dark :Theme.light}>
      {mounted && 
      <div>
        <Header />
        <ToastContainer />
        <Component {...pageProps} />
        </div>}
      </ConnectKitProvider>  
      </Providers>
      </>

  )
}


export default App


