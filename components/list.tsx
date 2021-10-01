import React from 'react'
import {List, InputNumber, Avatar, Spin} from 'antd'
import {ProductType} from '../pages/index'
import {useAppMutations} from '../stateHelpers/useDispatch'
import {useAppState} from '../stateHelpers/useState'

const ListCartProducts = () => {
  const {cart} = useAppState()
  const {addQuantity} = useAppMutations()

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
                defaultValue={item.quantity}
                onChange={value => onChange(value, item.id)}
              />
            </div>
          </List.Item>
        )}
      ></List>
    </>
  )
}

export default ListCartProducts
