import React from 'react'

import {CartProduct} from './CartProduct'
import {useCartState} from '../../stateHelpers/useCartState'

export const CartProducsList = () => {
  const {cart} = useCartState()

  return (
    <>
      <ul
        role="list"
        className="divide-y divide-gray-200 border-b border-t border-gray-200"
      >
        {cart.map((product, productIdx) => (
          <CartProduct key={product.id} product={product} />
        ))}
      </ul>
    </>
  )
}
