const createURL = (path: string) => {
  return window.location.origin + path
}

export const createCheckout = async (cart: ProductType[]) => {
  const response = await fetch(
    new Request(createURL('/api/stripe'), {
      method: 'POST',
      body: JSON.stringify(cart),
    }),
  )
  const data = await response.json()
  return data
}
