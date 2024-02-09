export const pageview = url => {
  if (url === '/cookie-declaration') {
    const script = document.createElement('script')
    script.src =
      'https://consent.cookiebot.com/7b132f08-cd18-475c-a995-2a7991985675/cd.js'
    script.setAttribute('id', 'CookieDeclaration')
    document.getElementById('policy-script')?.appendChild(script)
  }
  window.dataLayer.push({
    event: 'pageview',
    page: url,
  })
}

// Google Tag Manager event
export const selectProduct = product => {
  window.dataLayer.push({
    event: 'addToCart',
    product: product.id,
  })
}
