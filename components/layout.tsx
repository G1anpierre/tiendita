import React from 'react'
import Header from '@components/header'
import Link from 'next/link'
import {useRouter} from 'next/router'

type LayoutProps = {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({children}) => {
  return (
    <>
      <div className="layout">
        <Header />
        {children}
        <footer className="footer">
          <a href="/cookie-declaration">cookie declaration</a>
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
