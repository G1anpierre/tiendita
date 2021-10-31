import React, {useReducer} from 'react'
import {reducer, ActionType} from '../reducer'
import {initialState} from '../state'

export type InitialStateType = {
  cart: []
}

const defaultState = {} as InitialStateType

export const CartContext = React.createContext(defaultState)
export const AppDispatchContext = React.createContext(
  (() => {}) as React.Dispatch<ActionType>,
)

export const CartStateProvider = ({children}: {children: React.ReactNode}) => {
  //@ts-ignore
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <>
      <CartContext.Provider value={state}>
        <AppDispatchContext.Provider value={dispatch}>
          {children}
        </AppDispatchContext.Provider>
      </CartContext.Provider>
    </>
  )
}
