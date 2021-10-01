import React from 'react'
import {AppDispatchContext} from '../context'
import {ADD_PRODUCT, EMPTY_CART, ADD_QUANTITY} from './stateVariables'

export const useAppMutations = () => {
  const dispatch = React.useContext(AppDispatchContext)

  const addProduct = (payload: any) =>
    dispatch({
      type: ADD_PRODUCT,
      payload,
    })

  const emptyCart = () =>
    dispatch({
      type: EMPTY_CART,
    })

  const addQuantity = (productInfo: any) =>
    dispatch({
      type: ADD_QUANTITY,
      productInfo,
    })
  return {
    addProduct,
    emptyCart,
    addQuantity,
  }
}
