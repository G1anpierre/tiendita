import 'antd/dist/antd.css'
import '../styles/globals.css'
import React from 'react'
import type {AppProps} from 'next/app'
import {AppStateProvider} from '../context'

function MyApp({Component, pageProps}: AppProps) {
  return (
    <AppStateProvider>
      <Component {...pageProps} />
    </AppStateProvider>
  )
}
export default MyApp
