'use client'

import React from 'react'
import Header from '@components/Header'
import Link from 'next/link'
import {useRouter} from 'next/navigation'

type AppLayoutProps = {
  children: React.ReactNode
}

export const AppLayout: React.FC<AppLayoutProps> = ({children}) => {
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
