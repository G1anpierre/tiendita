'use client'

import React, {useEffect} from 'react'
import Header from '@components/Header'
import Link from 'next/link'
import {useRouter} from 'next/navigation'

type LayoutProps = {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({children}) => {
  const router = useRouter()

  return (
    <>
      <div>
        <Header />
        <div>{children}</div>
        <footer className="bg-gray-600">
          <span onClick={() => router.push('/cookie-declaration')}>
            cookie declaration
          </span>
        </footer>
      </div>
    </>
  )
}

export default Layout
