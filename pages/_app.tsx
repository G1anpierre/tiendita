import App from 'next/app'
import 'antd/dist/antd.css'
import '../styles/globals.css'
import React, {useEffect} from 'react'
import type {AppProps, AppContext} from 'next/app'
import {AppStateProvider} from '../context'
import {SessionProvider} from 'next-auth/react'
import ThemeWrapper from '@components/ThemeWrapper'
import Layout from '@components/layout'
import TagManager from 'react-gtm-module'
import {NEXT_PUBLIC_GTM_ID} from 'config'

const tagManagerArgs = {
  gtmId: NEXT_PUBLIC_GTM_ID as string,
}

function MyApp({Component, pageProps: {session, ...pageProps}}: AppProps) {
  useEffect(() => {
    TagManager.initialize(tagManagerArgs)
  }, [])

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
