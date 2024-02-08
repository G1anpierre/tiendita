import React from 'react'
import Image from 'next/image'

import {DrawerClose} from './ui/drawer'
import {Button} from './ui/button'

const CartEmpty = () => {
  return (
    <>
      <div className="container-empty-box">
        <div className="message-empty-box">
          <div className="message-empty-box-container-image">
            <Image
              src="/images/family-values-shopping.svg"
              alt="shopping-cart"
              height={50}
              width={50}
              layout="responsive"
              className="empty-box-image"
            />
          </div>
          <h1 className="message-empty-box-title">Tu canasta esta vacia</h1>
          {/* <button>Agregar productos</button> */}
          {/* <Button callback={() => handleCloseDrawer()}>
            Agregar productos
          </Button> */}
          <DrawerClose asChild>
            <Button variant="outline">Close</Button>
          </DrawerClose>
        </div>
      </div>
      <style jsx>{`
        .container-empty-box {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100%;
        }

        .message-empty-box {
          display: grid;
          grid-template-columns: auto;
          grid-template-rows: 1fr 0.35fr auto;
        }
      `}</style>
    </>
  )
}

export default CartEmpty
