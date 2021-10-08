import React from 'react'
import Header from '@components/header'

type LayoutProps = {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({children}) => {
  return (
    <>
      <div className="layout">
        <Header />
        {children}
        <footer className="footer">footer</footer>
      </div>
      <style jsx>{`
        .layout {
          padding: 0 15px;
        }
        .footer {
          background: black;
        }
      `}</style>
    </>
  )
}

export default Layout
