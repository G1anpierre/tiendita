import React from 'react'
import Script from 'next/script'

const CookieDeclaration = () => {
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
          document.getElementById('policy-script')?.appendChild(script)
        }
        `}
      </Script>
    </>
  )
}

export default CookieDeclaration
