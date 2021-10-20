export const pageview = url => {
  console.log('url: ', url)
  if (url !== '/cookie-declaration') {
    console.log('url')
  }
  window.dataLayer.push({
    event: 'pageview',
    page: url,
  })
}
