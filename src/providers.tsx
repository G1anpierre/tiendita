'use client'
import Script from 'next/script'
import {NEXT_PUBLIC_GTM_ID} from 'src/config'
// import {useRouter} from 'next/router'
import React from 'react'
import {SessionProvider} from 'next-auth/react'
import {CartStateProvider, ProductsProvider} from './context'
import Layout from '@components/Layout'
import {pageview} from './lib/gtm'

const tagManagerArgs = {
  gtmId: NEXT_PUBLIC_GTM_ID as string,
}

export const Providers = ({children}: {children: React.ReactNode}) => {
  // const router = useRouter()
  // useEffect(() => {
  //   router.events.on('routeChangeComplete', pageview)
  //   return () => {
  //     router.events.off('routeChangeComplete', pageview)
  //   }
  // }, [router.events])
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

      <SessionProvider>
        <ProductsProvider>
          <CartStateProvider>
            <Layout>{children}</Layout>
          </CartStateProvider>
        </ProductsProvider>
      </SessionProvider>
    </>
  )
}
