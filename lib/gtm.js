export const pageview = url => {
  console.log('url: ', url)
  window.dataLayer.push({
    event: 'pageview',
    page: url,
  })
}
