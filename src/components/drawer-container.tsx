import React from 'react'
import {Drawer, Button, Space} from 'antd'
import {useCartMutations} from '@stateHelpers/useCartDispatch'
import {useCartState} from '@stateHelpers/useCartState'
import Link from 'next/link'

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
  const {numberOfCartElements, totalPrice, isDisable, cart} = useCartState()
  const {emptyCart} = useCartMutations()

  const handleEmptyCart = () => {
    emptyCart()
  }

  console.log('cart :', cart)

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

            <Button
              type="primary"
              onClick={handleOpenDrawer}
              disabled={isDisable}
            >
              <span className="quantity-cart">{numberOfCartElements}</span>
              <span className="go-to-payment">Ir a pagar</span>
              <span className="total-price">{totalPrice}</span>
            </Button>
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
