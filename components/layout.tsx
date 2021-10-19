import React from 'react'
import Header from '@components/header'
import Link from 'next/link'

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
          <Link href="/cookie-declaration">cookie declaration</Link>
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
