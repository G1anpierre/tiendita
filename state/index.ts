const initialState = {
  cart: [],
}

export const initializer = (initialValue = initialState) => {
  if (typeof window !== 'undefined') {
    return JSON.parse(
      localStorage?.getItem('cart') || JSON.stringify(initialValue),
    )
  }
  return initialValue
}

const productsInitialState = {
  products: [],
}

export {initialState, productsInitialState}
