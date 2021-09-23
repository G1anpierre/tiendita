import React, {useState, useContext} from 'react'
import {Drawer, Button, Space} from 'antd'
import {DrawerProps} from 'antd/es/drawer'
import {AppContext} from '../pages/index'

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

  const calculateNumberOfCartElements = cart => {
    let total = 0
    cart.forEach(element => {
      total += element.quantity
    })
    return total
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
            <Button type="primary" onClick={handleOpenDrawer}>
              <span className="quantity-cart">
                {calculateNumberOfCartElements(cart)}
              </span>
              Ir a pagar
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
          margin-right: 10px;
        }
      `}</style>
    </>
  )
}

export default DrawerContainer
