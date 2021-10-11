import App from 'next/app'
import 'antd/dist/antd.css'
import '../styles/globals.css'
import React from 'react'
import type {AppProps, AppContext} from 'next/app'
import {AppStateProvider} from '../context'
import {SessionProvider} from 'next-auth/react'
import ThemeWrapper from '@components/ThemeWrapper'
import Layout from '@components/layout'

function MyApp({Component, pageProps: {session, ...pageProps}}: AppProps) {
  return (
    <ThemeWrapper>
      <SessionProvider session={session}>
        <AppStateProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </AppStateProvider>
      </SessionProvider>
    </ThemeWrapper>
  )
}

export default MyApp
