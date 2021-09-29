import React from 'react'
import Card from '../components/card'
import Header from '../components/header'

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
}

export type ProductsType = {
  data: ProductType[]
}

export type HomeProps = {
  data: ProductType[]
  data2: ProductType[]
}

export async function getStaticProps() {
  const res = await fetch(`https://fakestoreapi.com/products?limit=15`)
  const res2 = await fetch(
    `https://fakestoreapi.com/products/category/jewelery`,
  )
  const data = await res.json()
  const data2 = await res2.json()

  if (!data && !data2) {
    return {
      notFound: true,
    }
  }

  return {
    props: {data, data2}, // will be passed to the page component as props
  }
}

const Home: React.FC<HomeProps> = ({data, data2}) => {
  // const [state, dispatch] = React.useReducer(reducer, initialState)

  return (
    <>
      {/* <AppContext.Provider value={{state, dispatch}}> */}
      <div className="home">
        <Header />
        <div className="main">
          {/* Ofertas */}
          <section className="ofertas">
            <h1 className="ofertas__title">Ofertas</h1>
            <div className="ofertas__cards">
              {data.map((product: ProductType) => (
                <Card product={product} key={product.id} />
              ))}
            </div>
          </section>

          {/* Populars */}
          <section className="populars">
            <h1 className="populars__title">Los mas populares</h1>
            <div className="populars__cards">
              {data2.map((product: ProductType) => (
                <Card product={product} key={product.id} />
              ))}
            </div>
          </section>
        </div>
        <footer className="footer">footer</footer>
      </div>
      {/* </AppContext.Provider> */}
      <style jsx>
        {`
          .home {
            padding: 0 15px;
          }

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
            grid-template-columns: repeat(${data2.length}, 175px);
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
