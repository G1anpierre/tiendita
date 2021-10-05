import 'antd/dist/antd.css'
import '../styles/globals.css'
import React from 'react'
import type {AppProps} from 'next/app'
import {AppStateProvider} from '../context'
import {SessionProvider} from 'next-auth/react'

function MyApp({Component, pageProps: {session, ...pageProps}}: AppProps) {
  return (
    <SessionProvider session={session}>
      <AppStateProvider>
        <Component {...pageProps} />
      </AppStateProvider>
    </SessionProvider>
  )
}
export default MyApp
