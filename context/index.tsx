import React, {useReducer} from 'react'
import {
  calculateNumberOfCartElements,
  calculateTotalPrice,
  findElement,
} from '../utilities'

type InitialStateType = {
  cart: []
}

type ProductInfoType = {
  id: number
  value: number
}

type ActionType = {
  type: 'addProduct' | 'removeProduct' | 'addQuantity' | 'emptyCart'
  payload?: ProductType
  id?: number
  productInfo?: any
}

export const initialState = {
  cart: [],
}

const defaultState = {} as InitialStateType

export const AppContext = React.createContext(defaultState)
export const AppDispatchContext = React.createContext(
  (() => {}) as React.Dispatch<ActionType>,
)

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

export const AppStateProvider = ({children}: {children: React.ReactNode}) => {
  //@ts-ignore
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <>
      <AppContext.Provider value={state}>
        <AppDispatchContext.Provider value={dispatch}>
          {children}
        </AppDispatchContext.Provider>
      </AppContext.Provider>
    </>
  )
}

export const useAppState = () => {
  const appState = React.useContext(AppContext)
  const {cart} = appState

  const numberOfCartElements = calculateNumberOfCartElements(cart)
  const totalPrice = calculateTotalPrice(cart)
  const foundElement = findElement(cart)

  return {
    numberOfCartElements,
    totalPrice,
    foundElement,
    cart,
  }
}

export const useAppMutations = () => {
  const dispatch = React.useContext(AppDispatchContext)

  const addProduct = (payload: any) =>
    dispatch({
      type: 'addProduct',
      payload,
    })

  const emptyCart = () =>
    dispatch({
      type: 'emptyCart',
    })

  const addQuantity = (productInfo: any) =>
    dispatch({
      type: 'addQuantity',
      productInfo,
    })
  return {
    addProduct,
    emptyCart,
    addQuantity,
  }
}
