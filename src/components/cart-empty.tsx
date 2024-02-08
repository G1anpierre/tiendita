import React from 'react'
import Image from 'next/image'

import {DrawerClose} from './ui/drawer'
import {Button} from './ui/button'

const CartEmpty = () => {
  return (
    <>
      <div className="flex justify-center items-center h-full">
        <div className="flex flex-col gap-3">
          <div>
            <Image
              src="/images/family-values-shopping.svg"
              alt="shopping-cart"
              height={50}
              width={50}
              layout="responsive"
              className="empty-box-image"
            />
          </div>
          <h1 className="text-center">Your Cart is Empty</h1>
          <DrawerClose asChild>
            <Button variant="outline"> Add Products </Button>
          </DrawerClose>
        </div>
      </div>
    </>
  )
}

export default CartEmpty
