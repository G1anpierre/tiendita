import React, {useEffect} from 'react'
import {useRouter} from 'next/router'
import Script from 'next/script'

const CookieDeclaration = () => {
  const router = useRouter()

  return (
    <>
      <h1>Cookie Declaration</h1>
      <div id="policy-script">Here is going to come code</div>
      <Script
        strategy="afterInteractive"
        onLoad={() => {
          console.log('hello world')
          const script = document.createElement('script')
          script.src =
            'https://consent.cookiebot.com/7b132f08-cd18-475c-a995-2a7991985675/cd.js'
          script.setAttribute('id', 'CookieDeclaration')
          console.log('script: ', script)
          document.getElementById('policy-script')?.appendChild(script)
        }}
      />
    </>
  )
}

export default CookieDeclaration
