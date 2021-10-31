import React from 'react'
import {
  calculateNumberOfCartElements,
  calculateTotalPrice,
  findSpecificProduct,
  findElement,
  cartIsEmpty,
} from '../utilities'
import {CartContext} from '../context'

export const useAppState = () => {
  const appState = React.useContext(CartContext)
  const {cart} = appState

  const numberOfCartElements = calculateNumberOfCartElements(cart)
  const totalPrice = calculateTotalPrice(cart)
  const isfoundElement = findElement(cart)
  const isDisable = cartIsEmpty(cart)
  const specificProduct = findSpecificProduct(cart)

  return {
    numberOfCartElements,
    specificProduct,
    totalPrice,
    isfoundElement,
    cart,
    isDisable,
  }
}
