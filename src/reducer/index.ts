import {ProductType} from '../../types/product'
import {
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  ADD_QUANTITY,
  EMPTY_CART,
} from '../../stateHelpers/stateVariables'

export type InitialStateType = {
  cart: []
}

export type ActionType = {
  type: 'ADD_PRODUCT' | 'REMOVE_PRODUCT' | 'ADD_QUANTITY' | 'EMPTY_CART'
  payload?: ProductType
  id?: number
  productInfo?: any
}

export const cartReducer = (state: InitialStateType, action: ActionType) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        cart: [...state.cart, action.payload],
      }
    case REMOVE_PRODUCT:
      return {
        cart: state.cart.filter(
          (element: ProductType) => element.id !== action.id,
        ),
      }
    case ADD_QUANTITY:
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
    case EMPTY_CART:
      return {
        cart: [],
      }
  }
}
