import React from 'react'
import {SingleCard} from './SingleCard'

export const Cards = ({products}: {products?: ProductType[]}) => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-xl font-bold text-gray-900">Products</h2>

        <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
          {products?.map(product => (
            <SingleCard product={product} key={product.id} />
          ))}
        </div>
      </div>
    </div>
  )
}
