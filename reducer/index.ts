import {ProductType} from '../types/product'

export type InitialStateType = {
  cart: []
}

export type ActionType = {
  type: 'addProduct' | 'removeProduct' | 'addQuantity' | 'emptyCart'
  payload?: ProductType
  id?: number
  productInfo?: any
}

export const reducer = (state: InitialStateType, action: ActionType) => {
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
      const {id, value} = action.productInfo
      return {
        cart: state.cart.map((element: ProductType) => {
          if (element.id === id) {
            return {
              ...element,
              quantity: value,
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
