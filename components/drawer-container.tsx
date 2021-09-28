import React, {useState, useContext} from 'react'
import {Drawer, Button, Space} from 'antd'
import {DrawerProps} from 'antd/es/drawer'
import {AppContext} from '../pages/index'
import {calculateNumberOfCartElements, calculateTotalPrice} from '../utilities'
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
  const appContext = useContext(AppContext)

  const {
    state: {cart},
  } = appContext

  const handleEmptyCart = () => {
    appContext.dispatch({type: 'emptyCart'})
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
              <Button type="primary" onClick={handleOpenDrawer}>
                <span className="quantity-cart">
                  {calculateNumberOfCartElements(cart)}
                </span>
                <span className="go-to-payment">Ir a pagar</span>
                <span className="total-price">{calculateTotalPrice(cart)}</span>
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
          background-color: blue;
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
