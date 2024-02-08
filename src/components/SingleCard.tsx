'use client'
import React, {useState} from 'react'
import {useCartMutations} from '@stateHelpers/useCartDispatch'
import {useCartState} from '@stateHelpers/useCartState'
import {Button} from './ui/button'

export const SingleCard = ({product}: {product: ProductType}) => {
  const {addProduct} = useCartMutations()
  const {isfoundElement} = useCartState()

  const [visible, setVisible] = useState(false)

  const handleToggleModal = () => {
    setVisible(!visible)
  }
  return (
    <div>
      <div className="relative">
        <div
          className="relative h-72 w-full overflow-hidden rounded-lg"
          onClick={handleToggleModal}
        >
          <img
            src={product.image}
            alt={product.title}
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div className="relative mt-4">
          <h3 className="text-sm font-medium text-gray-900 truncate">
            {product.title}
          </h3>
          {/* <p className="mt-1 text-sm text-gray-500">
        {product.}
      </p> */}
        </div>
        <div className="absolute inset-x-0 top-0 flex h-72 items-end justify-end overflow-hidden rounded-lg p-4">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
          />
          <p className="relative text-lg font-semibold text-white">
            {product.price}
          </p>
        </div>
      </div>
      <div className="mt-6">
        <Button
          type="button"
          onClick={() =>
            !isfoundElement(product.id) ? addProduct(product) : null
          }
          className="w-full"
        >
          {isfoundElement(product.id) ? 'Added' : 'Add to cart'}
          <span className="sr-only">, {product.title}</span>
        </Button>
      </div>
    </div>
  )
}
