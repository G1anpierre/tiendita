import {useCartState} from '@stateHelpers/useCartState'
import React from 'react'
import {CheckoutButton} from './CheckoutButton'
import {Button} from './ui/button'
import {DrawerClose} from './ui/drawer'

export const CheckoutSection = () => {
  const {totalPrice} = useCartState()

  return (
    <section aria-labelledby="summary-heading" className="mt-10">
      <h2 id="summary-heading" className="sr-only">
        Order summary
      </h2>

      <div>
        <dl className="space-y-4">
          <div className="flex items-center justify-between">
            <dt className="text-base font-medium text-gray-900">Subtotal</dt>
            <dd className="ml-4 text-base font-medium text-gray-900">
              {totalPrice}
            </dd>
          </div>
        </dl>
        <p className="mt-1 text-sm text-gray-500">
          Shipping and taxes will be calculated at checkout.
        </p>
      </div>

      <div className="mt-10">
        <CheckoutButton />
      </div>

      <div className="mt-6 text-center text-sm">
        <p>
          or{' '}
          <DrawerClose asChild>
            <Button variant="link"> Continue Shopping </Button>
          </DrawerClose>
        </p>
      </div>
    </section>
  )
}
