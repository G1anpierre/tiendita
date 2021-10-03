import React from 'react'
import {Drawer, Button, Space} from 'antd'
import {useAppMutations} from '@stateHelpers/useDispatch'
import {useAppState} from '@stateHelpers/useState'
import {loadStripe} from '@stripe/stripe-js'
import {NEXT_PUBLIC_STRIPE_PUBLISH_KEY} from 'config'

import Link from 'next/link'

export type DrawerContainerProps = {
  children: React.ReactNode
  drawerIsOpen: boolean
  handleOpenDrawer: () => void
}

const stripePromise = loadStripe(`${NEXT_PUBLIC_STRIPE_PUBLISH_KEY}`)

const DrawerContainer: React.FC<DrawerContainerProps> = ({
  children,
  drawerIsOpen,
  handleOpenDrawer,
}) => {
  const {numberOfCartElements, totalPrice, isDisable} = useAppState()
  const {emptyCart} = useAppMutations()

  const handleEmptyCart = () => {
    emptyCart()
  }

  const handleClick = async () => {
    console.log('hanlde click')
    // const { sessionId } = await fetchCheckoutSeetion()
    const {sessionId} = await fetch('/api/checkout/session', {
      method: 'POST',
      headers: {
        'content-Type': 'application/json',
      },
      body: JSON.stringify({quantity: 1}),
    }).then(res => res.json())

    const stripe = await stripePromise
    const {error} = await stripe?.redirectToCheckout({
      sessionId,
    })
    console.log(error)
  }

  return (
    <>
      <Drawer
        title="Mexico City Marriott Reforma Hotel"
        placement="right"
        onClose={handleOpenDrawer}
        visible={drawerIsOpen}
        size="large"
        extra={
          <Space>
            <Button onClick={handleOpenDrawer}>Close</Button>
          </Space>
        }
        footer={
          <Space className="footer-buttons">
            <Button onClick={handleEmptyCart}>Vaciar canasta</Button>
            {/* <Link href="/payment/card"> */}
            <Button type="primary" onClick={handleClick} disabled={isDisable}>
              <span className="quantity-cart">{numberOfCartElements}</span>
              <span className="go-to-payment">Ir a pagar</span>
              <span className="total-price">{totalPrice}</span>
            </Button>
            {/* </Link> */}
          </Space>
        }
      >
        {children}
      </Drawer>
      <style jsx>{`
        :global(.footer-buttons) {
          display: flex;
          justify-content: space-between;
        }

        :global(.quantity-cart) {
          background-color: ${isDisable ? 'grey' : 'blue'};
          border-radius: 5px;
          padding: 0 8px;
        }

        :global(.go-to-payment) {
          margin: 0 25px;
          font-weight: bold;
        }

        :global(.total-price) {
          font-weight: ligth;
        }
      `}</style>
    </>
  )
}

export default DrawerContainer
