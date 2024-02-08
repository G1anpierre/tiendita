'use client'

import React from 'react'
import {useRouter} from 'next/navigation'

export const Footer = () => {
  const router = useRouter()

  return (
    <footer className="bg-gray-600">
      <span onClick={() => router.push('/cookie-declaration')}>
        cookie declaration
      </span>
    </footer>
  )
}
