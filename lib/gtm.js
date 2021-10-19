export const pageview = url => {
  console.log('url: ', url)
  if (url === '/cookie-declaration') {
  }
  window.dataLayer.push({
    event: 'pageview',
    page: url,
  })
}
