import React from 'react'

export const AppContext = React.createContext()

export const initialState = {
  cart: [],
}

export type RatingType = {
  count: number
  rate: number
}

export type ProductType = {
  id: number
  title: string
  category: string
  description: string
  image: string
  price: number
  rating: RatingType
  quantity?: number
}

export const reducer = (state, action) => {
  switch (action.type) {
    case 'addProduct':
      return {
        cart: [...state.cart, action.payload],
      }
    case 'removeProduct':
      return {
        cart: state.cart.filter(
          (element: ProductType) => element.id !== action.id,
        ),
      }
    case 'addQuantity':
      return {
        cart: state.cart.map((element: ProductType) => {
          if (element.id === action.productInfo.id) {
            return {
              ...element,
              quantity: action.productInfo.value,
            }
          }
          return element
        }),
      }
    case 'emptyCart':
      return {
        cart: [],
      }
  }
}

export const AppStateProvider: React.FC = ({children}) => {
  const [state, dispatch] = React.useReducer(reducer, initialState)

  return (
    <>
      <AppContext.Provider value={{state, dispatch}}>
        {children}
      </AppContext.Provider>
    </>
  )
}
