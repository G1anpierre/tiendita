'use client'
import React from 'react'
import {useCartState} from '@stateHelpers/useCartState'
import {checkoutStripe} from 'src/actions'
import {Button} from '@components/@/components/ui/button'

export const CheckoutButton = () => {
  const {numberOfCartElements, totalPrice, isDisable, cart} = useCartState()

  const checkoutStripeWithCart = checkoutStripe.bind(null, cart)

  return (
    <form action={checkoutStripeWithCart}>
      <Button type="submit" disabled={isDisable}>
        <span className="quantity-cart">{numberOfCartElements}</span>
        <span className="go-to-payment">Ir a pagar</span>
        <span className="total-price">{totalPrice}</span>
      </Button>
    </form>
  )
}
