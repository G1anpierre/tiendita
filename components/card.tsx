import React, {useContext} from 'react'
import Image from 'next/image'
import {ProductType} from '../pages/index'
import {AppContext} from '../context'
import {notification} from 'antd'
import {findElement} from '../utilities'

export type CardProps = {
  product: ProductType
}

const Card: React.FC<CardProps> = ({product}) => {
  const appContext = useContext(AppContext)
  const {
    state: {cart},
  } = appContext

  const openNotification = (isSuccess: boolean) => {
    if (isSuccess) {
      notification.error({
        message: `Product was already added`,
      })
    } else {
      notification.success({
        message: `Product added`,
      })
    }
  }

  const handleAddProduct = (
    product: ProductType,
    callback: (isSuccess: boolean) => void,
  ) => {
    if (findElement(cart, product.id)) {
      callback(true)
    } else {
      appContext.dispatch({
        type: 'addProduct',
        payload: {...product, quantity: 1},
      })
      callback(false)
    }
  }

  return (
    <>
      <div className="card">
        <div className="card__image-container">
          <Image
            src={product.image}
            alt={product.title}
            height={50}
            width={50}
            layout="responsive"
          />
        </div>
        <div className="card__text-info">
          <div className="card__subtitle">{product.price}</div>
          <div className="card__title">{product.title}</div>
        </div>
        <button
          className="button-add-cart"
          onClick={() => handleAddProduct(product, openNotification)}
        >
          Agregar
        </button>
      </div>
      <style jsx>{`
        .card {
          display: grid;
          grid-template-column: auto;
          grid-template-rows: 1fr 0.65fr auto;
        }

        .card__subtitle {
          margin-bottom: 16px;
        }

        .button-add-cart {
          border: none;
          border-radius: 8px;
          color: white;
          background-color: #0ac763;
          padding: 10px 0;
          font: normal 400 14px/16px Poppins;
          cursor: pointer;
        }
      `}</style>
    </>
  )
}

export default Card
