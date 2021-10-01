import React from 'react'
import {
  calculateNumberOfCartElements,
  calculateTotalPrice,
  findElement,
} from '../utilities'
import {AppContext} from '../context'

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
