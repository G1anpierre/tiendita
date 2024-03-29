// 'use client'
import {Cards} from '@/components/Cards'
import Link from 'next/link'
import React from 'react'

export type DataToAdd = {
  quantity: number
  generalSize: string[]
}

// * Helper function to update data not provided by the API like quantity and price
const updateData = (data: ProductItemType[], data2: ProductItemType[]) => {
  const dataToAdd = {
    quantity: 1,
    generalSize: ['extra small', 'small', 'medium', 'large', 'extra large'],
  }

  const generalProductsUpdate = data?.map(singleData => ({
    ...singleData,
    ...dataToAdd,
  }))
  const jouleryProductsUpdate = data2?.map(singleData => ({
    ...singleData,
    ...dataToAdd,
  }))

  return {
    generalProductsUpdate,
    jouleryProductsUpdate,
  }
}

const getProducts = async () => {
  const res = await fetch(`https://fakestoreapi.com/products?limit=15`)
  const res2 = await fetch(
    `https://fakestoreapi.com/products/category/jewelery`,
  )
  const generalProducts = await res.json()
  const jouleryProducts = await res2.json()

  if (!generalProducts && !jouleryProducts) {
    return {
      notFound: true,
    }
  }

  const {generalProductsUpdate, jouleryProductsUpdate} = updateData(
    generalProducts,
    jouleryProducts,
  )

  return {
    generalProductsUpdate,
    jouleryProductsUpdate, // will be passed to the page component as props
  }
}

const Home = async () => {
  const {generalProductsUpdate, jouleryProductsUpdate} = await getProducts()

  // const {loadAllProducts, loadJouleryProducts} = useProductsMutations()

  // React.useEffect(() => {
  //   loadAllProducts(generalProductsUpdate)
  //   loadJouleryProducts(jouleryProductsUpdate)
  // }, [])

  return (
    <>
      <div className="main">
        <div className="bg-white">
          <div className="relative bg-gray-900">
            {/* Decorative image and overlay */}
            <div
              aria-hidden="true"
              className="absolute inset-0 overflow-hidden"
            >
              <img
                src="https://tailwindui.com/img/ecommerce-images/home-page-01-hero-full-width.jpg"
                alt=""
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gray-900 opacity-50"
            />

            <div className="relative mx-auto flex max-w-3xl flex-col items-center px-6 py-32 text-center sm:py-64 lg:px-0">
              <h1 className="text-4xl font-bold tracking-tight text-white lg:text-6xl">
                New arrivals are here
              </h1>
              <p className="mt-4 text-xl text-white">
                The new arrivals have, well, newly arrived. Check out the latest
                options from our summer small-batch release while they're still
                in stock.
              </p>
              <Link
                href="#"
                className="mt-8 inline-block rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-gray-900 hover:bg-gray-100"
              >
                Shop New Arrivals
              </Link>
            </div>
          </div>
        </div>
        <Cards products={generalProductsUpdate} />
        <Cards products={jouleryProductsUpdate} />
      </div>
    </>
  )
}

export default Home
