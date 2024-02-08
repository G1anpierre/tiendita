import React from 'react'
import {List, InputNumber, Avatar, Spin} from 'antd'
import {useCartMutations} from '@stateHelpers/useCartDispatch'
import {useCartState} from '@stateHelpers/useCartState'

const ListCartProducts = () => {
  const {cart} = useCartState()
  const {addQuantity} = useCartMutations()

  const onChange = (value: number, id: number) => {
    addQuantity({value, id})
  }

  return (
    <>
      <List
        dataSource={cart}
        locale={{emptyText: ' '}}
        renderItem={(item: ProductType) => (
          <List.Item key={item.id}>
            <List.Item.Meta
              avatar={<Avatar src={item.image} size={64} />}
              title={<a href="https://ant.design">{item.title}</a>}
              description={item.price}
            />
            <div>
              <InputNumber
                size="small"
                min={1}
                max={100000}
                value={item.quantity}
                defaultValue={1}
                onChange={value => onChange(Number(value), item.id)}
              />
            </div>
          </List.Item>
        )}
      ></List>
    </>
  )
}

export default ListCartProducts
