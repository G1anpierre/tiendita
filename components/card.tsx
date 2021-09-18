import React from 'react'
import Image from 'next/image'
import {ProductType} from '../pages/index'
import {AppContext} from '../pages/index'
import {notification} from 'antd'

export type CardProps = {
  product: ProductType
}

const Card: React.FC<CardProps> = ({product}) => {
  const appContext = React.useContext(AppContext)

  const openNotification = () => {
    notification.success({
      message: `Producto añadido`,
    })
  }

  const handleAddProduct = (product: ProductType, callback: () => void) => {
    appContext.dispatch({type: 'addProduct', payload: product})
    callback()
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
