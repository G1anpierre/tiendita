import React, {useContext} from 'react'
import {List, InputNumber, Avatar, Spin} from 'antd'
import {ProductType} from '../pages/index'
import {AppContext, useAppMutations} from '../context'

const ListCartProducts = () => {
  const appContext = useContext(AppContext)
  const {cart} = appContext
  const {addQuantity} = useAppMutations()

  const onChange = (value: number, id: number) => {
    // appContext.dispatch({type: 'addQuantity', productInfo: {value, id}})
    addQuantity({value, id})
  }

  return (
    <>
      <List
        dataSource={cart}
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
