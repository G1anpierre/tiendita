import * as React from 'react'
import Image from 'next/image'

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from './ui/drawer'
import {Button} from './ui/button'
import {CartEmpty} from './Cart-empty'
import {CartProducsList} from './CartProducsList'
import {ScrollArea} from './ui/scroll-area'
import {CheckoutSection} from './CheckoutSection'
import {useCartMutations} from '../../stateHelpers/useCartDispatch'
import {useCartState} from '../../stateHelpers/useCartState'

export function DrawerDemo() {
  const {numberOfCartElements} = useCartState()
  const {emptyCart} = useCartMutations()

  return (
    <Drawer direction="right">
      <DrawerTrigger asChild>
        <Button>
          <div className="flex justify-center items-center gap-3 w-14">
            <span className="cart-info__icon">
              <Image
                src="/images/shopping-cart.svg"
                alt="shopping-cart"
                height={20}
                width={20}
              />
            </span>
            <span className="text-black">{numberOfCartElements}</span>
          </div>
        </Button>
      </DrawerTrigger>
      <DrawerContent className="h-screen top-0 right-0 left-auto mt-0 max-w-full rounded-none">
        <div className="mx-auto w-full h-full grid grid-cols-1 grid-rows-[50px_minmax(0px,_1fr)_auto]">
          <DrawerHeader className="flex items-center justify-between  row-start-1 row-end-2">
            <DrawerTitle>Mexico City Marriott Reforma Hotel</DrawerTitle>
            {numberOfCartElements ? (
              <Button
                variant="outline"
                onClick={() => {
                  emptyCart()
                }}
              >
                Empty Cart
              </Button>
            ) : (
              <DrawerClose asChild>
                <Button> Continue Shopping </Button>
              </DrawerClose>
            )}
          </DrawerHeader>
          <div className="p-4 row-start-2 row-end-3">
            {numberOfCartElements ? (
              <div className="h-full">
                <ScrollArea className="h-full">
                  <CartProducsList />
                </ScrollArea>
              </div>
            ) : (
              <CartEmpty />
            )}
          </div>
          <DrawerFooter className="row-start-3 row-end-4">
            <CheckoutSection />
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
