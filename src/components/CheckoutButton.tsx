'use client'
import React from 'react'
import {useCartState} from '@stateHelpers/useCartState'
// import {createCheckout} from 'src/app/utils/api'
import {checkoutStripe} from 'src/actions'

export const CheckoutButton = () => {
  const {numberOfCartElements, totalPrice, isDisable, cart} = useCartState()

  const checkoutStripeWithCart = checkoutStripe.bind(null, cart)

  return (
    <form action={checkoutStripeWithCart}>
      <button
        type="submit"
        disabled={isDisable}
        // onClick={() => createCheckout(cart)}
      >
        <span className="quantity-cart">{numberOfCartElements}</span>
        <span className="go-to-payment">Ir a pagar</span>
        <span className="total-price">{totalPrice}</span>
      </button>
      //{' '}
    </form>
  )
}
