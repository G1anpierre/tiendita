'use client'
import React, {useEffect, useReducer} from 'react'
import {cartReducer, ActionType} from '../reducer'
import {initialState, initializer} from '../../state'

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
  const [state, dispatch] = useReducer(cartReducer, initializer())

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state))
  }, [state])

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
