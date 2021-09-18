import React from 'react'
import Image from 'next/image'
import {AppContext} from '../pages/index'

const Header = () => {
  const appContext = React.useContext(AppContext)

  const {
    state: {cart},
  } = appContext

  return (
    <>
      <header className="header">
        <nav className="navbar">
          <div className="logo">Tiendita</div>
          <div className="place">Mexico City Reforma</div>
          <div className="cart-info">
            <span className="cart-info__icon">
              <Image
                src="/images/shopping-cart.svg"
                alt="shopping-cart"
                height={20}
                width={20}
              />
            </span>
            <span className="cart-info__quantity">{cart.length}</span>
          </div>
        </nav>
        <div className="hero">
          !Adquiere todos tus productos favoritos al mejor precio!
        </div>
      </header>
      <style jsx>{`
        .navbar {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: auto;
          grid-template-areas: 'logo cart-info' 'place place';
          align-items: center;
          padding: 15px 0;
        }

        .logo {
          grid-area: logo;
          font: italic 900 22px/16px Inter;
          color: #fc462d;
          cursor: pointer;
        }

        .place {
          grid-area: place;
          justify-self: center;
          cursor: pointer;
        }

        .cart-info {
          grid-area: cart-info;
          justify-self: end;
          padding: 8px 25px;
          background-color: #0ac763;
          border-radius: 8px;
          display: flex;
          align-items: center;
          cursor: pointer;
        }

        .cart-info__quantity {
          margin-left: 8px;
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

        @media screen and (min-width: 768px) {
          .navbar {
            grid-template-areas: 'logo place cart-info';
            grid-auto-flow: column;
            padding: 30px 0;
            margin-bottom: 30px;
          }

          .place {
            justify-self: end;
            margin-right: 10px;
          }

          .cart-info {
            margin-left: 10px;
          }
        }
      `}</style>
    </>
  )
}

export default Header
