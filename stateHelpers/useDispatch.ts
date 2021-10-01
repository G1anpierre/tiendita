import React from 'react'
import {AppDispatchContext} from '../context'

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
