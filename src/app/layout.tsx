import './styles/globals.css'

import {Inter} from 'next/font/google'

import {Footer} from '../components/Footer'
import {Header} from '../components/Header'
import {Providers} from '@/providers'

const inter = Inter({subsets: ['latin']})

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className}`} suppressHydrationWarning>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
