import React, {useReducer} from 'react'
import {cartReducer, ActionType} from '../reducer'
import {initialState} from '../../state'

export type InitialStateType = {
  cart: []
}

const defaultState = {} as InitialStateType

export const CartContext = React.createContext(defaultState)
export const CartDispatchContext = React.createContext(
  (() => {}) as React.Dispatch<ActionType>,
)

export const CartStateProvider = ({children}: {children: React.ReactNode}) => {
  //@ts-ignore
  const [state, dispatch] = useReducer(cartReducer, initialState)

  return (
    <>
      <CartContext.Provider value={state}>
        <CartDispatchContext.Provider value={dispatch}>
          {children}
        </CartDispatchContext.Provider>
      </CartContext.Provider>
    </>
  )
}
