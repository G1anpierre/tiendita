import React, {useEffect} from 'react'
import {useRouter} from 'next/router'
import Head from 'next/Head'

const CookieDeclaration = () => {
  return (
    <>
      <Head>
        <script
          id="CookieDeclaration"
          src="https://consent.cookiebot.com/7b132f08-cd18-475c-a995-2a7991985675/cd.js"
          type="text/javascript"
          async
        ></script>
      </Head>
      <div>
        <h1>Cookie Declaration</h1>
      </div>
    </>
  )
}

export default CookieDeclaration
