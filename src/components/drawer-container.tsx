'use client'
import React from 'react'
import {Drawer, Button, Space} from 'antd'
import {useCartMutations} from '@stateHelpers/useCartDispatch'
import {useCartState} from '@stateHelpers/useCartState'
import {CheckoutButton} from './CheckoutButton'

export type DrawerContainerProps = {
  children: React.ReactNode
  drawerIsOpen: boolean
  handleOpenDrawer: () => void
}

const DrawerContainer: React.FC<DrawerContainerProps> = ({
  children,
  drawerIsOpen,
  handleOpenDrawer,
}) => {
  const {isDisable} = useCartState()
  const {emptyCart} = useCartMutations()

  const handleEmptyCart = () => {
    emptyCart()
    localStorage.removeItem('cart')
  }

  return (
    <>
      <Drawer
        title="Mexico City Marriott Reforma Hotel"
        placement="right"
        onClose={handleOpenDrawer}
        open={drawerIsOpen}
        size="large"
        extra={
          <Space>
            <Button onClick={handleOpenDrawer}>Close</Button>
          </Space>
        }
        footer={
          <Space className="footer-buttons">
            <Button onClick={handleEmptyCart}>Vaciar canasta</Button>
            <CheckoutButton />
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
