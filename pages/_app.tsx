import App from 'next/app'
import 'antd/dist/antd.css'
import '../styles/globals.css'
import Script from 'next/script'
import React, {useEffect} from 'react'
import type {AppProps} from 'next/app'
import {CartStateProvider} from '../context'
import {ProductsProvider} from '../context'
import {SessionProvider} from 'next-auth/react'
import ThemeWrapper from '@components/ThemeWrapper'
import Layout from '@components/layout'
import TagManager from 'react-gtm-module'
import {NEXT_PUBLIC_GTM_ID} from 'config'
import {useRouter} from 'next/router'
import {pageview} from '../lib/gtm'

const tagManagerArgs = {
  gtmId: NEXT_PUBLIC_GTM_ID as string,
}

function MyApp({Component, pageProps: {session, ...pageProps}}: AppProps) {
  const router = useRouter()
  useEffect(() => {
    router.events.on('routeChangeComplete', pageview)
    return () => {
      router.events.off('routeChangeComplete', pageview)
    }
  }, [router.events])

  return (
    <>
      <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer', '${NEXT_PUBLIC_GTM_ID}');
        `,
        }}
      />
      <ThemeWrapper>
        <SessionProvider session={session}>
          <ProductsProvider>
            <CartStateProvider>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </CartStateProvider>
          </ProductsProvider>
        </SessionProvider>
      </ThemeWrapper>
    </>
  )
}

export default MyApp
