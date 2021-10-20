import React, {useEffect} from 'react'
import {useRouter} from 'next/router'
import Script from 'next/script'

const CookieDeclaration = () => {
  const router = useRouter()

  return (
    <>
      <h1>Cookie Declaration</h1>
      <div id="policy-script"></div>
      <Script id="show-banner" strategy="afterInteractive">
        {`
        window.onload = function() {
          const script = document.createElement('script')
          script.src =
            'https://consent.cookiebot.com/7b132f08-cd18-475c-a995-2a7991985675/cd.js'
          script.setAttribute('id', 'CookieDeclaration')
          console.log('script: ', script)
          console.log('policy-script: ', document.getElementById('policy-script'))
          document.getElementById('policy-script')?.appendChild(script)
        }
        `}
      </Script>
    </>
  )
}

export default CookieDeclaration
