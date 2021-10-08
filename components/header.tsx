import React, {useState} from 'react'
import Image from 'next/image'
import {useAppState} from '@stateHelpers/useState'
import DrawerContainer from '@components/drawer-container'
import ListCartProducts from '@components/list'
import CartEmpty from '@components/cart-empty'
import {useSession, signIn, signOut} from 'next-auth/react'
import {useRouter} from 'next/router'

const Header: React.FC = () => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false)
  const {numberOfCartElements} = useAppState()
  const {data: session, status} = useSession()
  const router = useRouter()

  console.log('router: ', router)

  const handleOpenDrawer = () => {
    setDrawerIsOpen(!drawerIsOpen)
  }

  return (
    <>
      <header className="header">
        <nav className="navbar">
          <div className="logo">Tiendita</div>
          <div className="place">Mexico City Reforma</div>
          {session ? (
            <div className="user" onClick={() => signOut()}>
              Hello Gianpierre, Sign Out
            </div>
          ) : (
            <div className="user" onClick={() => signIn()}>
              Sign In
            </div>
          )}
          {router.asPath !== '/payment/card' && (
            <div className="cart-info" onClick={handleOpenDrawer}>
              <span className="cart-info__icon">
                <Image
                  src="/images/shopping-cart.svg"
                  alt="shopping-cart"
                  height={20}
                  width={20}
                />
              </span>
              <span className="cart-info__quantity">
                {numberOfCartElements}
              </span>
            </div>
          )}
        </nav>
      </header>
      <DrawerContainer
        drawerIsOpen={drawerIsOpen}
        handleOpenDrawer={handleOpenDrawer}
      >
        {numberOfCartElements ? (
          <ListCartProducts />
        ) : (
          <CartEmpty handleOpenDrawer={handleOpenDrawer} />
        )}
      </DrawerContainer>
      <style jsx>{`
        .navbar {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: auto;
          grid-template-areas: 'logo user cart-info' 'place place place';
          align-items: center;
          padding: 15px 0;
        }

        .logo {
          grid-area: logo;
          font: italic 900 22px/16px Inter;
          color: var(--tomato);
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
          background-color: var(--green);
          border-radius: 8px;
          display: flex;
          align-items: center;
          cursor: pointer;
        }

        .cart-info__quantity {
          margin-left: 8px;
        }

        .user {
          grid-area: user;
          justify-self: end;
          padding-right: 10px;
          margin-right: 10px;
          border-right: 1px solid black;
          cursor: pointer;
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
            grid-template-areas: 'logo user place cart-info';
            grid-auto-flow: column;
            grid-column-gap: 10px;
            padding: 30px 0;
            margin-bottom: 30px;
          }

          .user {
            margin-right: 0px;
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
