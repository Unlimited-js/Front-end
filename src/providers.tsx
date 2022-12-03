
import * as React from 'react'
import { ConnectKitProvider } from "connectkit";
import { ThemeProvider } from 'next-themes'
import Theme from './context/theme';


import { WagmiConfig } from 'wagmi'

import { client } from './wagmi'
import {useTheme} from "next-themes"


function Providers({ children}:any) {
    const theme = useTheme()  
   

  return (
    <ThemeProvider attribute="class" enableSystem={false} >
    <Theme>
    <WagmiConfig client={client}>     
        {children}
    </WagmiConfig>
      </Theme>
      </ThemeProvider>

  )
}

export default Providers
