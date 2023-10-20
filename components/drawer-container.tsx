import React from 'react'
import {Drawer, Button, Space} from 'antd'
import {useCartMutations} from '@stateHelpers/useDispatch'
import {useAppState} from '@stateHelpers/useState'
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
  const {numberOfCartElements, totalPrice, isDisable} = useAppState()
  const {emptyCart} = useCartMutations()

  const handleEmptyCart = () => {
    emptyCart()
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
            <Link href="/payment/card">
              <Button
                type="primary"
                onClick={handleOpenDrawer}
                disabled={isDisable}
              >
                <span className="quantity-cart">{numberOfCartElements}</span>
                <span className="go-to-payment">Ir a pagar</span>
                <span className="total-price">{totalPrice}</span>
              </Button>
            </Link>
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
