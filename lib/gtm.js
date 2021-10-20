export const pageview = url => {
  if (url === '/cookie-declaration') {
    console.log('url')
    const script = document.createElement('script')
    script.src =
      'https://consent.cookiebot.com/7b132f08-cd18-475c-a995-2a7991985675/cd.js'
    script.setAttribute('id', 'CookieDeclaration')
    console.log('script: ', script)
    console.log('policy-script: ', document.getElementById('policy-script'))
    document.getElementById('policy-script')?.appendChild(script)
  }
  window.dataLayer.push({
    event: 'pageview',
    page: url,
  })
}
