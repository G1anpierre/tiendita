import React, {useEffect} from 'react'
import Header from '@components/header'
import Link from 'next/link'
import {useRouter} from 'next/router'

type LayoutProps = {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({children}) => {
  const router = useRouter()

  // useEffect(() => {
  //   router.beforePopState(({ url, as, options }) => {
  //     // I only want to allow these two routes!
  //     if (as !== '/' && as !== '/cookie-declaration') {
  //       // Have SSR render bad routes as a 404.
  //       window.location.href = as
  //       return false
  //     }

  //     return true
  //   })
  // }, [])

  useEffect(() => {
    if (router.asPath === '/cookie-declaration') {
      router.prefetch('/cookie-declaration')
    }
  }, [])

  return (
    <>
      <div className="layout">
        <Header />
        {children}
        <footer className="footer">
          <span onClick={() => router.push('/cookie-declaration')}>
            cookie declaration
          </span>
        </footer>
      </div>
      <style jsx>{`
        .layout {
          padding: 0 15px;
        }
        .footer {
          background: grey;
        }
      `}</style>
    </>
  )
}

export default Layout
