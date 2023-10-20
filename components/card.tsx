import React, {useState} from 'react'
import Image from 'next/image'
import {ProductType} from '@pages/index'
import {useCartMutations} from '@stateHelpers/useDispatch'
import {useAppState} from '@stateHelpers/useState'
import {notification, Modal, Row, Col, Select, InputNumber} from 'antd'
import Button from '@components/button'
import {selectProduct} from '../lib/gtm'

export type CardProps = {
  product: ProductType & {quantity: number; generalSize: string[]}
}

const Card: React.FC<CardProps> = ({product}) => {
  const {addProduct, addQuantity} = useCartMutations()
  const {isfoundElement, specificProduct} = useAppState()
  const [visible, setVisible] = useState(false)
  const {Option} = Select

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

  const handleToggleModal = () => {
    setVisible(!visible)
  }

  const handleSelectProduct = (value: string) => {
    console.log('value', value)
  }

  const handleAddProduct = (
    product: ProductType,
    callback: (isSuccess: boolean) => void,
  ) => {
    selectProduct(product)
    if (isfoundElement(product.id)) {
      callback(true)
    } else {
      addProduct(product)
      callback(false)
    }
  }

  const onChange = (value: number, id: number) => {
    addQuantity({value, id})
  }

  return (
    <>
      <div className="card">
        <div className="card__image-container" onClick={handleToggleModal}>
          <Image
            src={product.image}
            alt={product.title}
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

        <Modal
          title={product.title}
          centered
          visible={visible}
          onOk={handleToggleModal}
          onCancel={handleToggleModal}
          width={1000}
        >
          <Row gutter={[16, 16]} className="upper-part">
            <Col span={12}>
              <div className="modal-product-image">
                <Image
                  src={product.image}
                  alt={product.title}
                  layout="fill"
                  objectFit="scale-down"
                />
              </div>
            </Col>
            <Col span={12}>
              <div className="modal-product-info">
                <h2 className="modal-product-info__title">{product.title}</h2>
                <h3 className="modal-product-info__price">{product.price}</h3>
                <p className="modal-product-info__description">
                  {product.description}
                </p>
                <div>
                  <h3>Selecciona la talla que deseas</h3>
                  <Select
                    defaultValue={product.generalSize[2]}
                    style={{width: '80%'}}
                    onChange={handleSelectProduct}
                  >
                    {product.generalSize.map(size => (
                      <Option key={size} value={size}>
                        {size}
                      </Option>
                    ))}
                  </Select>
                </div>
                <Row>
                  <Col span={10}>
                    <InputNumber
                      size="middle"
                      min={1}
                      max={100000}
                      defaultValue={1}
                      value={specificProduct(product.id).quantity}
                      onChange={value => onChange(value, product.id)}
                    />
                  </Col>
                  <Col span={9}>
                    <Button
                      callback={() =>
                        handleAddProduct(product, openNotification)
                      }
                    >
                      Agregar
                    </Button>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
          <Row className="lower-part">
            <Col span={24}>
              <div className="modal-slider">
                <h3 className="modal-slider-title">Productos relacionados</h3>
              </div>
            </Col>
          </Row>
        </Modal>
      </div>
      <style jsx>{`
        .card {
          display: grid;
          grid-template-column: auto;
          grid-template-rows: 200px 150px 50px;
        }

        :global(.upper-part) {
          margin-bottom: 120px;
        }

        .card__subtitle {
          margin-bottom: 16px;
        }

        .card__image-container {
          position: relative;
          width: 100%;
          height: auto;
          object-fit: cover;
          cursor: pointer;
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

        .modal-product-info__description {
          margin-bottom: 20px;
        }
      `}</style>
    </>
  )
}

export default Card
