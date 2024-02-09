'use client'

import React from 'react'
import Link from 'next/link'
import {useSession, signIn, signOut} from 'next-auth/react'
import {DrawerDemo} from './Drawer'
import {Button} from './ui/button'

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
            {/* <div className="flex gap-1">
              <span>Mexico City Reforma</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                  clipRule="evenodd"
                />
              </svg>
            </div> */}
          </div>
          {session ? (
            <Button
              className="col-start-2 justify-self-end"
              onClick={() => signOut()}
              variant="link"
            >
              {session?.user?.name}, Sign Out
            </Button>
          ) : (
            <Button
              className="col-start-2 sm:col-start-3 justify-self-end"
              onClick={() => signIn()}
              variant="link"
            >
              Sign In
            </Button>
          )}
          <div className="col-start-3 sm:col-start-4">
            <DrawerDemo />
          </div>
        </nav>
      </header>
    </>
  )
}
