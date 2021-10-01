import React, {useReducer} from 'react'
import {reducer, ActionType} from '../reducer'
import {initialState} from '../state'

export type InitialStateType = {
  cart: []
}

const defaultState = {} as InitialStateType

export const AppContext = React.createContext(defaultState)
export const AppDispatchContext = React.createContext(
  (() => {}) as React.Dispatch<ActionType>,
)

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
