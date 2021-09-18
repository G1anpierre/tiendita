import React, {useState} from 'react'
import {Drawer, Button, Space} from 'antd'
import {DrawerProps} from 'antd/es/drawer'

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
  const [size, setSize] = useState<DrawerProps['size']>('large')

  return (
    <>
      <Drawer
        title="Drawer"
        placement="right"
        onClose={handleOpenDrawer}
        visible={drawerIsOpen}
        size={size}
        extra={
          <Space>
            <Button onClick={handleOpenDrawer}>Cancel</Button>
            <Button type="primary" onClick={handleOpenDrawer}>
              OK
            </Button>
          </Space>
        }
      >
        {children}
      </Drawer>
      <style jsx>{`
        :global(.ant-drawer-content-wrapper) {
          width: 768px;
        }
      `}</style>
    </>
  )
}

export default DrawerContainer
