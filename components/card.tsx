import React from 'react'
import Image from 'next/image'
import {ProductType} from '@pages/index'
import {useAppMutations} from '@stateHelpers/useDispatch'
import {useAppState} from '@stateHelpers/useState'
import {notification} from 'antd'
import Button from '@components/button'

export type CardProps = {
  product: ProductType
}

const Card: React.FC<CardProps> = ({product}) => {
  const {addProduct} = useAppMutations()
  const {foundElement} = useAppState()

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
    if (foundElement(product.id)) {
      callback(true)
    } else {
      addProduct({...product, quantity: 1})
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
            layout="fill"
            objectFit="scale-down"
          />
        </div>
        <div className="card__text-info">
          <div className="card__subtitle">{product.price}</div>
          <div className="card__title">{product.title}</div>
        </div>
        <Button callback={() => handleAddProduct(product, openNotification)}>
          Agregar
        </Button>
      </div>
      <style jsx>{`
        .card {
          display: grid;
          grid-template-column: auto;
          grid-template-rows: 200px 150px 50px;
        }

        .card__subtitle {
          margin-bottom: 16px;
        }

        .card__image-container {
          position: relative;
          width: 100%;
          height: auto;
          object-fit: cover;
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
