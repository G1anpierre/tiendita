import React, {Dispatch, useReducer} from 'react'

export type InitialProductsStateType = {
  products: ProductItemType[]
  jouleryProducts: ProductItemType[]
}

export type RatingItemType = {
  count: number
  rate: number
}

export type ProductItemType = {
  id: number
  title: string
  category: string
  description: string
  image: string
  price: number
  rating: RatingItemType
  quantity?: number
}

export type ProductsAction =
  | {
      type: 'LOAD_ALL_PRODUCTS' | 'LOAD_JOULERY_PRODUCTS'
      items: ProductItemType[]
    }
  | {
      type: 'ADD_ALL_PRODUCTS_QUANTITY'
      productInfo?: any
    }

// export type ProductType = {
//   [key: string]: ProductItemType
// }

// export type ProductsState = {
//   [key: string]: ProductType
// }

const defaultProductsState = {
  products: [],
  jouleryProducts: [],
} as InitialProductsStateType

const ProductsContext = React.createContext(defaultProductsState)
const ProductsDispatch = React.createContext(
  (() => {}) as Dispatch<ProductsAction>,
)

export const ProductsProvider = ({children}: {children: React.ReactNode}) => {
  const [state, dispatch] = useReducer(productsReducer, defaultProductsState)

  return (
    <ProductsContext.Provider value={state}>
      <ProductsDispatch.Provider value={dispatch}>
        {children}
      </ProductsDispatch.Provider>
    </ProductsContext.Provider>
  )
}

// Reducer

const productsReducer = (
  state: InitialProductsStateType,
  action: ProductsAction,
) => {
  switch (action.type) {
    case 'LOAD_ALL_PRODUCTS': {
      return {
        ...state,
        products: action.items,
      }
    }
    case 'LOAD_JOULERY_PRODUCTS': {
      return {
        ...state,
        jouleryProducts: action.items,
      }
    }

    case 'ADD_ALL_PRODUCTS_QUANTITY': {
      const {id, value} = action.productInfo
      return {
        ...state,
        cart: state.products.map((element: ProductItemType) => {
          if (element.id === id) {
            return {
              ...element,
              quantity: value,
            }
          }
          return element
        }),
      }
    }
    default:
      throw new Error(`Unhandled action type: `)
  }
}

// Consume Dispatch

export const useProductsMutations = () => {
  const dispatch = React.useContext(ProductsDispatch)

  const loadAllProducts = (items: ProductItemType[]) => {
    dispatch({
      type: 'LOAD_ALL_PRODUCTS',
      items,
    })
  }

  const loadJouleryProducts = (items: ProductItemType[]) => {
    dispatch({
      type: 'LOAD_JOULERY_PRODUCTS',
      items,
    })
  }

  const addAllProductsQuantity = (productInfo: any) =>
    dispatch({
      type: 'ADD_ALL_PRODUCTS_QUANTITY',
      productInfo,
    })

  return {
    loadAllProducts,
    loadJouleryProducts,
    addAllProductsQuantity,
  }
}

// Consume the State

export const useProductsState = () => {
  const productState = React.useContext(ProductsContext)

  const {products, jouleryProducts} = productState

  return {
    allProducts: products,
    allJouleryProducts: jouleryProducts,
  }
}
