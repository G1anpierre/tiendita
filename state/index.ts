const initialState = {
  cart: [],
}

export const initializer = (initialValue = initialState) => {
  return JSON.parse(
    localStorage?.getItem('cart') || JSON.stringify(initialValue),
  )
}

const productsInitialState = {
  products: [],
}

export {initialState, productsInitialState}
