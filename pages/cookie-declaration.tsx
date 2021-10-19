import React, {useEffect} from 'react'
import {useRouter} from 'next/router'
import Script from 'next/script'

import Head from 'next/head'

const CookieDeclaration = () => {
  return (
    <>
      <div>
        <h1>Cookie Declaration 1</h1>
        <Script
          id="CookieDeclaration"
          src="https://consent.cookiebot.com/7b132f08-cd18-475c-a995-2a7991985675/cd.js"
        />
      </div>
    </>
  )
}

export default CookieDeclaration
