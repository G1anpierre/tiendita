import React from 'react'
import Card from '@components/card'
import Header from '@components/header'
import {useCartState} from '@stateHelpers/useCartState'
import {useProductsMutations} from '../context'
import {useProductsState} from 'context/productsContext'
import {ProductItemType} from 'types/product'

export type RatingType = {
  count: number
  rate: number
}

export type ProductType = {
  id: number
  title: string
  category: string
  description: string
  image: string
  price: number
  rating: RatingType
  quantity?: number
} & {quantity: number; generalSize: string[]}

export type ProductsType = {
  data: ProductType[]
}

export type HomeProps = {
  generalProductsUpdate: ProductType[]
  jouleryProductsUpdate: ProductType[]
}

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

export async function getStaticProps() {
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
    props: {generalProductsUpdate, jouleryProductsUpdate}, // will be passed to the page component as props
  }
}

const Home: React.FC<HomeProps> = ({
  generalProductsUpdate,
  jouleryProductsUpdate,
}) => {
  const {loadAllProducts, loadJouleryProducts} = useProductsMutations()

  React.useEffect(() => {
    loadAllProducts(generalProductsUpdate)
    loadJouleryProducts(jouleryProductsUpdate)
  }, [])

  return (
    <>
      <div className="hero">
        !Adquiere todos tus productos favoritos al mejor precio!
      </div>
      <div className="main">
        <section className="ofertas">
          <h1 className="ofertas__title">Ofertas</h1>
          <div className="ofertas__cards">
            {generalProductsUpdate?.map((product: ProductType) => (
              <Card product={product} key={product.id} />
            ))}
          </div>
        </section>
        <section className="populars">
          <h1 className="populars__title">Los mas populares</h1>
          <div className="populars__cards">
            {jouleryProductsUpdate?.map((product: ProductType) => (
              <Card product={product} key={product.id} />
            ))}
          </div>
        </section>
      </div>
      <style jsx>
        {`
          .ofertas,
          .populars {
            background-color: white;
            border-radius: 16px;
            padding: 15px;
          }

          .ofertas__cards {
            display: grid;
            grid-gap: 10px;
            grid-template-columns: repeat(15, 175px);
            overflow-x: auto;
          }
          .populars__cards {
            display: grid;
            grid-gap: 10px;
            grid-template-columns: repeat(
              ${jouleryProductsUpdate?.length},
              175px
            );
            overflow-x: auto;
          }

          .hero {
            background-image: url('./images/banner-desktop.svg');
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            height: 250px;
            border-radius: 16px;
            color: white;
            display: flex;
            justify-content: center;
            text-align: center;
            align-items: center;
            font: normal 600 14px/24px Poppins;
            margin-bottom: 15px;
          }

          .card {
            display: grid;
          }

          @media screen and (min-width: 768px) {
            .ofertas,
            .populars {
              margin-bottom: 40px;
              box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
            }
            .ofertas__cards,
            .populars__cards {
              grid-gap: 48px;
            }

            .hero {
              font: normal 600 28px/42px Poppins;
              margin-bottom: 40px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
