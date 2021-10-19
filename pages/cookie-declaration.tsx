import React, {useEffect} from 'react'
import {useRouter} from 'next/router'

const CookieDeclaration = () => {
  const router = useRouter()

  useEffect(() => {
    router.reload()
  }, [router])

  return (
    <div>
      <h1>Cookie Declaration</h1>
      <script
        id="CookieDeclaration"
        src="https://consent.cookiebot.com/7b132f08-cd18-475c-a995-2a7991985675/cd.js"
        type="text/javascript"
        async
      ></script>
    </div>
  )
}

export default CookieDeclaration
