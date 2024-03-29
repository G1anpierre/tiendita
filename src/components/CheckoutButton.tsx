'use client'
import React from 'react'
import {useCartState} from '../../stateHelpers/useCartState'
import {checkoutStripe} from '@/actions'
import {Button} from './ui/button'

export const CheckoutButton = () => {
  const {isDisable, cart} = useCartState()

  const checkoutStripeWithCart = checkoutStripe.bind(null, cart)

  return (
    <form action={checkoutStripeWithCart}>
      <Button type="submit" disabled={isDisable} className="w-full">
        <span className="go-to-payment">Checkout</span>
      </Button>
    </form>
  )
}
