'use client'

import React from 'react'
import Link from 'next/link'
import {useSession, signIn, signOut} from 'next-auth/react'
import {DrawerDemo} from './Drawer'

export const Header = () => {
  const {data: session, status} = useSession()

  return (
    <>
      <header className="header">
        <nav className="grid grid-cols-[1fr_1fr_auto] grid-row-2 p-4 items-center gap-2 sm:grid-cols-[1fr_auto_auto_auto]">
          <Link href="/">
            <div className="col-start-1 text-orange-600 italic font-bold text-3xl">
              Tiendita
            </div>
          </Link>
          <div className="row-start-2 col-span-3 justify-self-center hover:pointer sm:col-start-2 sm:row-start-1 sm:justify-self-end sm:col-span-1">
            Mexico City Reforma
          </div>
          {session ? (
            <div
              className="col-start-2 justify-self-end"
              onClick={() => signOut()}
            >
              {session?.user?.name}, Sign Out
            </div>
          ) : (
            <div
              className="col-start-2 sm:col-start-3 justify-self-end"
              onClick={() => signIn()}
            >
              Sign In
            </div>
          )}
          <div className="col-start-3 sm:col-start-4">
            <DrawerDemo />
          </div>
        </nav>
      </header>
    </>
  )
}
